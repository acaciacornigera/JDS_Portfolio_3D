import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

//import Tilt from "react-tilt";
import Tilt from "react-parallax-tilt";

import { services } from "../constants";

const ServiceCard = ({ index, icon, title, subtitle }) => {
  const tiltRef = useRef(null);

  return (
    <Tilt className='xs:w-[250px] w-full' ref={tiltRef}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-2
          h-[320px] flex justify-evenly items-center flex-col'
          //min-h-[280px]
        >
          <img
            src={icon}
            alt={title}
            className='w-48 h-38 object-contain'
          />

          <p className='text-white text-[20px] font-bold text-center mt-5'>
            {title}
          </p>

          <p className='text-secondary text-[18px] text-center mt-5'>
            {subtitle}
          </p>

        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <p className={styles.sectionHeadText}>Overview</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[22px] max-w-4xl leading-[28px]'
      >
        <span style={{fontWeight: '800'}}>20 years of experience in Financial and Reporting Departments in Banking & Insurance sector. </span>
        <br/><br/>
        As a fast knowledge vacuum, I work closely with clients to craft top-notch solutions that not
        only solve problems, but make people smile in the process.<br/><br/>
        So let's work together to bring your ideas and projects to life... or at least, to a semi-conscious state!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
