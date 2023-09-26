"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';

import { useActiveSectionContext } from '../context/current-section-context';

export default function NavigationBar() {
  const { setCurrentSection, currentSection, setLastTimeClick } = useActiveSectionContext();

  return (
    <motion.div
      initial={{ y: 100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      className={`
        bg-zinc-100/90 
        flex 
        items-center 
        justify-center                     
        fixed
        sm:left-[50%]
        sm:-translate-x-[50%]
        sm:top-[40px]                    
        sm:w-[80%]                     
        sm:rounded-lg 
        md:w-[60%]
        lg:w-[50%]
        shadow-lg
        shadow-zinc-400  
        w-full
        h-[50px] 
        top-0
        left-[50%]
        -translate-x-[50%]
      `}
    >
      <nav className={`flex w-[100%]`}>
        <ul className={` flex justify-around mx-8 w-[100%]`}>
          {links.map((obj) => (
            <motion.li
              key={obj.hash}
              className={`text-zinc-600 hover:text-zinc-900 hover:font-medium`}
              initial={{ y: 100 }}
              animate={{ y: 0 }}
            >
              <Link
                onClick={() => {
                  setCurrentSection(obj.name);
                  setLastTimeClick(Date.now());
                }}
                href={obj.hash}
              >
                {obj.name}
                {currentSection === obj.name && (
                  // Highlight the current section with a colored bar
                  <motion.div className="bg-zinc-500 h-[0.1rem]" layoutId="currentSection" initial={{ y: 0 }} animate={{ y: 6 }} />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
}
