import React, { useEffect, useState } from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { styles } from "../styles";

import { images } from "../assets";

import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex-column py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='justify-between text-center sm:flex sm:w-full'> {/*max-w-8xl mx-auto*/}
          <div className='font-bold justify-content flex-center gap-3 sm:flex'>
            <div className='text-[24px] sm:text-[22px] text-[#915EFF]'>Jean-David Sidler</div>
            <div className="sm:text-[22px] sm:block hidden">|</div>
            <div className="text-[16px] sm:text-[22px]">The CFO with a tech twist</div>
          </div>

          <div className="sm:block hidden">
            <div style={{ display: 'inline-block', marginRight: '20px', backgroundColor: '#0077B5', borderRadius: '50%', padding: '10px' }}>
              <a href="https://www.linkedin.com/in/jdsidler" target="blank">
                <BsLinkedin style={{ width: '30px', height: 'auto', fill: '#fff' }} />
              </a>
            </div>
            <div style={{ display: 'inline-block', marginRight: '20px', backgroundColor: '#FFFFFF', borderRadius: '50%', padding: '10px' }}>
              <a href="https://github.com/acaciacornigera/" target="blank">
                <BsGithub style={{ width: '30px', height: 'auto', fill: '#000000' }} />
              </a>
            </div>
          </div>

        <div>
          <ul className='list-none flex-row gap-10 hidden sm:flex'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[22px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>


        <div className='sm:hidden flex flex-1 justify-center'>
          <img
            src={toggle ? images.close : images.menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;