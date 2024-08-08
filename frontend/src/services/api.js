const API_URL = "http://localhost:3000/articles";

export const fetchArticles = async () => {
	const response = await fetch(API_URL);
	if (!response.ok) {
		throw new Error("The API not working well");
	}
	return response.json();
};

export const addArticles = async () => {
	const response = await fetch(API_URL, { method: "POST" });
	if (!response.ok) {
		throw new Error("The API not working well");
	}
	return response.json();
};

export const deleteArticles = async () => {
	const response = await fetch(API_URL, { method: "DELETE" });
	if (!response.ok) {
		throw new Error("The API not working well");
	}
	return response.json();
};
