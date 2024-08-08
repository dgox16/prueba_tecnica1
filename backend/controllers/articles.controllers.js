import Article from "../models/Article.js";
import path from "path";
import fs from "fs";

export const saveArticles = async (_req, res) => {
	try {
		const filePath = path.join("data.json");
		const jsonData = fs.readFileSync(filePath, "utf-8");
		const articlesFile = JSON.parse(jsonData);
		const articles = await Article.insertMany(articlesFile);
		res.status(201).json({ successful: true, data: articles });
	} catch (error) {
		res.status(500).json({ successful: false, error: error.message });
	}
};

export const getArticles = async (_req, res) => {
	try {
		const articles = await Article.find();
		res.status(201).json({ successful: true, data: articles });
	} catch (error) {
		res.status(500).json({ successful: false, error: error.message });
	}
};

export const deleteArticles = async (_req, res) => {
	try {
		await Article.deleteMany();
		res.status(201).json({ successful: true });
	} catch (error) {
		res.status(500).json({ successful: false, error: error.message });
	}
};
