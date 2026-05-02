import { useState } from "react";
import Repo from "./Repo";

const Repos = ({ repos, alwaysFullWidth = false }) => {
	const [searchText, setSearchText] = useState("");
	const className = alwaysFullWidth ? "w-full" : "lg:w-2/3 w-full";

	const filteredRepos = repos.filter((repo) => repo.name.toLowerCase().includes(searchText.toLowerCase()));

	return (
		<div className={`${className} bg-glass rounded-lg px-8 py-6`}>
			<div className='flex items-center justify-between mb-4'>
				<h2 className='text-lg font-semibold text-white'>Repositories</h2>
				<input
					type='text'
					placeholder='Search repos...'
					className='bg-white/5 border border-white/10 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 w-48 transition-all duration-300'
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
			</div>
			<ol className='relative border-s border-gray-200'>
				{filteredRepos.map((repo) => (
					<Repo key={repo.id} repo={repo} />
				))}
				{filteredRepos.length === 0 && <p className='flex items-center justify-center h-32 '>No repos found</p>}
			</ol>
		</div>
	);
};
export default Repos;
