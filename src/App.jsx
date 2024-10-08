import React from "react";
import {
  Hero,
  Navbar,
  Projects,
  Bio,
  Skills,
  Education,
  ContactForm,
  Footer,
} from "./components/index";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="relative h-full overflow-y-auto antialiased container">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
        <Navbar />
        <Projects />
        <Bio />
        <Skills />
        <Education />
        <ContactForm />
        <Footer />
      </div>

      <Toaster />
    </div>
  );
}

export default App;
