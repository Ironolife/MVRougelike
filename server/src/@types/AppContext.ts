import DataLoader from "dataloader";
import { Request, Response } from "express";
import { Redis } from "ioredis";
import Class from "../entities/Class";
import User from "../entities/User";

type AppContext = {
  req: Request;
  res: Response;
  redis: Redis;
  dataLoaders: {
    userLoader: DataLoader<number, User, number>;
    classLoader: DataLoader<number, Class, number>;
  };
};

export default AppContext;
