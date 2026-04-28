import { ParticleField } from "./components/ParticleField";
import { Cursor } from "./components/Cursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Manifesto } from "./components/Manifesto";
import { Stats } from "./components/Stats";
import { Ventures } from "./components/Ventures";
import { Principles } from "./components/Principles";
import { Press } from "./components/Press";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <ParticleField />
      <ScrollProgress />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Stats />
        <Ventures />
        <Principles />
        <Press />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
