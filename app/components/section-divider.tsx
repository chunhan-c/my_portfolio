'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { contentAnimateDelay } from '@/lib/constant';

export default function SectionDivider() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: contentAnimateDelay,
      }}
      className='h-[5rem] w-[0.1rem] bg-zinc-200 mt-[5rem] mb-[5rem] sm:block'
    >
      {/* This component represents a section divider with animation. */}
    </motion.div>
  );
}
