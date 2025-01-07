import { motion } from "framer-motion";
import { navItems } from "../navItems";
import Profile from "./Profile";
import { NavLink } from "react-router";

export default function Sidebar() {
   return (
      <motion.nav
         initial={{ x: -300 }}
         animate={{ x: 0 }}
         transition={{ duration: 0.6 }}
         className="hidden lg:flex fixed left-0 top-0 h-dvh w-72 bg-primary flex-col items-center text-white"
      >
         <div className="p-8">
            <Profile type="lg" />
         </div>

         <ul className="w-full">
            {navItems.map((item, index) => (
               <motion.li
                  key={item.title}
                  initial={{ x: -300 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
               >
                  <NavLink
                     to={item.href}
                     className="block py-3 px-8 text-lg font-saira hover:bg-white/10 transition-colors"
                  >
                     {item.title}
                  </NavLink>
               </motion.li>
            ))}
         </ul>
      </motion.nav>
   );
}
