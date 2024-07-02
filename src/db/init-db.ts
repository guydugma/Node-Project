import { IUser } from "../@types/@types";
import { Logger } from "../logs/logger";
import { cardService } from "../services/card-service";
import { usersService } from "../services/users-service";
import { users,cards } from "./initial-data";
import Card from "./models/card-model";
import User from "./models/user-model";
import cardSchema from './schemas/card-schema';

const initDB = async () => {
  try {
    const usersCount = await User.countDocuments();
    const cardsCount = await Card.countDocuments();
    Logger.log(usersCount);
    Logger.log(cardsCount);
    if (usersCount === 0) {
      for (let u of users) {
        const saved = await usersService.createUser(u);
        Logger.verbose(saved);
      }
    }

    if (cardsCount === 0) {
      for (let c of cards) {
        const saved = await cardService.createCard(c,c.userId);
        Logger.verbose(saved);
      }
    }
    return;
    //TODO: card must have a user id
  } catch (e) {
    Logger.log(e);
  }
};

export default initDB;
