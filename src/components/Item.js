import React from "react";
import { tours } from "../data";

const Item = () => {
  return (
    <>
      {tours.map((tour) => {
        return (
          <div>
            <img src={tour.photo} alt="" />
            <div>
              <h4>{tour.name}</h4>
              <h4>{tour.price}</h4>
              <h4>
                {tour.description1}
                {tour.description2}
              </h4>
              <button type="btn">Not interested</button>
              <br />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Item;
