import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { BallCanvas } from "./canvas";

import { technologies } from "../constants";

const Tech = () => {
  return (
    <>

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My friends</p>
        <p className={`${styles.sectionHeadText} text-center`}>Skills</p>
      </motion.div>

      <div className='w-full flex justify-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[22px] text-center max-w-3xl leading-[28px]'
        >
          Some of the tools I use on a daily basis and others I will fully master in 2023
        </motion.p>
      </div>

      <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "techno");
