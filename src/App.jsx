import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Project';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* <div>slok</div> */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}