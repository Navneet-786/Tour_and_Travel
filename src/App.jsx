import React, { useState } from "react";
import TourCard from "./components/TourCard";
import "./App.css";
import datas from "./components/data.js";
function App() {
  const [tour, setTour] = useState(datas);
  let filterTour = (id) => {
    let newTourData = tour.filter((val) => {
      return val.id != id;
    });
    setTour(newTourData);
  };
  return (
    <div id="container">
      <h1 id="heading">
        lets explore the <span id="last">world !</span>
      </h1>
      <div id="card-container">
        {tour.map((data) => {
          return <TourCard data={data} filterTour={filterTour} />;
        })}
      </div>
    </div>
  );
}

export default App;
