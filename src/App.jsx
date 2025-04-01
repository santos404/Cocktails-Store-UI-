import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Flavours from "./pages/Flavours";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/footer/Contact";

const App = () => {
  return (
    <div className="font-raleway bg-customBackground min-h-screen cursor-pointer">
      <Router>
        <Navbar />
        <div>
          <section id="home">
            <Home />
          </section>
          <section id="flavour">
            <Flavours />
          </section>
          <section id="product">
            <Products />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="footer">
            <Contact />
          </section>
        </div>
      </Router>
    </div>
  );
};

export default App;
