// index.js or AppLayout.js
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Restro from "./components/restroCard";
import Footer from "./components/Footer";
import Body from "./components/body";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="hoot">
      <Body/>
      </div>
      <Footer />
    </>
  );
};

root.render(<AppLayout />);
