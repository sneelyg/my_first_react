import React from "react";

//include images into your bundle

import Card from "./card.js";
import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js"


//create your first component
const Home = () => {
  return (
    <div className="container-fluid">
		<Navbar/>
			<Jumbotron/>
      <div className="row">
      <Card url="https://media.istockphoto.com/photos/mini-robot-finger-point-picture-id1050049486?k=20&m=1050049486&s=612x612&w=0&h=tkNNfPfOhK6V-M8k_nsQcF4IHMI96_4zszg0dBP-Q94=" />
        <Card url="https://media.istockphoto.com/vectors/cute-white-robot-character-vector-vector-id1187576166?k=20&m=1187576166&s=612x612&w=0&h=q-REVReHr8QRzKQ_TRWGU7KTP6OBIgGh-zlg91-S-j0=" />
        <Card url="https://static.vecteezy.com/system/resources/previews/000/199/370/original/vector-robot-cheerful-isolated-on-blue-background-concept-illustration.jpg" />
        <Card url="https://media.istockphoto.com/photos/mini-robot-finger-point-picture-id1050049486?k=20&m=1050049486&s=612x612&w=0&h=tkNNfPfOhK6V-M8k_nsQcF4IHMI96_4zszg0dBP-Q94=" />
        <Card url="https://media.istockphoto.com/vectors/cute-white-robot-character-vector-vector-id1187576166?k=20&m=1187576166&s=612x612&w=0&h=q-REVReHr8QRzKQ_TRWGU7KTP6OBIgGh-zlg91-S-j0=" />
        <Card url="https://static.vecteezy.com/system/resources/previews/000/199/370/original/vector-robot-cheerful-isolated-on-blue-background-concept-illustration.jpg" />
     
      </div>
    </div>
  );
};

export default Home;



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
