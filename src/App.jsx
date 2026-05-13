import { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollAnimation from './components/useScrollAnimation';

function App() {
    const scrollContainerRef = useRef(null);
    useScrollAnimation();

    return (
        <div ref={scrollContainerRef}>
            <Navbar scrollContainerRef={scrollContainerRef} />
            <main>
                <Hero />
                <Projects />
                <About />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
