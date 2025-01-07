import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Headphone from "../assets/Headphone.png";
import AgeCalculus from "../assets/Age Calculus.png";
import Countries from "../assets/Travel-With-Oyeins-Countries.png";
import SpaceTourism from "../assets/Space tourism.png";
import NewsPpage from "../assets/News Homepage.png";
import { Link } from "react-router";

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
      title: "News Page",
      image: NewsPpage,
      description:
         "News Page is a sleek and dynamic web application that delivers the latest news in a visually engaging format.",
      liveUrl: "https://newspage-oyeins.netlify.app/",
      githubUrl: "https://github.com/Oyeins-GUI/newspage",
      tools: ["HTML", "CSS", "Javascript"],
   },
   {
      title: "Space Tourism",
      image: SpaceTourism,
      description:
         "Space Tourism is an immersive and futuristic web application designed to inspire users with the wonders of space exploration",
      liveUrl: "https://space-tourism-with-oyeins.vercel.app/",
      githubUrl: "https://github.com/Oyeins-GUI/space-tourism",
      tools: ["React", "Tailwind CSS", "Typescript"],
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
   {
      title: "Headphone Store Landing Page",
      image: Headphone,
      description:
         "Headphone Store Landing Page is a modern and visually appealing e-commerce landing page tailored for audio enthusiasts.",
      liveUrl: "https://headphone-rho.vercel.app/",
      githubUrl: "https://github.com/Oyeins-GUI/next-landing-page",
      tools: ["Nextjs", "Tailwind CSS", "Typescript"],
   },
];

export default function Projects() {
   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
      >
         <h2 className="font-saira text-4xl sm:text-5xl font-bold uppercase mb-12 text-gray-700">
            Projects
         </h2>
         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
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
                        alt={`${project.title} screenshot`}
                        className="w-full h-48 object-cover"
                     />
                  </Link>
                  <div className="p-6">
                     <h3 className="font-saira text-2xl font-semibold mb-2 text-gray-800">
                        {project.title}
                     </h3>
                     <p className="text-gray-600 mb-4">{project.description}</p>
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
      </motion.div>
   );
}
