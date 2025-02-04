import { Route, Routes } from "react-router-dom";
import { Home, Editor, DashBoard, NotFound } from "./Pages";
import { Login, Signin } from "./auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
