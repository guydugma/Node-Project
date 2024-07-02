import { Router } from "express";
import { validateCard, validateUser } from "../middleware/joi";
import { cardService } from "../services/card-service";
import { isBusiness } from "../middleware/is-business";
import BizCardsError from "../errors/BizCardsError";
import { validateToken } from "../middleware/validate-token";
import { isCreator } from "../middleware/is-creator";
import { Logger } from "../logs/logger";
import { isCard } from "../middleware/is-card";

const router = Router();

router.get("/my-cards", validateToken, async (req, res, next) => {
  try {
    const cards = await cardService.getCardByUserId(req.payload._id);
    res.json(cards);
  } catch (e) {
    next(e);
  }
});
router.post("/", ...isBusiness, validateCard, async (req, res, next) => {
  try {
    const result = await cardService.createCard(req.body, req.payload._id);
    res.status(201).json(result);
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const cards = await cardService.getCards();
    res.json(cards);
  } catch (e) {
    next(e);
  }
});

router.get("/:id",...isCard, async (req, res, next) => {
  try {
    const card = await cardService.getCard(req.params.id);
    res.json(card);
  } catch (e) {
    next(e);
  }
});

router.put("/:id",...isCard, ...isCreator, validateCard, async (req, res, next) => {
  try {
    const card = await cardService.updateCard(req.params.id,req.body);
    res.json(card);
  } catch (e) {
    next(e);
  }
})

router.patch("/:id", validateToken, async (req, res, next) => {
  try {
    const card = await cardService.likeCard(req.params._id, req.payload._id);
    res.json(card);
  } catch (e) {
    next(e);
  }
})

router.delete("/:id",...isCard, ...isCreator,validateToken, async (req, res, next) => {
  try {
    const card = await cardService.deleteCard(req.params.id);
    res.json(card);
  } catch (e) {
    next(e);
  }
});

export { router as cardRouter };
