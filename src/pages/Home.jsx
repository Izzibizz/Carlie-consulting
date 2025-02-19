import { useRef } from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export const Home = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <section>
      <Hero />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </section>
  );
};

export default Home;
