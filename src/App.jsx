import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import GetInTouch from './components/GetInTouch';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="get-in-touch"><GetInTouch /></section>
    </div>
  )
}

export default App
