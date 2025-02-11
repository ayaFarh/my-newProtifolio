import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const fadeIn = (delay) => ({
  hidden: { opacity: 0, y: 100, scale: 0.5 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { delay, duration: 0.5, ease: "easeInOut" }
  },
  exit: { 
    opacity: 0, 
    y: 50, 
    scale: 1, 
    transition: { delay, duration: 0.2, ease: "easeInOut" }
  }
});

export default function Home() {
  return (
    <div className='flex md:flex-row w-full h-full min-h-[500px] max-[418px]:min-h-[430px] flex-col justify-between items-center'>
      {/* Text Content */}
      <div className='h-full space-y-2 w-full overflow-hidden flex flex-col justify-center items-center text-white'>
        <motion.h2 variants={fadeIn(0.3)} initial="hidden" animate="show" exit="exit" className='text-4xl font-bold'>
          Hi, I'm Aya
        </motion.h2>
        
        <motion.p variants={fadeIn(0.4)} initial="hidden" animate="show" exit="exit"
          className='text-2xl text-center max-[402px]:text-xl max-[320px]:text-lg font-bold bg-gradient-to-r from-[#F2672E] via-purple-500 to-[#FF29C3] bg-clip-text text-transparent'>
          Frontend Developer (React)
        </motion.p>
        
        <motion.p variants={fadeIn(0.5)} initial="hidden" animate="show" exit="exit"
          className='text-2xl text-center max-[402px]:text-xl max-[320px]:text-lg'>
          I'm happy to see you here
        </motion.p>
        
        {/* Social Links */}
        <motion.div variants={fadeIn(0.6)} initial="hidden" animate="show" exit="exit" className='flex gap-5 mt-2 text-xl text-white'>
          <a href="https://www.linkedin.com/in/aya-mohamed-farh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='hover:text-[#F2672E] transition-all duration-200'>
            <CiLinkedin />
          </a>
          <a href="https://github.com/AyaFarh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className='hover:text-[#F2672E] transition-all duration-200'>
            <FaGithub />
          </a>
        
          <a href="https://twitter.com/YOUR_TWITTER_USERNAME" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className='hover:text-[#F2672E] transition-all duration-200'>
            <FaTwitter />
          </a>
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="w-full h-full flex justify-center overflow-hidden">
        <motion.img
     variants={fadeIn(0.4)} transition={{duration:0.4,delay:0.2 , ease:"easeInOut"}}
     initial={{opacity:0,scale:0.9, y:100}} animate={{opacity:1,scale:1, y:0}} exit={{opacity:1,scale:1, y:0,transition:{duration:0.2}}}
      src="/3d-illustration-girl-with-glasses-laptop-her-hands-2.png"
          alt="3D Illustration of a girl with a laptop"
          className="w-full max-w-[500px] object-cover"
        />
      </div>
    </div>
  );
}
