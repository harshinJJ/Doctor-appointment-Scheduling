import React, { useEffect, useState } from "react";
import "./Specialisation.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Doctorcard from "./Doctorcard";

const Doctorspecialisation = () => {
  const token = sessionStorage.getItem("token");
  const { specialisation } = useParams();
  console.log(specialisation);
  const [doctordetails, setDoctordetails] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/specialisation/doctor/${specialisation}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        console.log(data);
        setDoctordetails(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="backcolo">
      <br />
      <br />

      <h1 class="headi" name="specialisation">
        {specialisation}
      </h1>
      <br />
      <br />

      <section>
        <div class="container text-center">
          <div class="row colposi">
            {doctordetails.map((data) => (
              <div class="col-4 textposi">
                <Doctorcard Doctordetails={data} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctorspecialisation;
