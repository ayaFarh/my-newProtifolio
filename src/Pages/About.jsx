import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {motion} from "framer-motion"
import Skills from "./Skills";

export default function About() {
  const textRef = useRef(null);

//   useEffect(() => {
//     const letters = textRef.current.querySelectorAll("tspan");

//     const yourElement = document.getElementById("yourID");
//     const split = new SplitText(yourElement);

//     gsap.registerPlugin(SplitText);

// var tl = gsap.timeline(),
//   mySplitText = new SplitText("#quote", { type: "words,chars" }),
//   chars = mySplitText.chars; //an array of all the divs that wrap each character

// gsap.set("#quote", { perspective: 400 });

// console.log(chars);

// tl.from(chars, {
//   duration: 0.8,
//   opacity: 0,
//   scale: 0,
//   y: 80,
//   rotationX: 180,
//   transformOrigin: "0% 50% -50",
//   ease: "back",
//   stagger: 0.01
// });

// document.getElementById("animate").onclick = function () {
//   tl.restart();
// };

//     letters.forEach((letter, index) => {
//       gsap.set(letter, { fill: "transparent", stroke: "white" }); 

//       letter.addEventListener("mouseenter", () => {
//         gsap.to(letter, {
//           stroke: "url(#gradient)", 
//           duration: 0.3,
//           ease: "power2.inOut"
//         });
//       });

//       letter.addEventListener("mouseleave", () => {
//         gsap.to(letter, {
//           stroke: "white", 
//           duration: 0.3
//         });
//       });
//     });
//   }, []);

  return (
    <div className="flex flex-col justify-center items-center  space-y-3 text-white">
      <motion.h2
      className="text-3xl  text-center overflow-hidden text-nowrap max-[402px]:text-xl max-[320px]:text-lg font-bold bg-gradient-to-r from-[#F2672E] via-purple-500 to-[#FF29C3] bg-clip-text text-transparent"
   
    initial={{width:0}}
    animate={{width:"fit-content",}}
    transition={{duration:3, ease:"easeInOut"}}
    >
    About me
  </motion.h2>

  <p className="md:text-xl text-lg w-[90%]  text-center ">
    
  Hello, my name is Aya Mohamed, and I am a dedicated Front-End
          Developer with a strong focus on React and JavaScript. I have a
          passion for creating dynamic and user-friendly web applications that
          provide an excellent user experience.
<br/>
          I am always eager to learn new technologies and stay up-to-date with
          the latest trends in web development. My goal is to contribute to
          innovative projects that make a real impact, and I am excited to bring
          my expertise to new challenges and opportunities. Thank you for taking
          the time to learn a bit about me. I look forward to connecting and
          discussing how I can contribute to your team.

  </p>
  <div className="">
  <Skills />
  </div>
    </div>
  );
}
