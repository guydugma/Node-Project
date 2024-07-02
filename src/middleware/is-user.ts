import BizCardsError from "../errors/BizCardsError";
import { usersService } from "../services/users-service";
import { validateToken } from "./validate-token";
import { RequestHandler } from 'express';


const _isUser:RequestHandler =async (req, res, next) => {
  const u = await usersService.getUserById(req.params.id);
  if (u) {
    return next();
  }
  next(new BizCardsError(400, "Illegal user id"));
}

export const isUser = [validateToken, _isUser]