import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
