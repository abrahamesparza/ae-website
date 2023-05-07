import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
