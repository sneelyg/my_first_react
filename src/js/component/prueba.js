import React from "react";

function Prueba() {
  return (
    <div className="card" style={{width: "18rem"}}>{/*<!--2 parentesis de llave  para mostrar q es JS y otro para demostrar que es un objeto-->*/}
      
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Prueba;