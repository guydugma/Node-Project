import { RequestHandler } from "express";
import BizCardsError from "../errors/BizCardsError";
import { validateToken } from "./validate-token";
import { cardService } from "../services/card-service";


const _isCreator: RequestHandler = async (req, res, next) => {
  const c = await cardService.getCardById(req.params.id);
  if ((c.userId === req.payload._id) || req.payload.isAdmin) {
    return next();
  }
  next(new BizCardsError(403, "Must be an admin or the business owner")); 
}

export const isCreator = [validateToken, _isCreator]