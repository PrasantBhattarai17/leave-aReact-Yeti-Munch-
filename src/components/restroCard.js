import { CDN } from "./utils/constants";

const Restro=(props)=>{
    const { Resdata } = props;
  
    const {
      cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        locality
      } = Resdata.info;
  

    return (
      <div className="card">
        <img alt={name} src={CDN+cloudinaryImageId}/>
        <h2>{name}</h2>
        <h3>{locality}</h3>
        <h5>{cuisines.join(",")}</h5>
        <h4>{avgRating} stars</h4>
    </div>
    );
  
};
 export default Restro;  