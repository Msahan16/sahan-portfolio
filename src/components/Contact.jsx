import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_3xe5z7s';
const EMAILJS_TEMPLATE_ID = 'template_0enam0d'; // Replace with your template ID
const EMAILJS_PUBLIC_KEY = 'tRKpAizH48MSbPrnX'; // Replace with your public key

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Form state
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    website: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          website: formData.website || 'Not provided',
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ from_name: '', from_email: '', website: '', message: '' });
      // Auto-hide success message after 5 seconds
      setTimeout(() => setStatus({ type: '', message: '' }), 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again or contact me directly.' });
      // Auto-hide error message after 5 seconds
      setTimeout(() => setStatus({ type: '', message: '' }), 3000);
    } finally {
      setIsLoading(false);
    }
  };

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
          <form ref={formRef} onSubmit={handleSubmit} className='w-full space-y-3 lg:space-y-5'>
            <input
              className='border-2 px-5 py-3 border-brand-700 rounded placeholder:text-brand-400 text-sm text-brand-200 w-full bg-transparent focus:border-brand-500 focus:outline-none transition-colors'
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder='Your name'
              required
            />
            <input
              className='border-2 px-5 py-3 border-brand-700 rounded placeholder:text-brand-400 text-sm text-brand-200 w-full bg-transparent focus:border-brand-500 focus:outline-none transition-colors'
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder='Email'
              required
            />
            <input
              className='border-2 px-5 py-3 border-brand-700 rounded placeholder:text-brand-400 text-sm text-brand-200 w-full bg-transparent focus:border-brand-500 focus:outline-none transition-colors'
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder='Your website (If exists)'
            />
            <textarea
              className='resize-none border-2 px-5 py-3 h-32 border-brand-700 placeholder:text-brand-400 rounded text-sm text-brand-200 w-full bg-transparent focus:border-brand-500 focus:outline-none transition-colors'
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder='How can I help?*'
              required
            ></textarea>

            {/* Status Message */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded text-sm ${status.type === 'success'
                  ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                  : 'bg-red-500/20 text-red-400 border border-red-500/50'
                  }`}
              >
                {status.message}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className='flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row'
            >
              <motion.button
                whileHover={{ scale: isLoading ? 1 : 1.05 }}
                whileTap={{ scale: isLoading ? 1 : 0.95 }}
                type='submit'
                disabled={isLoading}
                className={`bg-brand-600 justify-center w-fit lg:w-auto lg:flex-1 hover:shadow-lg text-brand-50 px-3 py-2 rounded flex items-center gap-x-3 font-medium transition-opacity ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Get In Touch'
                )}
              </motion.button>

              <div className='flex items-center gap-x-2 lg:gap-x-5'>
                {[
                  { Icon: BiLogoGmail, href: "mailto:mohammedshn2002@gmail.com" },
                  { Icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/mohamad-sahan" },
                  { Icon: IoLogoWhatsapp, href: "https://wa.me/94704268704" },
                  { Icon: BsGithub, href: "https://github.com/Msahan16" }
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
              href="mailto:mohammedshn2002@gmail.com"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-brand-500 rounded-full p-1'>
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              mohammedshn2002@gmail.com
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
