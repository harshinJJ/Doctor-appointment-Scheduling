import React from 'react'
import "./Appointmentbooking.css";
import { Link, useParams } from "react-router-dom";

const Appointmentbooking = () => {
  const Specilaisation = [{Specilaisation: "Cardiology"},{Specilaisation: "Dermatologist"},{Specilaisation: "GeneralPractitioner"},{Specilaisation: "Gynecologist"},{Specilaisation: "Neurologist"},{Specilaisation: "Oncologist"},{Specilaisation: "Pediatrician"},{Specilaisation: "Psychiatrist"}]
  return (
    <div className="backcolor6">
    <br />
    <br />

    <h1 class="headi" name="specialisation">
      Department
    </h1>
    <br />
    <br />

    <section>
      <div class="container text-center">
        <div class="row colposi">
          {Specilaisation.map((data) => (
            <div class="col-3 textposi">
              <div class="card-client">
                <p class="name-client spcolor" name="name">
                  {data.Specilaisation}
                </p>

                <br />
                <Link to={`/Doctors/${data.Specilaisation}`}>
                  <button className="button2">Available Doctors</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
  )
}

export default Appointmentbooking