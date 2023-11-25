import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  //Feedback, INCOMPLETE ADD <Feedback /> below
  Hero,
  Navbar,
  //Tech, INCOMPLETE ADD <Tech /> below
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Works />
        <About />
        <Experience />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
