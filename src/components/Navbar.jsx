import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-8xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={images.jdslogo} alt='jdslogo' className='w-12 h-12 object-contain' style={{ filter: 'hue-rotate(30deg)' }} />
          <p className='text- text-[22px] font-bold cursor-pointer flex'>
            <span className='text-[#915EFF]'>Jean-David Sidler &nbsp;&nbsp;</span>
            <span className='sm:block hidden'> |&nbsp; &nbsp;The CFO with a tech twist</span>
          </p>
        </Link>

        <div>
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

        <ul className='list-none hidden sm:flex flex-row gap-10'>
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

        <div className='sm:hidden flex flex-1 justify-end items-center'>
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