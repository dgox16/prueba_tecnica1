import { useState, useEffect } from "react";
import { fetchArticles, addArticles, deleteArticles } from "../services/api";

export const useArticles = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await fetchArticles();
				setArticles(result.data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	const handleAddArticles = async () => {
		try {
			const result = await addArticles();
			setArticles(result.data);
		} catch (error) {
			setError(error);
		}
	};

	const handleDeleteArticles = async () => {
		try {
			const result = await deleteArticles();
			if (result.successful) {
				setArticles([]);
			}
		} catch (error) {
			setError(error);
		}
	};

	return { articles, loading, error, handleAddArticles, handleDeleteArticles };
};
