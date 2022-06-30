import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Newpost from "./components/Newpost";

import { Routes, Route} from "react-router-dom";
import Blog from "./components/Blog";
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="contact" element={<Contact />} />
        <Route path="newpost" element={<Newpost />} />
        <Route path="blog/:id" element={<Blog/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
