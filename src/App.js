import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      {/* className="sm:px-8 sm:py-8 xs:px-5 xs:py-10 lg:px-12 lg:py-4" */}
      <Router>
        <Navbar />
      </Router>
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
