import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Article from "./Pages/Article/Article"
import Login from "./Pages/login/Login"
import Panel from "./Pages/panel/Panel"
import Course from "./Pages/Course/Course"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Article />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/course" element={<Course />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
