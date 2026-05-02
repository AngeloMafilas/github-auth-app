import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";
import Logout from "./Logout";
import { useAuthContext } from "../context/AuthContext";

const Sidebar = () => {
	const { authUser } = useAuthContext();

	return (
		<aside
			className='flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8
      overflow-y-auto border-r bg-glass'
		>
			<nav className='h-full flex flex-col gap-3'>
				<Link to='/' className='flex justify-center'>
					<img className='h-8' src='/github.svg' alt='Github Logo' />
				</Link>

				<Link
					to='/'
					className='p-1.5 flex justify-center transition-all duration-300 rounded-lg 
					hover:bg-white/10 hover:scale-110 active:scale-95'
				>
					<IoHomeSharp size={20} />
				</Link>

				{authUser && (
					<Link
						to='/likes'
						className='p-1.5 flex justify-center transition-all duration-300 rounded-lg hover:bg-white/10 hover:scale-110 active:scale-95'
					>
						<FaHeart size={22} />
					</Link>
				)}

				{authUser && (
					<Link
						to='/explore'
						className='p-1.5 flex justify-center transition-all duration-300 rounded-lg hover:bg-white/10 hover:scale-110 active:scale-95'
					>
						<MdOutlineExplore size={25} />
					</Link>
				)}

				{!authUser && (
					<Link
						to='/login'
						className='p-1.5 transition-all duration-300 rounded-lg hover:bg-white/10 hover:scale-110 active:scale-95'
					>
						<PiSignInBold size={25} />
					</Link>
				)}

				{!authUser && (
					<Link
						to='/signup'
						className='p-1.5 transition-all duration-300 rounded-lg hover:bg-white/10 hover:scale-110 active:scale-95'
					>
						<MdEditDocument size={25} />
					</Link>
				)}

				{authUser && (
					<div className='flex flex-col gap-4 mt-auto'>
						<Logout />
					</div>
				)}
			</nav>
		</aside>
	);
};
export default Sidebar;
