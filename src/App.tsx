import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async'
import Home from "@/view/Home"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import About from "./view/About"
import Services from "./view/Services"
import Contact from "./view/Contact"

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
