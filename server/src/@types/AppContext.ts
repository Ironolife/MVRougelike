import DataLoader from "dataloader";
import { Request, Response } from "express";
import { Redis } from "ioredis";
import User from "../entities/User";

type AppContext = {
  req: Request;
  res: Response;
  redis: Redis;
  dataLoaders: {
    userLoader: DataLoader<number, User, number>;
  };
};

export default AppContext;
