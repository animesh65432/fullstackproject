import jwtwebtoken from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { UsersSchemaTypes } from "../types";
import Config from "../config";
import { Users } from "../models";

export type JwtPayload = {
  Email: string;
};

declare global {
  namespace Express {
    interface Request {
      user: UsersSchemaTypes;
    }
  }
}

const middleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({
        message: "did not get the token",
      });
    }

    const verify = jwtwebtoken.verify(
      token,
      Config.jsonwebsecrect as string
    ) as JwtPayload;

    const checkUser = (await Users.findOne({
      Email: verify.Email,
    })) as UsersSchemaTypes;

    if (!checkUser) {
      return res.status(400).json({
        message: "invaild token",
      });
    }

    req.user = checkUser;

    next();
  } catch (error) {
    console.error("Error from middleware:", error);
    return res.status(500).json({
      messge: "internal server errors",
    });
  }
};

export default middleware;
