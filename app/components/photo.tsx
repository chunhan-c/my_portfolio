'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import photo from '@/public/photo.png';
import fireworksIcon from '@/public/fireworks.svg';

import { useSectionInView } from '@/lib/hooks';

export default function Photo() {
  const { ref } = useSectionInView('Home', 1);

  return (
    <section ref={ref}>
      <div className='flex justify-center'>
        <div className={`relative`}>
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
            }}
          >
            <Image
              className='-z-10 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
              priority={true}
              src={photo}
              width={200}
              height={200}
              alt={`Riva's portfolio`}
              quality={100}
            />
          </motion.div>

          {/* Fireworks Icon */}
          <motion.div
            className='absolute bottom-[0.1rem] right-[1rem]'
            initial={{ y: -250, scale: 0.5, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              delay: 0.1,
              duration: 1,
            }}
          >
            <Image src={fireworksIcon} width={70} height={70} alt={``} quality={100} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
