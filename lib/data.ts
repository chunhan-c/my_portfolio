import React from 'react';
import { FaSchool, FaSuitcase } from 'react-icons/fa';

// Define navigation links
export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

// Define work experience data
export const experiencesData = [
  {
    title: 'Full-Stack Software Engineer',
    subTitle: 'Wiwynn',
    location: 'Taipei, Taiwan',
    description:
      'I was working as a full-stack software engineer for nearly 3 years. My stack includes React, TypeScript, PostgreSQL, Python, Flask, Microsoft 365.',
    icon: React.createElement(FaSuitcase),
    date: 'Nov 2020 - Apr 2023',
  },
  {
    title: 'Data Analytics Intern',
    subTitle: 'Vuulr',
    location: 'Singapore',
    description:
      'I was responsible for collecting and cleaning data from various sources, creating data visualizations using Python, and using Google Analytics to analyze user behavior.',
    icon: React.createElement(FaSuitcase),
    date: 'Jul 2019 - Dec 2019',
  },
  {
    title: 'ESSEC & CentraleSupélec',
    subTitle: 'Master in Data Sciences & Business',
    location: 'Paris, France',
    description:
      'My time in this program, blending the expertise of two renowned institutions, has been a game-changer for my software development journey. I learned how to use data to supercharge software solutions.',
    icon: React.createElement(FaSchool),
    date: '2018 - 2020',
  },
] as const;

// Define skills data
export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Redux',
  'Express',
  'PostgreSQL',
  'Python',
  'Flask',
  'Framer Motion',
  'Material UI',
  'Handsontable',
  'Microsoft 365 ecosystem',
  'Power BI',
  'Power Automate',
  'Power Apps',
  'SharePoint',
] as const;
