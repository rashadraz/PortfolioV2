import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
	DribbbleIcon,
	GithubIcon,
	LinkedInIcon,
	MoonIcon,
	PinterestIcon,
	SunIcon,
	TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState } from "react";

const CustomLink = ({ href, title, className = "" }) => {
	const router = useRouter();

	return (
		<Link href={href} className={`${className} relative group`}>
			{title}
			<span
				className={`h-[1px] inline-block w-0 bg-dark 
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300
			dark:bg-light
            ${router.asPath === href ? "w-full" : "w-0"}  
			`}
			>
				&nbsp;
			</span>
		</Link>
	);
};

const Navbar = () => {
	const [mode, setMode] = useThemeSwitcher();
	const [isOpen , setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	}
	return (
		<header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">

		<button className=" flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
			<span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5' }`}></span>
			<span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100' } `}></span>
			<span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5' }`}></span>
		</button>
			<nav>
				<CustomLink href="/" title={"Home"} className="mr-4" />
				<CustomLink href="/about" title={"About"} className="mx-4" />
				<CustomLink href="/projects" title={"Projects"} className="mx-4" />
				{/* <CustomLink href="/articles" title={"Articles"} className="ml-4" /> */}
			</nav>

			<nav className="flex items-center justify-center flex-wrap">
				<motion.a
					href={"https://twitter.com/BasRash_/status/1533023858252455937"}
					target="_blank"
					whileHover={{ y: -4 }}
					whileTap={{ scale: 0.9 }}
					className="w-6 mx-3"
				>
					<TwitterIcon />
				</motion.a>
				<motion.a
					href={"https://github.com/"}
					target="_blank"
					className="w-6 mx-3"
					whileHover={{ y: -4 }}
					whileTap={{ scale: 0.9 }}
				>
					<GithubIcon />
				</motion.a>
				<motion.a
					href={"https://www.linkedin.com/feed/"}
					target="_blank"
					className="w-6 mx-3"
					whileHover={{ y: -4 }}
					whileTap={{ scale: 0.9 }}
				>
					<LinkedInIcon />
				</motion.a>
				<motion.a
					href={"https://in.pinterest.com/"}
					target="_blank"
					className="w-6 mx-3"
					whileHover={{ y: -4 }}
					whileTap={{ scale: 0.9 }}
				>
					<PinterestIcon />
				</motion.a>
				<motion.a
					href={"https://dribbble.com/"}
					target="_blank"
					className="w-6 ml-3"
					whileHover={{ y: -4 }}
					whileTap={{ scale: 0.9 }}
				>
					<DribbbleIcon />
				</motion.a>

				<button
					onClick={() => setMode(mode === "light" ? "dark" : "light")}
					className={`ml-3 flex items-center justify-center rounded-full p-1 ${
						mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
					}`}
				>
					{mode === "dark" ? (
						<SunIcon className={"fill-dark"} />
					) : (
						<MoonIcon className={"fill-dark"} />
					)}
				</button>
			</nav>
			<div className="absolute left-[50%] top-2 translate-x-[-50%]">
				<Logo />
			</div>
		</header>
	);
};
export default Navbar;
