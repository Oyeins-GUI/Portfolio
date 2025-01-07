import { Route, Routes } from "react-router";

import Layout from "./Layout";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function Router() {
   return (
      <Routes>
         <Route
            index
            element={
               <Layout>
                  <Home />
               </Layout>
            }
         />
         <Route
            path="/skills"
            element={
               <Layout>
                  <Skills />
               </Layout>
            }
         />
         <Route
            path="/projects"
            element={
               <Layout>
                  <Projects />
               </Layout>
            }
         />
         <Route
            path="/contact"
            element={
               <Layout>
                  <Contact />
               </Layout>
            }
         />
      </Routes>
   );
}
