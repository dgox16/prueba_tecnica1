import { useArticles } from "../hooks/useArticles";
import { ArticleCard } from "../components/articles/ArticleCard";
import { ErrorPage } from "./ErrorPage";
import { LoadingPage } from "./LoadingPage";

export const ListArticles = () => {
	const { articles, loading, error, handleAddArticles, handleDeleteArticles } =
		useArticles();

	if (loading) return <LoadingPage />;
	if (error) return <ErrorPage error={error.message} />;

	return (
		<div className="flex justify-center">
			{articles.length < 1 ? (
				<div className="flex justify-center items-center min-h-[90vh]">
					<button
						onClick={handleAddArticles}
						className="border-2 border-blue-500 bg-blue-100 text rounded-lg p-4 hover:scale-105 transition text-blue-500 text-xl font-bold"
					>
						There are no articles, click to add them.
					</button>
				</div>
			) : (
				<div className="grid grid-cols-1 gap-5 w-[613px] mt-5">
					<button
						onClick={handleDeleteArticles}
						className="p-3 bg-zinc-200 w-fit font-medium rounded-lg hover:scale-105 transition"
					>
						Delete Articles
					</button>
					{articles.map((article) => (
						<ArticleCard article={article} key={article._id} />
					))}
				</div>
			)}
		</div>
	);
};
