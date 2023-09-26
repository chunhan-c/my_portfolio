"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './section-header';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useSectionInView } from '@/lib/hooks';
import { experiencesData } from '@/lib/data';



export default function MyExperience() {
  const { ref } = useSectionInView('Experience');

  return (
    <section
      id="experience"
      ref={ref}
      className="text-center flex flex-col items-center"
    >
      <motion.div 
        initial={{
        opacity: 0,
        }}
        whileInView={{
        opacity: 1,
        }}
        transition={{
        delay: 0.3,
        }}
        viewport={{
        once: true,
        }}
      >  
        <SectionHeader sectionTitle="Experience" />
      </motion.div>
      <VerticalTimeline className="position: absolute" lineColor="">
        {experiencesData.map((obj, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={obj.date}
              iconStyle={{ background: 'white', color: '#1e3a8a' }}
              icon={obj.icon}
              contentStyle={{
                background: '#fafafa',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #9ca3af',
              }}
            >
              <h3 className="vertical-timeline-element-title">{obj.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {obj.subTitle}
              </h4>
              <p>{obj.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
