import React, { useRef } from 'react';
import { SectionWrapper } from "../hoc";

const Footer = () => {
    return (
        <footer>
            <div
                className='mt-10 flex flex-row flex-wrap justify-center bg-opacity-20 text-[16px] sm:text-[20px]'
                // style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} => bg-opacity-20
                >
                ©2023 JD SIDLER - All rights reserved
            </div>
        </footer>
    )
};

export default SectionWrapper(Footer, "");
