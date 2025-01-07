import MobileNav from "./components/MobileNav";
import Sidebar from "./components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <>
         <Sidebar />
         <MobileNav />
         <main className="min-h-dvh pt-20 px-6 lg:pt-24 lg:pl-80 lg:pr-12 pb-4">
            {children}
         </main>
      </>
   );
}
