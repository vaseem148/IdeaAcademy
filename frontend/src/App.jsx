import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/loyouts/Navbar";
import Footer from "./components/loyouts/Footer";
import Singlepage from "./pages/singlepageapplication/Singlepage"
import Adform from "./pages/singlepageapplication/Adform"


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Singlepage />} />
          <Route path="/adform" element={<Adform/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
