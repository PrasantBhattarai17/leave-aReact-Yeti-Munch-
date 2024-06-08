import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header=()=>{
  return(
    <div className="header">
   <img alt="logo" src="https://trademarks.justia.com/media/og_image.php?serial=73308054"/>
  <input type="text" placeholder="Search.." className="searchh"/>
    <ul className="lists">
   <li>Offers</li>
   <li>Sign In</li>
   <li>Cart</li>
   </ul>
   </div>
  );

};

  const Restro=()=>{
  return (
    <div className="card">
      <img alt="photo" src="https://media-cdn.tripadvisor.com/media/photo-s/11/44/e8/e9/the-burger-house-and.jpg"/>
      <hr/>
      <h2>Burger House</h2>
      <h3>Bhaktapur</h3>
      <h4>4.2 stars</h4>
    </div>
  );


  };


  const Footer=()=>{
   return <h3>Footer</h3>;
  };


const AppLayout=()=>{
  return(
   <>
   <Header/>
    <div className="hoot">
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
   <Restro/>
    </div >
   <Footer/>
   </>
      );
};



root.render(<AppLayout/>);