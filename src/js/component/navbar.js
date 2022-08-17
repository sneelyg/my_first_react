import React from "react";

function Navbar() {
  return (<nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Welcome</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-auto" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Just</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Trying</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Some</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ">Bootstrap</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
