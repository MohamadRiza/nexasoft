import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Prices from "./Pages/Prices";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar /> 
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/prices" element={<Prices />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
