import React, { useState } from "react";
import "./TourCard.css";
function TourCard({ data, filterTour }) {
  const [fullContent, setFullContent] = useState(false);
  let clickHandler = () => {
    filterTour(data.id);
  };
  return (
    <div id="card">
      <div id="imageSection">
        <img src={data.image} alt="" />
      </div>

      <div>
        <h3 id="price">{`₹ ${data.price}`}</h3>
        <div id="name">{data.name}</div>
        <p id="para">
          {!fullContent ? (
            <>
              <span>{data.info.substring(0, 250)}</span>
              <span
                className="conlen"
                onClick={() => setFullContent(!fullContent)}
              >
                ...read more
              </span>
            </>
          ) : (
            <>
              <span>{data.info}</span>
              <span
                className="conlen"
                onClick={() => setFullContent(!fullContent)}
              >
                ...show less
              </span>
            </>
          )}
        </p>
      </div>
      <button onClick={clickHandler}>Not Intrested</button>
    </div>
  );
}

export default TourCard;
