import React from "react";
import Navbar from "./components/navbar";
// import Sidebar from "./components/sidebar";
import Body from "./components/body";

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar />
      <div className="d-flex flex-grow-1">
        {/* <Sidebar /> */}
        <Body />
      </div>
    </div>
  );
};

export default App;
