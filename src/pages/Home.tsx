import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socialLinks = [
   // { icon: FaFacebookF, href: "#" },
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
            With over two years of nonprofessional experience in front-end web
            development, I am dedicated to creating user-friendly interfaces
            that not only meet the needs of businesses and the overall user
            experience. I ensure that websites look great on any device. My
            mission is to deliver intuitive and engaging web experiences that
            align with business objectives while prioritizing a great experience
            for users.
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
      </motion.div>
   );
}
