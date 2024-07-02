import { RequestHandler } from "express";
import BizCardsError from "../errors/BizCardsError";
import { validateToken } from "./validate-token";

const _isSelf: RequestHandler = (req, res, next) => {
  if (req.params.id === req.payload?._id) {
    return next();
  }

  next(new BizCardsError(403, "Must be the requested user"));
};

export const isSelf = [validateToken, _isSelf];
