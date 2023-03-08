import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

import { fadeIn, textVariant } from "../utils/motion";
import { AiFillEye, AiFillGithub } from 'react-icons/ai'

import Tilt from "react-parallax-tilt";

import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  sourceWeb,
  sourceGithub,
}) => {
  const tiltRef = useRef(null);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full'>
          <img
            src={image}
            alt='project_image'
            className='w-full object-cover rounded-2xl'
          //style={{width:"50%", height: "auto"}}
          />

          <div className='absolute inset-0 flex m-3 card-img_hover'>
            <div
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              style={{ position: 'absolute', top: 0, left: 0 }}
              onClick={() => window.open(sourceWeb, '_blank')}
            >
              <AiFillEye className='w-1/2 h-1/2 object-contain' />
            </div>
            <div
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              style={{ position: 'absolute', top: 0, right: 0 }}
              onClick={() => window.open(sourceGithub, '_blank')}
            >
              <AiFillGithub className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <p className='text-white font-bold text-[24px]'>{name}</p>
          <p className='mt-2 text-secondary text-[18px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[16px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <p className={`${styles.sectionHeadText}`}>Projects</p>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[22px] max-w-3xl leading-[30px]'
        >
          Some projects are live, others are in progress and will be released throughout 2023, most of them
          are Web3-related and blockchain-based
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "portfolio");
