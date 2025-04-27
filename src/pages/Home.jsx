import { useEffect, useRef } from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Overview } from "../components/Overview";
import { useWebsiteStore } from "../stores/useWebsiteStore";

export const Home = () => {

  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const overviewRef = useRef(null)
  const { scrollToContact, setScrollToContact, scrollToAbout, setScrollToAbout, scrollToOverview, setScrollToOverview } = useWebsiteStore()


  const handleScroll = () => {
    overviewRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  useEffect(() => {
    if (scrollToContact && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollToContact(false); 
    } else if (scrollToAbout && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollToAbout(false); 
    } else if (scrollToOverview && overviewRef.current) {
      overviewRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollToOverview(false); 
    }
  }, [scrollToContact, setScrollToContact,  scrollToOverview,
    setScrollToOverview,
    scrollToAbout,
    setScrollToAbout]);


  return (
    <section>
      <Hero handleScroll={handleScroll} />
      <div ref={overviewRef}>
        <Overview />
      </div>
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
