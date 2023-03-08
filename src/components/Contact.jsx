import { FaFilePdf } from 'react-icons/fa';

import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

import { slideIn } from "../utils/motion";

const Contact = () => {
    return (
        <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-center hidden sm:block`}
        >
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-10 rounded-2xl'
            >
                <p className={styles.sectionSubText}>Hit me up!</p>
                <p className={styles.sectionHeadText}>Contact</p>

                <div
                    className='p-10 absolute top-0 right-0 text-center'
                >
                    <p className="mb-3 text-secondary text-[18px] font-bold">Visit my Linkedin or GitHub profile</p>
                    
                    <p className="text-[16px]">
                        Please download my CV
                    </p>
                        <a href="https://raw.githubusercontent.com/acaciacornigera/CV/main/SIDLER_JD_CV_v202303.pdf"
                           className='mt-5 absolute center'
                        >
                           <FaFilePdf size={45}/>
                        </a>
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");

