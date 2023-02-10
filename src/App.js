import "./app.scss";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";
import SingleBlog from "./pages/SingleBlog";
import singleProjectPage from "./pages/single-project-page";
function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main style={{ marginTop: 140 }}>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="/SingleBlog" element={<SingleBlog />} />
          <Route path="/singleProjectPage" element={<singleProjectPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
