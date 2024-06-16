//Created using class based component


import React from "react";
 
class Franchisee extends React.Component{
    constructor(props){
        super(props);
     this.state={
        name:"hotel heaven"
     };
    
    };
  render(){
 return   ( 
    <div className="services">
        
 <h1>Our services</h1>
 <h3>The franchisees connected to us :</h3>
 <h4>name:{this.props.name}</h4>
 </div>
);

};
};

export default Franchisee;