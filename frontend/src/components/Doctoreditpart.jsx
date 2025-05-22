import React, { useEffect, useState } from "react";
import "./Doctoreditpart.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Doctoreditpart = () => {
  const datasession = sessionStorage.getItem("username");

  const [docdetails, setDocdetails] = useState({});
  const [inputupdate, setInputupdate] = useState({
    email: "",
    phone: "",
    name: "",
    experience: "",
    qualification: "",
    place: "",
    specialisation: "",
  });
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/specialisation/specificdoctordetails/${datasession}`
      )
      .then((data) => {
        console.log(data.data.data);
        setDocdetails(data.data.data[0]);
      });
  }, []);

  const handleonchange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputupdate((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(inputupdate);
  };
  const handleonsubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `http://localhost:8080/editor/editdoctor/${datasession}`,
        inputupdate
      )
      .then((data) => {
        toast.success("updation successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        sessionStorage.setItem("username", data.data.logindata.email);
        sessionStorage.setItem("role", data.data.logindata.role);


      })
      .catch((err) => {
        toast.error(err.response.data.message, {
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
  };

  return (
    <div className="backcolor5">
      <section class="formsection">
        <div class="form-container">
          <p class="title">Edit Your Details</p>
          <ToastContainer />
          <form class="form" onSubmit={handleonsubmit}>
            <div class="input-group">
              <label for="name" class="labels">
                Doctor name
              </label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                class="inputsform"
                placeholder={docdetails.name}
                onChange={handleonchange}
              />
            </div>
            <div class="input-group">
              <label for="email" class="labels">
                Doctor Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder={docdetails.email}
                required
                class="inputsform"
                onChange={handleonchange}
              />
            </div>
            <div class="input-group">
              <label for="username" class="labels">
                Doctor Phone
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                required
                placeholder={docdetails.phonenumber}
                class="inputsform"
                onChange={handleonchange}
              />
            </div>
            <div class="input-group">
              <label for="place" class="labels">
                Doctor Place
              </label>
              <input
                type="text"
                name="place"
                id="place"
                placeholder={docdetails.place}
                class="inputsform"
                onChange={handleonchange}
              />
            </div>
            <div class="input-group">
              <label for="email" class="labels">
                experience
              </label>
              <input
                type="text"
                name="experience"
                id="experience"
                placeholder={docdetails.experience}
                required
                class="inputsform"
                onChange={handleonchange}
              />
            </div>
            <div class="input-group">
              <label for="email" class="labels">
                qualification
              </label>
              <input
                type="text"
                name="qualification"
                id="qualification"
                placeholder={docdetails.qualification}
                required
                class="inputsform"
                onChange={handleonchange}
              />
            </div>

            <div class="input-group">
              <label for="btype" class="labels">
                specialisation
              </label>
              <input
                type="text"
                name="specialisation"
                id="specialisation"
                required
                placeholder={docdetails.specialisation}
                class="inputsform"
                onChange={handleonchange}
              />
            </div>

            <br />

            <button class="sign1">submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Doctoreditpart;
