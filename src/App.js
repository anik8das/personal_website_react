import Home from "./components/Home";
import About from "./components/About";
import Hobbies from "./components/Hobbies";
import Connect from "./components/Connect";
import AOS from "aos";
import "aos/dist/aos.css";
import  { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <div className="snap-y snap-mandatory">
      <Home className="snap-always snap-center"/>
      <About className="snap-always snap-center"/>
      <Hobbies className="snap-always snap-center"/>
      <Connect className="snap-always snap-center"/>
    </div>
  );
}

export default App;
