import "./App.scss";
import "./Components/Layout";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route basename={process.env.PUBLIC_URL} path="/" element={<Layout />}>
          <Route basename={process.env.PUBLIC_URL} index element={<Home />} />
          <Route
            basename={process.env.PUBLIC_URL}
            path="/about"
            about
            element={<About />}
          />
          <Route
            basename={process.env.PUBLIC_URL}
            path="/resume"
            about
            element={<Resume />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
