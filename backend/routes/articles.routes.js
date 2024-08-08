import { Router } from "express";
import {
	saveArticles,
	getArticles,
	deleteArticles,
} from "../controllers/articles.controllers.js";

const router = Router();

router.get("/articles", getArticles);
router.post("/articles", saveArticles);
router.delete("/articles", deleteArticles);

export default router;
