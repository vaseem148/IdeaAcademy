import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Singlepage from "./pages/singlepageapplication/Singlepage"
import Adform from "./pages/singlepageapplication/Adform"
import AdmissionsList from "./pages/singlepageapplication/AdmissionsList"
import AdminLogin from "./pages/singlepageapplication/AdminLogin"

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Singlepage />} />
          <Route path="/adform" element={<Adform/>} />
          <Route path="/admin/login" element={<AdminLogin/>} />
          <Route path="/admin/admissions" element={<AdmissionsList/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
