import { useState } from "react"; 

 

const Header=()=>{
  const [searchTXt,setSearchTXt]=useState("Hungry? Food or Drinks?");
    return(
      <div className="header">
     <img alt="logo" src="https://trademarks.justia.com/media/og_image.php?serial=73308054"/>
    <input type="text" placeholder="Search.." className="searchh" value={searchTXt} onChange={(e)=>setSearchTXt(e.target.value)}/>
    <button/>
      <ul className="lists">
     <li>Offers</li>
     <li>Sign In</li>
     <li>Cart</li>
     </ul>
     </div>
    );
}

export default Header;