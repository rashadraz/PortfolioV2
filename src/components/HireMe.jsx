import { CircularText2 } from "../components/Icons";
import Link from "next/link";
function HireMe() {
	return (
		<div className="fixed flex items-center justify-center overflow-hidden left-4 bottom-4 ">
			<div className="relative flex items-center justify-center w-48 h-auto">
				<CircularText2 className={"fill-dark animate-spin-slow dark:fill-light"} />
			</div>
			<Link
				href={"mailto:akyrashad@gmail.com"}
				className="absolute flex items-center justify-center w-20 h-20 -translate-x-1/2 -translate-y-1/2 border border-solid shadow-md border-dark left-1/2 top-1/2 bg-dark text-light font-semibold rounded-full hover:bg-light hover:text-dark
				dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:bg-light"
			>
				Hire Me
			</Link>
		</div>
	);
}
export default HireMe;
