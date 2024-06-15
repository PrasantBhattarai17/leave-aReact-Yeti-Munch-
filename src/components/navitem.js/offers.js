import React from "react";

const Offer = () => {
  const restaurants = [
    "Fishermans Wharf",
    "Willie G's Seafood & Steaks - Galveston",
    "Grotto - Galveston",
    "Landry's - San Luis",
    "Rainforest Cafe - Galveston",
    "Joe's Crab Shack - Galveston",
    "Brick House - Galveston"
  ];

  return (
    <>
    <div className="offer">
      <h1>20% Discount on Selected Restaurants</h1>
      <p>Enjoy a 20% discount on the following restaurants:</p>
      <ul>
        {restaurants.map((restaurant, index) => (
          <li key={index}>-{restaurant}</li>
        ))}
      </ul>
      <p>Contact the restaurant directly for more information.</p>
    </div>
    </>
  );
};

export default Offer;
