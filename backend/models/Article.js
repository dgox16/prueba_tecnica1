import { Schema, model } from "mongoose";

const articleSchema = new Schema({
	author: {
		type: String,
		required: true,
		trim: true,
	},
	title: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: true,
		trim: true,
	},
	url: {
		type: String,
		required: true,
		trim: true,
	},
	urlToImage: {
		type: String,
		required: true,
		trim: true,
	},
	publishedAt: {
		type: String,
		required: true,
		trim: true,
	},
});

export default model("Article", articleSchema);
