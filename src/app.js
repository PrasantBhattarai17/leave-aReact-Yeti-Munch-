// index.js or AppLayout.js
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Restro from "./components/RestroCard";
import Footer from "./components/Footer";
import Fetchy from "./components/Fetchy"; // Correct import

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  const [datap, setDatap] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Fetchy();
      setDatap(result);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="hoot">
        {datap.map((restaurant) => (
          <Restro key={restaurant.id} Resdata={restaurant} />
        ))}
      </div>
      <Footer />
    </>
  );
};

root.render(<AppLayout />);
