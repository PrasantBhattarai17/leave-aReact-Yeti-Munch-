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
        const response = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627");
         const json = await response.json();
        //  console.log(json);
         console.log(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
         const resList=json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;

         this.setState({
            cloudinaryImgId:resList[0].info.cloudinaryImageId,
            name:resList[0].info.name,
            location:resList[0].info.areaName+","+resList[0].info.locality,
            rating:resList[0].info.avgRating,
            cuisines:resList[0].info.cuisines.join(","),
            cost42:resList[0].info.costForTwo

         });
     };

    render(){
    return <Franchisee  {...this.state} />;
     };
};


export default Services;
