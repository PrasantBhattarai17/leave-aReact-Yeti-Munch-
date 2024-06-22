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
   const word=cuisines.join(",");

    return (
      <div className="p-2 m-1 flex flex-col bg-[#ffff] w-[250px] h-[410px] border-2 items-center shadow-lg hover:bg-slate-200 ">
        <img className="w-[90%] " alt={name} src={CDN+cloudinaryImageId}/>
        <h2 className="text-2xl">{name}</h2>
        <h3 className="text-lg">{locality}</h3>
        <h6 className="text-sm w-full text-center whitespace-normal break-words overflow-hidden ">{word}</h6>
        <h4>{avgRating} stars</h4>
    </div>
    );
  
};
 export default Restro;  