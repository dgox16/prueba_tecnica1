import mongoose from "mongoose";
import { MONGODB_URI } from "./utils/envConfig.js";

export async function connectedDb() {
	if (!mongoose.connection.readyState) {
		try {
			const db = await mongoose.connect(MONGODB_URI);

			console.info("Connected to", db.connection.name);
		} catch (error) {
			console.error(error);
		}
	}
}
