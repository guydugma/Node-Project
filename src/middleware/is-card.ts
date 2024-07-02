import { RequestHandler } from "express";
import { validateToken } from "./validate-token";
import { cardService } from "../services/card-service";
import notFound from "./not-found";
import { Logger } from "../logs/logger";
import BizCardsError from "../errors/BizCardsError";


const _isCard: RequestHandler = async (req, res, next) => {
  const cardId = req.params.id;
  const c = await cardService.getCardById(cardId);

  if (c) {
    return next();
  }
  next(new BizCardsError(400, "Illegal card id"));
}

export const isCard =[validateToken,_isCard]