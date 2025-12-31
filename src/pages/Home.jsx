import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter, IoLogoWhatsapp } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Hello, <TypeAnimation
                sequence={[
                  'I am Mohamad Sahan',
                  1000,
                  // 'I am a Web Developer',
                  // 1000,
                  // 'I am a UI/UX Designer',
                  // 1000,
                ]}
                speed={10}
                style={{ fontWeight:600 }}
                repeat={Infinity}
              />
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span className="font-extrabold">Software </span>{" "}
              <span
                className="text-brand-50 font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Engineer
              </span>
            </motion.h2>
            
          </motion.div>

          <motion.p
            className="text-brand-200 text-sm lg:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Passionate about technology, I specialize in Web Development and Web Designing. I’m focused on building innovative solutions and continuously expanding my skills. My goal is to grow as a developer and contribute to impactful projects in the tech industry.
          </motion.p>

          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
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
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-[55%] w-full flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="relative"
            style={{ perspective: '1200px' }}
          >
            {/* 3D Container Back */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-brand-700/20 rounded-lg"
              style={{
                transform: 'rotateY(-15deg) rotateX(10deg) translateZ(-20px)',
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            
            {/* 3D Container Sides */}
            <motion.div
              className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-brand-600/30 to-transparent rounded-t-lg"
              style={{
                transform: 'rotateX(90deg) translateZ(10px)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            
            <motion.div
              className="absolute top-0 right-0 w-4 h-full bg-gradient-to-b from-brand-600/30 to-transparent rounded-r-lg"
              style={{
                transform: 'rotateY(90deg) translateZ(10px)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            />

            {/* Main Image */}
            <motion.img
              className="relative h-full w-full max-w-md lg:max-w-lg rounded-lg shadow-2xl z-10"
              src="/assets/sahan1.png"
              alt="Mohamad Sahan"
              style={{
                transform: 'rotateY(-5deg) rotateX(5deg)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)'
              }}
              whileHover={{
                rotateY: 0,
                rotateX: 0,
                scale: 1.05,
                boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
