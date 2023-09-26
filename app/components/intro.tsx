'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CgArrowDown } from 'react-icons/cg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

import { linkedinLink, githubLink } from '@/lib/constant';
import { useActiveSectionContext } from '../context/current-section-context';

export default function Intro() {
  const { setCurrentSection, setLastTimeClick } = useActiveSectionContext();

  return (
    <section className="text-center">
      {/* Introduction */}
      <motion.div
        className="text-2xl text-zinc-600 p-7"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
      >
        <h1>
          <span className="font-bold">Hi, I&apos;m Riva.{" "}</span> I&apos;m a{" "}
          <span className="font-bold">full-stack developer.</span> I enjoy
          building <span className="italic">sites &amp; apps</span>.
        </h1>
      </motion.div>

      {/* Buttons and Links */}
      <motion.div
        className="flex justify-center flex-col sm:flex-row gap-5 sm:max-h-11"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Contact Me Button */}
        <Link
          className="group flex justify-center items-center px-10 bg-zinc-700 text-zinc-200 text-center rounded-full p-2 text-sm hover:scale-110 hover:text-zinc-100 transition"
          href="#contact"
          onClick={() => {
            setCurrentSection("Contact");
            setLastTimeClick(Date.now());
          }}
          aria-label="Contact Me"
        >
          Contact Me
          <CgArrowDown className="group-hover:translate-y-1 group-hover:scale-[1.20] ml-1 mt-1" />
        </Link>

        {/* CV Download Button */}
        <a
          href="/Riva_Chang_Resume.pdf"
          target="_blank"
          className="group flex justify-center items-center px-10 bg-zinc-100 text-zinc-500 text-center border-1 rounded-full p-2 text-sm hover:scale-110 hover:text-zinc-700 transition"
          aria-label="Download CV"
        >
          CV
          <HiDownload className="group-hover:translate-y-1 group-hover:scale-[1.20] mr-1" />
        </a>

        {/* LinkedIn Link */}
        <a
          href={linkedinLink}
          target="_blank"
          className="group flex justify-center items-center px-10 bg-zinc-100 text-zinc-500 text-center border-1 rounded-full p-2 text-lg hover:scale-110 hover:text-zinc-700 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="group-hover:scale-[1.20]" />
        </a>

        {/* GitHub Link */}
        <a
          href={githubLink}
          target="_blank"
          className="group flex justify-center items-center px-10 bg-zinc-100 text-zinc-500 text-center border-1 rounded-full p-2 text-lg hover:scale-110 hover:text-zinc-700 transition"
          aria-label="GitHub"
        >
          <FaGithub className="group-hover:scale-[1.20]" />
        </a>
      </motion.div>
    </section>
  );
}
