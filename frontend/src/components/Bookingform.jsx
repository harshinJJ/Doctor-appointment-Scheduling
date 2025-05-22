import React, { useEffect, useRef, useState } from "react";
import "./Bookingform.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Bookingform = () => {
  const token = sessionStorage.getItem("token");

  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    timing: "",
  });

  const [specificdoc, setSpecificdoc] = useState({});
  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const { userId } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/specialisation/specificdoctor/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setSpecificdoc(data.data.data);
      });
  });
  const handlesubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8080/appointment/scheduling/${userId}`, input, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        toast.success("Booking successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((error) => {
        toast.error(error.response.data.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
    console.log(input);
  };

  const dateInputRef = useRef(null);
  return (
    <div className="backcolor4">
      <ToastContainer />
      <section class="formsection">
        <div class="form-container">
          <p class="title">Appointment Booking</p>
          <form class="form" onSubmit={handlesubmit}>
            <span className="bookdoctext">Doctorname: {specificdoc.name}</span>
            <br />
            <span className="bookdoctext">
              Specilaisation:{specificdoc.specialisation}{" "}
            </span>
            <br />
            <br />
            <div class="input-group">
              <label for="name" class="labels">
                Name
              </label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                placeholder=""
                class="inputsform"
                onChange={handlechange}
              />
            </div>
            <div class="input-group">
              <label for="email" class="labels">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder=""
                required
                class="inputsform"
                onChange={handlechange}
              />
            </div>
            <div class="input-group">
              <label for="number" class="labels">
                Phone
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                required
                placeholder=""
                class="inputsform"
                onChange={handlechange}
              />
            </div>
            <div class="input-group">
              <label class="labels">Gender</label>

              <select
                id="countrySelect"
                class="inputsform"
                name="gender"
                onChange={handlechange}
              >
                <option value="">----------Select----------</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="none">None</option>
              </select>
            </div>
            <div class="input-group">
              <label class="labels">DOB</label>
              <input
                type="date"
                name="dob"
                class="inputsform"
                onChange={handlechange}
                ref={dateInputRef}
              />
            </div>
            <div class="input-group">
              <label class="labels">Timing</label>

              <select
                id="countrySelect"
                name="timing"
                class="inputsform"
                onChange={handlechange}
              >
                <option value="">----------Select----------</option>
                <option value="9-10">9am-10am</option>
                <option value="12-1">12am-1pm</option>
                <option value="4-5">4am-5pm</option>
              </select>
            </div>
            <br />

            <button class="sign1">Book</button>
          </form>
          <br />
        </div>
      </section>
    </div>
  );
};

export default Bookingform;
