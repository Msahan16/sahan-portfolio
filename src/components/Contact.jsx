import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin, IoLogoTwitter, IoLogoWhatsapp } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='lg:my-16 lg:px-28 my-8 px-5'
      id='contact'
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='text-2xl lg:text-4xl text-center'
      >
        Contact <span className='font-extrabold'>Me</span>
      </motion.h2>

      <div className='flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-[40%]'
        >
          <form className='w-full space-y-3 lg:space-y-5'>
            <input className='border-2 px-5 py-3 border-brand-700 rounded placeholder:text-brand-400 text-sm text-brand-200 w-full bg-transparent' type="text" placeholder='Your name' required />
            <input className='border-2 px-5 py-3 border-brand-700 rounded placeholder:text-brand-400 text-sm text-brand-200 w-full bg-transparent' type="email" placeholder='Email' required />
            <input className='border-2 px-5 py-3 border-brand-700 rounded placeholder:text-brand-400 text-sm text-brand-200 w-full bg-transparent' type="text" placeholder='Your website (If exists)' />
            <textarea className='resize-none border-2 px-5 py-3 h-32 border-brand-700 placeholder:text-brand-400 rounded text-sm text-brand-200 w-full bg-transparent' placeholder='How can I help?*'></textarea>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className='flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row'
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                type='submit'
                className='bg-brand-600 justify-center w-fit lg:w-auto lg:flex-1 hover:shadow-lg text-brand-50 px-3 py-2 rounded flex items-center gap-x-3 font-medium'
              >
                Get In Touch
              </motion.button>

              <div className='flex items-center gap-x-2 lg:gap-x-5'>
                {[BiLogoGmail, IoLogoLinkedin, IoLogoWhatsapp, BsGithub].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href={index === 0 ? "mailto:mohammedshn@2002@gmail.com" : "#"}
                    className="bg-surface text-brand-50 p-2 lg:p-3 rounded border-2 border-brand-500 hover:bg-brand-500 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2'
        >
          <div className='font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3'>
            <h2>Let's <span className='text-brand-50' style={{ WebkitTextStroke: '1px black' }}>talk</span> for</h2>
            <h2>Something special</h2>
          </div>

          <p className='text-brand-200 text-sm/6 lg:text-base mt-3 lg:mt-6'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>

          <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4'>
            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="mailto:mohammedshn@2002@gmail.com"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-brand-500 rounded-full p-1'>
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              mohammedshn@2002@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="tel:+94704268704"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-brand-500 rounded-full p-[5px]'>
                <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
              </span>
              +94704268704
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
