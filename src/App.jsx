import { Home } from "./pages/home/home";
import { Users } from "./pages/users/users";
import { Contact } from "./pages/contact/contact";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="users" element={<Users />} />
      <Route path="contact" element={<Contact />} />
      {/* <Route path="*" element={<h1>page not found</h1>} /> */}
    </Routes>
  );
}

export default App;
