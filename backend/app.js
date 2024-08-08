import express from "express";
import cors from "cors";
import articlesRoutes from "./routes/articles.routes.js";

const app = express();

app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	}),
);

// Middleware
app.use(express.json());

// Routes
app.use(articlesRoutes);

export default app;
