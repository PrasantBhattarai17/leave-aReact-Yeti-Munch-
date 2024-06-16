import React from "react";
import Franchisee from "./franchiseClass";


class Services extends React.Component{

    async componentDidMount(){ 
        const response = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627");
         const json = await response.json();
         console.log(json);
         console.log(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
         const resList=json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;

         this.setState({
            name:resList[1].info.name
         });
     };

    render(){
    return <Franchisee  props={this.name} />;
     };
};


export default Services;
