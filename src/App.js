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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" about element={<About />} />
          <Route path="/resume" about element={<Resume />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
