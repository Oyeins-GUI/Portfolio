import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiReacthookform } from "react-icons/si";

const skills = [
   { name: "HTML", icon: <FaHtml5 className="text-6xl md:text-7xl" /> },
   { name: "CSS", icon: <IoLogoCss3 className="text-6xl md:text-7xl" /> },
   {
      name: "JavaScript",
      icon: <IoLogoJavascript className="text-6xl md:text-7xl" />,
   },
   {
      name: "TypeScript",
      icon: <SiTypescript className="text-6xl md:text-7xl" />,
   },
   { name: "React", icon: <FaReact className="text-6xl md:text-7xl" /> },
   { name: "Nextjs", icon: <RiNextjsFill className="text-6xl md:text-7xl" /> },
   {
      name: "Tailwind",
      icon: <RiTailwindCssFill className="text-6xl md:text-7xl" />,
   },
   { name: "Redux", icon: <SiRedux className="text-6xl md:text-7xl" /> },
   {
      name: "React Hook Form",
      icon: <SiReacthookform className="text-6xl md:text-7xl" />,
   },
   { name: "Git", icon: <FaGitAlt className="text-6xl md:text-7xl" /> },
];

export default function Skills() {
   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
      >
         <h2 className="font-saira text-4xl sm:text-5xl font-bold uppercase mb-12 text-primary">
            Skills
         </h2>
         <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {skills.map(({ name, icon }, index) => (
               <motion.div
                  key={name}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
               >
                  {icon}
                  <span className="text-center font-semibold text-gray-700">
                     {name}
                  </span>
               </motion.div>
            ))}
         </div>
      </motion.div>
   );
}
