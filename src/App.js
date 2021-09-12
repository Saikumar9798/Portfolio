import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <About />
        <Education />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
