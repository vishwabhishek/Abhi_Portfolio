import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
// import {Skills} from "./components/Skills/Skill";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      {/* <Skills/> */}
      {/* <Education/> */}
      <Contact />
    </div>
  );
}

export default App;
