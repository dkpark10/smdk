import type { NextFunction, Request, Response } from "express";

export const authValidator = (
  request: Request,
  _: Response,
  next: NextFunction
) => {
  if (request) {
    console.log("middleware");
    next();
  }
};
