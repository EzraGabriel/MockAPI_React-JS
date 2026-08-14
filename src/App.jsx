import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/SignIn.jsx";
import AddCourse from "./pages/AddCourse.jsx";
import EditCourse from "./pages/EditCourse.jsx";
import EditDetailCourse from "./pages/EditDetailCourse.jsx";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addcourse" element={<AddCourse />} />
        <Route path="/editcourse" element={<EditCourse />} />
        <Route path="/course/edit/:id" element={<EditDetailCourse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
