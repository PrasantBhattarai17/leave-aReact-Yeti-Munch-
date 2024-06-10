// Fetchy.js
const Fetchy = async () => {
    const response = await fetch(
      "https://allsetnow.com/api/address/v5/?sort_point=29.38385,+-94.9027&limit=100&offset=0"
    );
    const json = await response.json();
    return json;
  };
  
  export default Fetchy;
  