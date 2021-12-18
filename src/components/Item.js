import React, { useState, useReducer } from "react";
import { tours } from "../data";

const defaultDescriptionState = {
  tours: tours.map((tour) => ({
    ...tour,
    displayDescription2: false,
    showMore: "Show more",
  })),
};

const Item = () => {
  const reducer = (state, action) => {
    if (action.type == "SHOW_MORE") {
      const newTours = state.tours.map((tour) =>
        tour.id == action.payload
          ? {
              ...tour,
              displayDescription2: !tour.displayDescription2,
              showMore: tour.displayDescription2 ? "Show  more" : "Show less",
            }
          : tour
      );

      return { tours: newTours };
    }

    if (action.type == "REMOVE_TOUR") {
      const newTours = state.tours.filter((tour) => tour.id !== action.payload);

      return { tours: newTours };
    }
  };

  const [state, dispach] = useReducer(reducer, defaultDescriptionState);

  // console.log(state.tours);

  return (
    <>
      {state.tours.map((tour) => {
        return (
          <div key={tour.id}>
            <img src={tour.photo} alt="" />
            <div key={tour.id}>
              <h4>{tour.name}</h4>
              <h4>{tour.price}</h4>
              <h4>
                {tour.description1 + " "}
                {tour.displayDescription2 && tour.description2}
                <button
                  onClick={() =>
                    dispach({ type: "SHOW_MORE", payload: tour.id })
                  }
                >
                  {tour.showMore}
                </button>
              </h4>
              <button
                type="btn"
                onClick={() =>
                  dispach({ type: "REMOVE_TOUR", payload: tour.id })
                }
              >
                Not interested
              </button>
              <br />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Item;
