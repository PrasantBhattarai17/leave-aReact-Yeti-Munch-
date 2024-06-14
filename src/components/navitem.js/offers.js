import React from "react";
import Header from "../header";
import Footer from "../footer";

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
    <Header/>
    <div className="offer">
      <h1>20% Discount on Select Restaurants</h1>
      <p>Enjoy a 20% discount on the following restaurants:</p>
      <ul>
        {restaurants.map((restaurant, index) => (
          <li key={index}>-{restaurant}</li>
        ))}
      </ul>
      <p>Contact the restaurant directly for more information.</p>
    </div>
    <Footer/>
    </>
  );
};

export default Offer;
