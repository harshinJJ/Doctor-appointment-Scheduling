import React, { useEffect, useState } from "react";
import "./Doctordetailsspecificfordoctor.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const Doctordetailsspecificfordoctor = () => {
  const token = sessionStorage.getItem("token");
  const datasession = sessionStorage.getItem("username");
  console.log(datasession);
  const [specdoctordetails, setSpecdoctordetails] = useState({});
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/specialisation/specificdoctordetails/${datasession}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((data) => {
        console.log(data.data.data);
        setSpecdoctordetails(data.data.data[0]);
      });
  }, []);

  return (
    <div className="backcolo">
      <br />
      <br />

      <h1 className="headi" name="specialisation">
        Details
      </h1>
      <br />
      <br />

      <section>
        <div className="container text-center">
          <div className="row colposi">
            {/* <% for(i=0; i<donerdetails.length; i++) { %> */}
            <div className="col-4 textposi">
              <div className="card-client">
                <p className="name-client spcolor" name="name">
                  {specdoctordetails.doctorname}
                </p>
                <br />
                <span className="othdet" name="place">
                  {specdoctordetails.place}
                </span>
                <span className="othdet" name="place">
                  {specdoctordetails.specialisation}
                </span>
                <span className="othdet" name="place">
                  {specdoctordetails.phonenumber}
                </span>
                <span className="othdet" name="email">
                  {specdoctordetails.email}
                </span>
                <br />
                {/* <Link to={`/Specificdoctor/${doctordetails._id}`}>
                  <button className="button2">Edit</button> </Link>*/}
                <Link to={`/doctoreditpart/${specdoctordetails._id}`}>
                  <button className="button2">Edit</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctordetailsspecificfordoctor;
