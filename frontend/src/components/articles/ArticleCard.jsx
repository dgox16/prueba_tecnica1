export const ArticleCard = ({ article }) => {
	return (
		<a
			href={article.url}
			rel="noopener noreferrer"
			target="_blank"
			className="grid grid-cols-4 rounded-lg border-[5px] border-zinc-300 px-6 sm:px-9 py-7 hover:scale-[1.03] transition"
		>
			<div className="flex items-center col-span-4 sm:col-span-1  ">
				<img
					src={article.urlToImage}
					alt="Not found"
					className="w-full h-52 sm:w-[100px] sm:h-[100px] rounded-lg object-cover"
				/>
			</div>
			<div className=" col-span-4 sm:col-span-3 text-left mt-4 sm:mt-0">
				<h1 className="text-lg font-bold truncate text-zinc-600">
					{article.title}
				</h1>
				<h2 className="mt-1 text-zinc-500">{article.author}</h2>
				<p className="text-pretty mt-3 text-zinc-600">{article.description}</p>
			</div>
		</a>
	);
};
