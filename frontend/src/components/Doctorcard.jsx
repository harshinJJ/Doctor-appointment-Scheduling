import React from "react";
import { Link } from "react-router-dom";

function Doctorcard({Doctordetails}) {
  return (
    <>
      <div class="card-client">
        <p class="name-client spcolor" name="name">
          {Doctordetails.name}
        </p>

        <br />
        <Link to={`/Specificdoctor/${Doctordetails._id}`}>
          <button className="button2">More details</button>
        </Link>
      </div>
    </>
  );
}

export default Doctorcard;
