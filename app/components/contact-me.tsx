"use client"

import React, { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

import SectionDivider from './section-divider';
import SectionHeader from './section-header';
import {
  contentAnimateDelay,
  formSentSuccessfullyMsg,
} from '@/lib/constant';
import { useSectionInView } from '@/lib/hooks';
import { getErrorMessage } from '@/lib/utils';
import { onSubmit } from '../actions/submit-form';

export default function ContactMe() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { ref } = useSectionInView('Contact', 0.8);

  async function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Create a FormData object from the form
      const formData = new FormData(event.currentTarget);
      
      // Submit the form data to the server
      const errorMsg = await onSubmit(formData);

      if (errorMsg) {
        // Display an error message if submission fails
        toast.error(errorMsg);
      } else {
        // Display a success message if submission is successful
        toast.success(formSentSuccessfullyMsg);
      }
    } catch (e) {
      // Handle any unexpected errors
      const error = getErrorMessage(e);
      toast.error(error);
    } finally {
      // Reset the form and loading state
      document.getElementById('contactForm').reset();
      setIsLoading(false);
    }
  }

  return (
    <>
      <SectionDivider />
      <motion.section
        ref={ref}
        className='flex flex-col items-center scroll-mt-[200px]'
        id={'contact'}
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
        <SectionHeader sectionTitle='Contact Me' />
        <form
          id={'contactForm'}
          className='flex flex-col gap-y-3 -m-[3rem] relative'
          onSubmit={handleSubmitForm}
        >
          <p className='pb-4'>
            Send me an email via{' '}
            <a className='underline' href='mailto:b00750212@essec.edu'>
              b00750212@essec.edu
            </a>{' '}
            or through the form below
          </p>
          <input
            className='h-12 px-4 rounded-md border'
            name='email'
            type='email'
            required
            maxLength={100}
            placeholder='Your email'
          />
          <textarea
            className='h-[20rem] p-4 rounded-md border pb-[5rem]'
            name='message'
            required
            maxLength={5000}
            placeholder='Your message'
          />
          <button
            type='submit'
            disabled={isLoading}
            className={`
              text-2xl
              group
              z-50
              absolute
              bottom-3
              right-[0.8rem]
              flex
              items-center
              justify-center
              gap-2
              h-[3.5rem]
              w-[3.5rem]
              shadow-slate-500
              shadow-sm
              text-blue-900
              rounded-full
              outline-none
              transition-all
              focus:scale-110
              hover:scale-110
              active:scale-105
              disabled:scale-100
            `}
          >
            {isLoading ? (
              <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-blue-800'></div>
            ) : (
              <FaPaperPlane className='group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-[0.8]' />
            )}
          </button>
        </form>
      </motion.section>
    </>
  );
}
