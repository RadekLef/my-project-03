
import About from "./components/About";
import Header from "./components/Header";
import Dog from "./components/Dog";
import Breeders from "./components/Breeders";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Intro from "./components/Intro";

export default function App() {
  return (
    <div>
      <Header />
      <Intro />
      <div id="About">
        <About />
      </div>
      <div id="Bohemian-shepherd">
        <Dog />
      </div>
      <div id="Pedigree">
        <Breeders />
      </div>
      <div id="Gallery">
        <Gallery />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
}


