import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const projectDetails = [
    {
      image: "/freshcart.png",
      title: "Freshcart",
      link: "https://ayafarh.github.io/Freshcart/",
    },
    {
      image: "/meals.png",
      title: "Food App",
      link: "https://ayafarh.github.io/meals-project/",
    },
    {
      image: "/DOTCODE.png",
      title: "Dot code",
      link: "https://dot-code.vercel.app/",
    },
    {
      image: "/fashion.png",
      title: "fashion app",
      link: "https://e-commerce-fashion-16.vercel.app/",
    },
    {
      image: "/popit.png",
      title: "Popit",
      link: "https://ayafarh.github.io/popit/",
    },
    {
      image: "/Headphone - Google Chrome 12_2_2024 3_43_02 PM.png",
      title: "Headphone",
      link: "https://head-phones-five.vercel.app/",
    },
    {
      image: "/Eslam - Google Chrome 1_16_2025 2_39_19 PM.png",
      title: "protifolio",
      link: "https://eslam-fqng.vercel.app",
    },
    {
      image: "/melafy.png",
      title: "Melafy",
      link: "https://ayafarh.github.io/mealify/",
    },
    {
      image: "/to-do-ist.png",
      title: "To Do List",
      link: "https://ayafarh.github.io/to-do-list/",
    },
    {
      image: "/weather.png",
      title: "Weather App",
      link: "https://ayafarh.github.io/weather/",
    },
    {
      image: "/custommer.png",
      title: "customers",
      link: "https://ayafarh.github.io/customer-and-transaction/",
    },
    {
      image: "/contact list.png",
      title: "Contact List",
      link: "https://ayafarh.github.io/contact-list/",
    },
    {
      image: "/bookmark.png",
      title: "Bookmark",
      link: "https://ayafarh.github.io/book-mark/",
    },
    {
      image: "/menator.png",
      title: "Mentor",
      link: "https://ayafarh.github.io/my-mentors/",
    },
    {
      image: "/party.png",
      title: "party",
      link: "https://party-jm8ov18cv-ayafarhs-projects.vercel.app/",
    },
    {
      image: "/dev.png",
      title: "Dev",
      link: "https://dev-phi-two.vercel.app/",
    },
    {
      image: "/daniels.png",
      title: "Daniels",
      link: "https://daniels-six.vercel.app/",
    }
  ];

  useEffect(() => {
    const sections = cardsRef.current;
    gsap.utils.toArray(sections).forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.8, y: 100 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 60%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className=" mx-auto  min-h-screen flex flex-col items-center justify-center">
      {projectDetails.map((project, index) => (
        <div
          key={project.title}
          className="relative w-full max-w-2xl p-4 bg-[#0a0a0a]v rounded-xl shadow-lg my-10 opacity-0 transition-all duration-500"
          ref={(el) => (cardsRef.current[index] = el)}
        >
          <img className="object-cover w-full h-full rounded-lg" src={project.image} alt={project.title} />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center bg-black/70">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-lg  bg-[#1f161c] rounded-xl text-white">
              Demo
          </a>
          </div>
        </div>
      ))}
    </div>
  );
}
