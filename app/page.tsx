import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Projects from '../components/home/Projects';
import Testimonials from '../components/home/Testimonials';
import Stats from '../components/home/Stats';
import Timeline from '../components/home/Timeline';


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Timeline />
      <Stats />
      <Testimonials />
   
    </>
  );
}