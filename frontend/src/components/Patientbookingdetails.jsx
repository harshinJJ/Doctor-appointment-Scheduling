import React, { useEffect, useState } from "react";
import "./Patientbookingdetails.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Patientbookingdetails = () => {
  const token = sessionStorage.getItem("token");

  const patientdata = sessionStorage.getItem("username");

  const [bookingdetails, setBookingdetails] = useState([]);
  console.log(bookingdetails);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/appointment/bookingdetails/${patientdata}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        console.log(data);
        setBookingdetails(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="backcolo">
      <br />
      <br />

      <h1 className="headi" name="specialisation">
        Booking Details
      </h1>
      <br />
      <br />

      <section>
        <div className="container text-center">
          <div className="row colposi">
            {bookingdetails.map((data) => (
            <div className="col-4 textposi">
              <div className="card-client">
                <p className="name-client spcolor" name="name"></p>
                <br />
                <span className="othdet" name="place">
                  Patient name: {data.name}
                </span>
                <span className="othdet" name="place">
                  Doctor name: {data.doctorname}
                </span>
                <span className="othdet" name="place">
                  Department: {data.doctorspecialisation}
                </span>
                <span className="othdet" name="timing">
                  Consulting Time {data.timing}
                </span>
                <span className="othdet" name="email"></span>
                <br />
              </div>
            </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Patientbookingdetails;
