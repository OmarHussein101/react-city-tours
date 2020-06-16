import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.scss";
import TourList from "./Components/TourList/Index";

function App() {
  return (
    <main>
      <Navbar />
      <TourList />
    </main>
  );
}

export default App;
