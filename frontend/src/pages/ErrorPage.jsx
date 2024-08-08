export const ErrorPage = ({ error }) => {
	return (
		<div className="flex justify-center items-center min-h-[90vh]">
			<div className="border-2 border-red-500 bg-red-100 text rounded-lg p-4">
				<span className="text-red-500 text-xl font-bold">
					An error has occurred: {error}
				</span>
			</div>
		</div>
	);
};
