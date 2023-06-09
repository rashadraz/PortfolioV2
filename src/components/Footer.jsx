import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
	return (
		<footer className="w-full text-lg font-medium border-t-2 border-solid border-dark dark:text-light dark:border-light sm:text-base ">
			<Layout className={"py-8 flex items-center justify-between lg:flex-col lg:py-6"}>
				<span>
					{new Date().getFullYear()} &copy; Rashad All Rights Reserved
				</span>
				<div className="flex items-center lg:py-2">
					Build With{" "}
					<span className="px-1 text-2xl text-primary dark:text-primaryDark">
						&#9825;
					</span>{" "}
					<Link href={"https://www.instagram.com/rxshadraz/"} className="underline underline-offset-2">
						{" "}
						By Rashad
					</Link>
				</div>
				<Link
					href={"https://www.instagram.com/rxshadraz/"}
					target={"_blank"}
					className="underline underline-offset-2"
				>
					Say Hello
				</Link>
			</Layout>
		</footer>
	);
};
export default Footer;
