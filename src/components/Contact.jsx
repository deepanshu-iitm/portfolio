import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const profiles = [
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/deepanshu-iitm" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://linkedin.com/in/deepanshu-pathak" },
  { name: "Twitter", icon: <FaTwitter />, link: "https://twitter.com/Deepanshu016" },
  { name: "Email", icon: <FaEnvelope />, link: "mailto:deepanshupathak03@gmail.com" },
];

const Profiles = () => {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 md:gap-20 px-6 md:px-16 py-10 md:py-20">

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="z-10 flex flex-col items-center md:items-start text-center md:text-left"
      >
        <p className={`${styles.sectionSubText} text-white`}>Let's Connect</p>
        <h3 className={`${styles.sectionHeadText} text-white`}>My Profiles</h3>
        <div className="flex gap-6 mt-6">
          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-4xl hover:text-primary transition-transform transform hover:scale-110"
            >
              {profile.icon}
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="w-full md:w-[400px] lg:w-[500px] xl:w-[600px] h-[350px] md:h-[500px] flex justify-center"
      >
        <EarthCanvas />
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Profiles, "profiles");
