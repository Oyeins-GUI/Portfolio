import { motion } from "framer-motion";
import {
   FaExternalLinkAlt,
   FaGithub,
   FaLinkedinIn,
   FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router";
import AgeCalculus from "../assets/Age Calculus.webp";
import Countries from "../assets/Travel-With-Oyeins-Countries.webp";
import { FaHtml5, FaReact } from "react-icons/fa6";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";

const socialLinks = [
   { icon: FaTwitter, href: "https://x.com/oyeinbomo" },
   { icon: FaLinkedinIn, href: "https://linkedin.com/in/oyeinbomo" },
   { icon: FaGithub, href: "https://github.com/Oyeins-GUI" },
];

export default function Home() {
   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
      >
         <h1 className="font-saira text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-2">
            <span className="text-gray-700">Opuene</span>
            <span className="text-primary"> Oyeinbomo</span>
         </h1>

         <div className="text-base sm:text-lg text-gray-600 mb-8">
            <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
               <span>IGBOGENE-EPIE</span>
               <span className="hidden sm:inline">·</span>
               <span>YENAGOA, BAYELSA STATE</span>
               <span className="hidden sm:inline">·</span>
               <span>(+234) 913 375 8980</span>
               <span className="hidden sm:inline">·</span>
            </p>
            <p className="text-primary">oyeinbomoopuene@gmail.com</p>
         </div>

         <p className="text-lg sm:text-xl mb-8">
            With over two years of experience in front-end web development, I am
            dedicated to creating user-friendly interfaces that not only meet
            the needs of businesses and the overall user experience. I ensure
            that websites look great on any device. My mission is to deliver
            intuitive and engaging web experiences that align with business
            objectives while prioritizing a great experience for users.
         </p>

         <div className="flex flex-wrap gap-4">
            {socialLinks.map((social, index) => {
               const Icon = social.icon;
               return (
                  <motion.a
                     key={index}
                     href={social.href}
                     className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-700 flex items-center justify-center text-gray-700 hover:bg-primary hover:border-primary hover:text-white transition-colors"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.3 + index * 0.1 }}
                  >
                     <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
               );
            })}
         </div>

         <div className="mt-10">
            <p className="text-3xl font-black font-saira">Projects</p>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-5">
               {projects.map((project, index) => (
                  <motion.div
                     key={project.title}
                     className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: index * 0.1 }}
                  >
                     <Link
                        to={project.liveUrl}
                        className="hover:opacity-85 transition-all"
                     >
                        <img
                           src={project.image}
                           srcSet={project.image}
                           loading="lazy"
                           decoding="async"
                           fetchPriority="high"
                           alt={`${project.title} screenshot`}
                           className="w-full h-48 object-cover"
                        />
                     </Link>
                     <div className="p-6">
                        <h3 className="font-saira text-2xl font-semibold mb-2 text-gray-800">
                           {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                           {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                           {project.tools.map((tool) => (
                              <span
                                 key={tool}
                                 className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
                              >
                                 {tool}
                              </span>
                           ))}
                        </div>
                        <div className="flex justify-between items-center">
                           <Link
                              to={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-primary hover:underline"
                           >
                              <FaExternalLinkAlt className="mr-2" />
                              Live Demo
                           </Link>
                           <Link
                              to={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-gray-700 hover:text-primary"
                           >
                              <FaGithub className="mr-2" />
                              GitHub
                           </Link>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>

            <Link
               to="/projects"
               className="mt-10 hover:underline hover:underline-offset-2 transition-all"
            >
               View More
            </Link>
         </div>

         <div className="mt-10 mb-5">
            <p className="text-3xl font-black font-saira">Skills</p>

            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-3 mb-2">
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

            <Link
               to="/skills"
               className="hover:underline hover:underline-offset-2 transition-all mb-5"
            >
               View More
            </Link>
         </div>

         <Link
            to="/contact"
            className="bg-primary text-white px-4 py-2 transition-all mb-2"
         >
            Hire Me
         </Link>
      </motion.div>
   );
}

const projects = [
   {
      title: "Countries Info",
      image: Countries,
      description:
         "Countries Info is an interactive web application designed to provide detailed information about countries worldwide.",
      liveUrl: "https://countries-oyeins.vercel.app/",
      githubUrl: "https://github.com/Oyeins-GUI/countries",
      tools: ["Nextjs", "Tailwind CSS", "Typescript"],
   },
   {
      title: "Age Calculus",
      image: AgeCalculus,
      description:
         "Age Calculus allows users calculate their age and get the result in years, months and days.",
      liveUrl: "https://agecalculus.netlify.app/",
      githubUrl: "https://github.com/Oyeins-GUI/AgeCalculus",
      tools: ["HTML", "CSS", "Javascript"],
   },
];

const skills = [
   { name: "HTML", icon: <FaHtml5 className="text-6xl md:text-7xl" /> },
   { name: "CSS", icon: <IoLogoCss3 className="text-6xl md:text-7xl" /> },
   {
      name: "JavaScript",
      icon: <IoLogoJavascript className="text-6xl md:text-7xl" />,
   },
   { name: "React", icon: <FaReact className="text-6xl md:text-7xl" /> },
];
