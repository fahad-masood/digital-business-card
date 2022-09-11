import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Info } from "./components/Info";
import { Interests } from "./components/Interests";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
