import React from 'react';

type SectionHeaderType = {
  sectionTitle: string;
};

export default function SectionHeader({ sectionTitle }: SectionHeaderType) {
  return (
    /* Section Header: Displays the title of a section */
    <h2 className='text-2xl pb-[5rem]'>{sectionTitle}</h2>
  );
}
