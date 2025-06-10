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
import Project1 from "./pages/projects/project1";
import Project2 from "./pages/projects/project2";
import Project3 from "./pages/projects/project3";
import Project4 from "./pages/projects/project4";
import Project5 from "./pages/projects/project5";
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
        <Route path="/projects/project1" element={<Project1 />} />
        <Route path="/projects/project2" element={<Project2 />} />
        <Route path="/projects/project3" element={<Project3 />} />
        <Route path="/projects/project4" element={<Project4 />} />
        <Route path="/projects/project5" element={<Project5 />} />
      </Routes>
    </div>
  );
}

export default App;
