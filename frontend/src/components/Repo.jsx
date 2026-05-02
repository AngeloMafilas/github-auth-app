import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { formatDate } from "../utils/functions";
import { PROGRAMMING_LANGUAGES } from "../utils/constants";
import toast from "react-hot-toast";

const Repo = ({ repo }) => {
	const formattedDate = formatDate(repo.created_at);

	const handleCloneClick = async (repo) => {
		try {
			await navigator.clipboard.writeText(repo.clone_url);
			toast.success("Repo URL cloned to clipboard");
		} catch (error) {
			toast.error("Clipboard write failed. ");
		}
	};

	return (
		<li className='mb-10 ms-7 group'>
			<span
				className='absolute flex items-center justify-center w-6 h-6 bg-blue-100
    rounded-full -start-3 ring-8 ring-white group-hover:scale-110 transition-transform duration-300'
			>
				<FaCodeBranch className='w-5 h-5 text-blue-800' />
			</span>
			<div className='flex gap-2 items-center flex-wrap'>
				<a
					href={repo.html_url}
					target='_blank'
					rel='noreferrer'
					className='flex items-center gap-2 text-lg font-semibold hover:text-blue-400 transition-colors duration-200'
				>
					{repo.name}
				</a>
				<span
					className='bg-yellow-500/10 text-yellow-500 text-xs font-medium px-2.5
        py-0.5 rounded-full flex items-center gap-1 border border-yellow-500/20'
				>
					<FaRegStar /> {repo.stargazers_count}
				</span>
				<span
					className='bg-purple-500/10 text-purple-500 text-xs font-medium
         px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-purple-500/20'
				>
					<FaCodeFork /> {repo.forks_count}
				</span>
				<span
					onClick={() => handleCloneClick(repo)}
					className='cursor-pointer bg-green-500/10 text-green-500 text-xs
        font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-green-500/20 hover:bg-green-500/20 transition-all duration-200'
				>
					<FaCopy /> Clone
				</span>
			</div>

			<time
				className='block my-1 text-xs font-normal leading-none
     text-gray-400'
			>
				Released on {formattedDate}
			</time>
			<p className='mb-4 text-base font-normal text-gray-500'>
				{repo.description ? repo.description.slice(0, 500) : "No description provided"}
			</p>
			{PROGRAMMING_LANGUAGES[repo.language] ? (
				<img src={PROGRAMMING_LANGUAGES[repo.language]} alt='Programming language icon' className='h-8' />
			) : null}
		</li>
	);
};
export default Repo;
