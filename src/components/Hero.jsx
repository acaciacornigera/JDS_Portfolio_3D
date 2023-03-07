import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { images } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto mt-5`}>
      <div
        className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-10`}
      // style={{ paddingLeft: "10px" }}
      >
        <img src={images.jdsprofile} alt="JD's Profile" style={{ position: 'absolute', left: "-200px", width: "25%", height: "auto" }} />

        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <p className={`${styles.heroHeadText} text-white`}
            style={{ marginTop: '2rem' }}>
            Hello, I'm <span className='text-[#915EFF]'>JD</span>
          </p>
          <p className={`${styles.heroSubText} text-white-100`}>
            {/* Welcome to my website! <br className='sm:block hidden' /> // if want hide from sm */}
            Welcome to my website!<br />
          </p>
        </div>
        <div>
          <p className={`${styles.heroSkillsText} text-white-100`}
            style={{ marginTop: '50px', position: 'absolute', left: "725px" }}>
            {/* Welcome to my website! <br className='sm:block hidden' /> // if want hide from sm */}
            <span className='text-[#915EFF]'>Web3</span> & <span className='text-[#915EFF]'>Blockchain</span> Advocate<br />
            Homemade <span className='text-[#915EFF]'>Geek</span> by nature<br />
            <span className='text-[#915EFF]'>Finance</span> (wizard) by trade<br />
          </p>
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