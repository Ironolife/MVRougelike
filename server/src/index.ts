import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import cors from "cors";
import dotenvSafe from "dotenv-safe";
import express from "express";
import session from "express-session";
import Redis from "ioredis";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import AppContext from "./@types/appContext";
import { COOKIE_MAXAGE, IS_PROD } from "./constants";
import Class from "./entities/Class";
import User from "./entities/User";
import ClassResolver from "./resolvers/class/class";
import UserResolver from "./resolvers/user/user";
import dataLoader from "./utils/dataloader";

dotenvSafe.config({
  allowEmptyValues: true
});

const main = async () => {
  const connection = await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: ["dist/entities/**/*.js"],
    migrations: ["dist/migrations/*.js"],
    synchronize: false,
    logging: !IS_PROD
  });
  await connection.runMigrations();

  const app = express();

  app.set("trust proxy", 1);

  const origins: string[] = JSON.parse(process.env.CORS_ORIGIN);
  app.use(
    cors({
      origin: (origin, callback) =>
        callback(null, origin !== undefined && origins.indexOf(origin) !== -1),
      credentials: true
    })
  );

  const RedisStore = connectRedis(session);
  const redis = new Redis(process.env.REDIS_URL);
  app.use(
    session({
      name: process.env.SESSION_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true
      }),
      cookie: {
        maxAge: COOKIE_MAXAGE,
        httpOnly: true,
        sameSite: "lax",
        secure: IS_PROD,
        domain: IS_PROD ? process.env.DOMAIN : undefined
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET,
      resave: false
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, ClassResolver],
      validate: false
    }),
    context: ({ req, res }): AppContext => ({
      req,
      res,
      redis,
      dataLoaders: {
        userLoader: dataLoader(User.getRepository()),
        classLoader: dataLoader(Class.getRepository())
      }
    })
  });
  apolloServer.applyMiddleware({ app, cors: false });

  const port = parseInt(process.env.PORT);
  app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
  });

  app.get("/test", (_, res) => {
    res.send("SUCCESS");
  });
};

main();
