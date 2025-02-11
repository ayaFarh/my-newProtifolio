import { motion } from "framer-motion";

const skillsDetails = [
  { id: 1, name: "HTML", icon: "/html.jpg" },
  { id: 2, name: "CSS", icon: "/css.webp" },
  { id: 3, name: "JavaScript", icon: "/javaseript.webp" },
  { id: 4, name: "React", icon: "/react js.png" },
  { id: 5, name: "Tailwind", icon: "/tailwind.webp" },
  {  id: 6, name: "Bootstrap", icon: "/bootstrap.png" },
  { id: 7, name: "Github", icon: "/github.png" },
];

export default function SkillsCircle() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
     <h2 className="text-3xl   text-center  w-fit max-[402px]:text-xl max-[320px]:text-lg font-bold bg-gradient-to-r from-[#F2672E] via-purple-500 to-[#FF29C3] bg-clip-text text-transparent"
        >My Skills</h2>
    <motion.div className="flex flex-wrap justify-center gap-5">
      {skillsDetails.map((skill) => (
        <motion.div
          key={skill.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}    
        >
          <div className="flex flex-col items-center rounded ">
            <img src={skill.icon} alt={skill.name} className="w-16 h-16 bg-white" />
            <span className="text-white">{skill.name}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
    </div>
    
  );
}
