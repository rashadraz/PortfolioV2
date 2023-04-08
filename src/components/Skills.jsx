import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
	return (
		<motion.div
			className="flex items-center justify-center rounded-full font-semibold bg-dark py-3 px-6 shadow-dark text-light cursor-pointer absolute dark:text-dark dark:bg-light"
			whileHover={{ scale: 1.05 }}
			initial={{ x: 0, y: 0 }}
			whileInView={{ x: x, y: y , transition : {duration:1.5} }}
    //   transition={{duration:1.5}}
      viewport={{once:true}}
		>
			{name}
		</motion.div>
	);
};

function Skills() {
	return (
		<>
			<h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
			<div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
				<motion.div
					className="flex items-center justify-center rounded-full font-semibold bg-dark p-8 shadow-dark text-light cursor-pointer dark:text-dark dark:bg-light"
					whileHover={{ scale: 1.05 }}
				>
					Web
				</motion.div>
        <Skill name="HTML" x="-25vw" y="2vw" />
				<Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJs" x="0vw" y="12vw" />
        <Skill name="NextJs" x="-20vw" y="-15vw" />
        <Skill name="Laravel" x="15vw" y="-12vw" />
        <Skill name="ReactNative" x="32vw" y="-5vw" />
        <Skill name="Tailwind CSS" x="0vw" y="-20vw" />
        <Skill name="Photoshop" x="-25vw" y="18vw" />
        <Skill name="Figma" x="18vw" y="18vw" />
			</div>
		</>
	);
}
export default Skills;
