import React, { useState } from "react";
import { tours } from "../data";

const Item = () => {
  const [description, setDescription] = useState([
    tours.map((tour) => {
      return {
        id: tour.id,
        description: tour.description1,
        text: "Show more",
      };
    }),
  ]);
  // const [text, setText] = useState("Show more");

  const [displayDescription2, setDisplayDescription2] = useState(false);
  const [showMore, setShowMore] = useState("Show more");
  const displayMoreDescription = () => {
    setDisplayDescription2(!displayDescription2);
    setShowMore(displayDescription2 ? "Show  more" : "Show less");
  };

  console.log(description);
  return (
    <>
      {tours.map((tour) => {
        return (
          <div key={tour.name}>
            <img src={tour.photo} alt="" />
            <div key={tour.id}>
              <h4></h4>
              <h4>{tour.price}</h4>
              <h4>
                {tour.description1}
                {displayDescription2 && tour.description2}
                <button onClick={() => displayMoreDescription()}>
                  {showMore}
                </button>
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
