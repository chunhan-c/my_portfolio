"use client";

import React from 'react';
import { motion } from 'framer-motion';

import { skillsData } from '@/lib/data';
import SectionHeader from './section-header';
import SectionDivider from './section-divider';
import { useSectionInView } from '@/lib/hooks';

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.8);

  // Animation variants for fading in skills
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <motion.section
      id={'skills'}
      ref={ref}
      className="flex justify-center flex-col items-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <SectionDivider />
      <SectionHeader sectionTitle="My Skills" />
      <div className="flex flex-wrap gap-2 justify-center">
        {skillsData.map((skill, index) => (
          <motion.span
            key={index}
            variants={fadeInAnimationVariants}
            custom={index}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="bg-white border border-zinc-600/30 rounded-md p-1"
          >
            {skill}
          </motion.span>
        ))}
      </div>
      <SectionDivider />
    </motion.section>
  );
}
