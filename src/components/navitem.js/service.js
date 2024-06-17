import React from "react";
import Franchisee from "./franchiseClass";

class Services extends React.Component{
    constructor(props){
        super(props);
     this.state={
        cloudinaryImgId:"",
        name:"",
        location:"",
        rating:0,
        cuisines:"",
        cost42:""
     };
    };

    async componentDidMount(){ 
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=10575&catalog_qa=undefined&submitAction=ENTER");
         const json = await response.json();
        //  console.log(json);
         console.log(json?.data?.cards[2]?.card?.card);
         const resList=json?.data?.cards[2]?.card?.card;
         console.log(resList.info);

         this.setState({
            cloudinaryImgId:resList.info.cloudinaryImageId,
            name:resList.info.name,
            location:resList.info.areaName+","+resList.info.locality+" ,"+resList.info.city,
            rating:resList.info.avgRating,
            cuisines:resList.info.cuisines.join(","),
            cost42:resList.info.costForTwo

         });
     };

    render(){
    return <Franchisee  {...this.state} />;
     };
};


export default Services;
