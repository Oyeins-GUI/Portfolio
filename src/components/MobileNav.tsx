import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "../navItems";
import { NavLink } from "react-router";
import Profile from "./Profile";

export default function MobileNav() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="lg:hidden">
         <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-4 right-4 z-50 p-2 bg-primary text-white rounded-md"
         >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
         </button>

         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 z-40"
                  onClick={() => setIsOpen(false)}
               >
                  <motion.nav
                     initial={{ x: "100%" }}
                     animate={{ x: 0 }}
                     exit={{ x: "100%" }}
                     className="absolute right-0 top-0 bottom-0 w-64 bg-primary p-4 text-white"
                     onClick={(e) => e.stopPropagation()}
                  >
                     <div className="flex justify-center mb-8 mt-16">
                        <Profile type="sm" />
                     </div>

                     <ul className="space-y-2">
                        {navItems.map((item, index) => (
                           <motion.li
                              key={item.title}
                              initial={{ x: 50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.1 * index }}
                           >
                              <NavLink
                                 to={item.href}
                                 className="font-saira font-bold text-xl block py-2 px-4 hover:bg-white/10 rounded-md transition-colors"
                                 onClick={() => setIsOpen(false)}
                              >
                                 {item.title}
                              </NavLink>
                           </motion.li>
                        ))}
                     </ul>
                  </motion.nav>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
}
