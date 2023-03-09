import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { images } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto mt-3`}>
      <div
        className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex-center sm:flex flex-row items-start gap-10`}
      >
        <div className="hidden sm:block">
          <img src={images.jdsprofile} alt="JD's Profile"
            className='w-[100%] h-auto sm:w-[75%]'
          />
        </div>

        <div className="text-center sm:text-left">
          <div>
            <div className={`${styles.heroSubText} mt-2 text-white`} style={{ marginTop: '2rem' }}>
              <p className={`${styles.heroHeadText} mt-2 text-white hidden sm:block`}>Hello, I'm <span className='text-[#915EFF]'>JD</span></p>
              <p className={`${styles.heroSubText} mt-2 text-white block sm:hidden`}>Hello, I'm <span className='text-[#915EFF]'>JD</span></p>
            </div>
            <p className={`${styles.heroSkillsText}`}>Welcome to my website!</p>
          </div>

          <div className="flex-wrap nowrap">
            <p className={`${styles.heroSkillsText} text-white-100`} style={{ marginTop: '2rem' }}>
              <span className='text-[#915EFF]'>Web3</span> & <span className='text-[#915EFF]'>Blockchain</span> Advocate<br />
              Homemade <span className='text-[#915EFF]'>Geek</span> by nature<br />
              <span className='text-[#915EFF]'>Finance</span> (wizard) by trade<br />
            </p>
          </div>

        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default (Hero);