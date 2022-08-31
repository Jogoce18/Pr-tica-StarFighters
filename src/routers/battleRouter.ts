import { Router } from "express";
import {battle, getRanking} from "../controllers/battleController.js";

const battleRouter = Router();

battleRouter.post("/battle", battle);
battleRouter.get("/ranking", getRanking);

export default battleRouter;
