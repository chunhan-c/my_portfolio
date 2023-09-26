"use client";

import React from 'react';
import SectionHeader from './section-header';
import { motion } from 'framer-motion';

import { contentAnimateDelay } from '@/lib/constant';
import { useSectionInView } from '@/lib/hooks';
import SectionDivider from './section-divider';

export default function AboutMe() {
  const { ref } = useSectionInView("About", 1);

  return (
    <motion.section
      id="about"
      ref={ref}
      className="text-center flex flex-col items-center"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: contentAnimateDelay,
      }}
    >
      <SectionDivider />
      <SectionHeader sectionTitle="About Me" />
      <p className="mb-3 pb-4 leading-8">
        Hey there! I'm an experienced <span className="font-medium">Full Stack Software Engineer</span> with a strong background in <span className="font-medium">React, React Native, TypeScript, JavaScript, Node.js, and Python</span>, backed by 3 years of hands-on experience. In addition, my time in <span className="font-medium">ESSEC &amp; CentraleSupélec</span>'s Master Data Science program has been a game-changer for my software development journey. This program, blending the expertise of two renowned institutions, has taught me how to use data to supercharge software solutions.
      </p>
      <p>
        My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem.
      </p>
      <p>
        I am currently seeking a <span className="font-medium">full-time position</span> as a software developer.
      </p>
    </motion.section>
  );
}
