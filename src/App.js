import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Softwares } from "./components/Softwares";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Certi } from './components/Certi';
import EkanshResume from "./components/EkanshResume";  // Import Resume Page

function App() {
  const location = useLocation();  
  const hideNavbar = location.pathname === "/ekanshresume"; // Hide navbar on resume page

  return (
    <div className="App">
      {!hideNavbar && <NavBar />} 
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Skills />
            <Softwares />
            <Experience />
            <Projects />
            <Certi />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/ekanshresume" element={<EkanshResume />} />
      </Routes>
    </div>
  );
}

export default App;
