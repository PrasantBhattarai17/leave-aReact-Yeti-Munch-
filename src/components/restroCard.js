const Restro=(props)=>{
    const { Resdata } = props;
  
    const {
      image,
        title,
        category,
        price_rating,
      } = Resdata?.data;
  

    return (
      <div className="card">
        <img alt={title} src={image}/>
        <h2>{title}</h2>
        <h3>{category}</h3>
        <h4>{price_rating} stars</h4>
    </div>
    );
  
};
 export default Restro;  