import React, { useEffect, useState } from "react";
import "./Specificdoctordetails.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const SpecificDoctordetails = () => {
  const { userId } = useParams();
  const token = sessionStorage.getItem("token");
  const [specificdoctordetail, setSpecificdoctordetail] = useState({});
  console.log(specificdoctordetail);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/specialisation/specificdoctor/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        console.log(data);
        setSpecificdoctordetail(data.data.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);
  return (
    <div className="backcolor2">
      <div class="card-client2">
        <p class="name-client spcolor"> {specificdoctordetail.name} </p>
        <br />
        <span class="othdet"> {specificdoctordetail.place} </span>
        <span class="othdet"> {specificdoctordetail.specialisation} </span>
        <span class="othdet"> {specificdoctordetail.phone} </span>
        <span class="othdet"> {specificdoctordetail.email} </span>
        <span class="othdet"> {specificdoctordetail.phonenumber} </span>
        <br />
        <Link to={`/Appointmentbooking/${specificdoctordetail._id}`}>
          <button className="button2">Schedule</button>
        </Link>
      </div>
    </div>
  );
};

export default SpecificDoctordetails;
