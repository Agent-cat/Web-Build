import React from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import RightAside from "./Components/RightAside";
const App = () => {
  return (
    <div className="flex overflow-hidden  flex-1 bg-gray-100 select-none font-sans">
      <Sidebar/>
      <Navbar/>
      <RightAside/>
     
    </div>
  );
};

export default App;
