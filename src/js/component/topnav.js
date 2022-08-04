import React from "react";

const Topnav = () =>{
    return (
       
<div className="topnav" id="myTopnav">
  
  <a href="#home"  style={{float:'left', 'margin-left':'25px'}}className="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" className="icon" onclick="myFunction()">
    <i className="fa fa-bars"></i>
  </a>
</div>


    )
}

export default Topnav;