import "./app.scss";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom"
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog"
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main style={{marginTop: 140}}>
         <Routes>
          <Route path="/" element={ <AboutMe/> } />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  
  );
}

export default App;
