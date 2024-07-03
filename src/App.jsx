import { Home } from "./pages/home";
import { Users } from "./pages/users";
import { Contact } from "./pages/contact";
import { Header } from "./layout/header";
import { Footer } from "./layout/footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Routes>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
