import React from "react";
import Top from "./components/Top";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Spacer from "./components/Spacer";

function App() {
  return (
    <div>
      <Top />
      <Spacer />
      <AboutMe />
      <Spacer />
      <Work />
      <Spacer />
    </div>
  );
}

export default App;
