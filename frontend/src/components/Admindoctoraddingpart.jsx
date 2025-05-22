import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Admindoctoraddingpart = () => {
  const [check, setCheck] = useState(false);
  const userordoctorchange = (event) => {
    setCheck(event.target.checked);
  };
  const [docotorinput, setDoctorinput] = useState({
    email: "",
    password: "",
    phone: "",
    name: "",
    experience: "",
    qualification: "",
    place: "",
    specialisation: "",
    cpassword: "",
  });

  const [doctorformerror, setDoctorformError] = useState({});

  const doctorhandlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDoctorinput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const doctorhandlesubmit = (event) => {
    event.preventDefault();
    console.log(docotorinput);
    setDoctorformError(formvalidate(docotorinput));

    axios
      .post("http://localhost:8080/Doctor/doctorregister", docotorinput)
      .then((data) => {
        console.log(data);
        toast.success("registration successful", {
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

  function formvalidate(values) {
    var error = {};

    if (values.name === "") {
      error.name = "enter the name";
    }
    if (values.email === "") {
      error.email = "enter email";
    }
    if (values.password === "") {
      error.password = "password required";
    }
    if (values.specialisation === "") {
      error.specialisation = "cant be empty";
    }
    return error;
  }
  const [userinput, setUserinput] = useState({
    email: "",
    password: "",
    phone: "",
    name: "",
    place: "",
    cpassword: "",
  });
  const [userformerror, setUserformerror] = useState({});
  const userhandlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserinput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const userhandlesubmit = (event) => {
    event.preventDefault();
    console.log(userinput);
    setUserformerror(userformvalidate(userinput));

    axios
      .post("http://localhost:8080/Doctor/userregister", userinput)
      .then((data) => {
        console.log(data);
        toast.success("registration successful", {
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

  function userformvalidate(values) {
    var error = {};

    if (values.name === "") {
      error.name = "enter the name";
    }
    if (values.email === "") {
      error.email = "enter email";
    }
    if (values.password === "") {
      error.password = "password required";
    }
    return error;
  }
  return (
    <div className="backcolor1">
      <div className="onoff">
        <span className="docposi">User</span>
        <label class="switch">
          <input type="checkbox" onChange={userordoctorchange} />
          <span class="slider"></span>
        </label>

        <span className="userposi">Doctor</span>
      </div>

      {check ? (
        <section class="formsection">
          <div class="form-container">
            <p class="title">SIGN UP</p>
            <ToastContainer />
            <form
              class="form"
              action="/donate/tbdata"
              method="post"
              onSubmit={doctorhandlesubmit}
            >
              <div class="input-group">
                <label for="name" class="labels">
                  Doctor name
                </label>
                <br />
                <input
                  type="text"
                  name="name"
                  style={{ borderColor: doctorformerror.name ? "red" : "" }}
                  id="name"
                  placeholder=""
                  class="inputsform"
                  onChange={doctorhandlechange}
                  onClick={() => {
                    setDoctorformError({ ...doctorformerror, name: "" });
                  }}
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
                  style={{ borderColor: doctorformerror.email ? "red" : "" }}
                  placeholder=""
                  required
                  class="inputsform"
                  onChange={doctorhandlechange}
                  onClick={() => {
                    setDoctorformError({ ...doctorformerror, email: "" });
                  }}
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
                  placeholder=""
                  onChange={doctorhandlechange}
                  class="inputsform"
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
                  placeholder=""
                  onChange={doctorhandlechange}
                  class="inputsform"
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
                  placeholder=""
                  required
                  onChange={doctorhandlechange}
                  class="inputsform"
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
                  placeholder=""
                  required
                  onChange={doctorhandlechange}
                  class="inputsform"
                />
              </div>

              <div class="input-group">
                <label for="btype" class="labels">
                  specialisation
                </label>
                <select
                id="countrySelect"
                class="inputsform"
                name="specialisation"
                onChange={doctorhandlechange}
              >
                <option value="">----------Select----------</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="General Practitioner">General Practitioner</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Oncologist">Oncologist</option>
                <option value="Pediatrician">Pediatrician</option>
                <option value="Psychiatrist">Psychiatrist</option>
              </select>
              </div>
              <div class="input-group">
                <label for="password" class="labels">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder=""
                  class="inputsform"
                  onChange={doctorhandlechange}
                />
              </div>
              <div class="input-group">
                <label for="place" class="labels">
                  Confirm password
                </label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  placeholder=""
                  onChange={doctorhandlechange}
                  class="inputsform"
                />
              </div>
              <br />

              <button class="sign1">Sign Up</button>
            </form>
            <br />

            <p class="signin">
              Already have an account?
              <a rel="noopener noreferrer" href="/Login" class="">
                Sign in
              </a>
            </p>
          </div>
        </section>
      ) : (
        <section class="formsection">
          <div class="form-container">
            <p class="title">SIGN UP</p>
            <ToastContainer />
            <form
              class="form"
              action="/donate/tbdata"
              method="post"
              onSubmit={userhandlesubmit}
            >
              <div class="input-group">
                <label for="name" class="labels">
                  Full name
                </label>
                <br />
                <input
                  type="text"
                  name="name"
                  style={{ borderColor: userformerror.name ? "red" : "" }}
                  id="name"
                  placeholder=""
                  class="inputsform"
                  onChange={userhandlechange}
                  onClick={() => {
                    setUserformerror({ ...userformerror, name: "" });
                  }}
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
                  style={{ borderColor: userformerror.email ? "red" : "" }}
                  placeholder=""
                  required
                  class="inputsform"
                  onChange={userhandlechange}
                  onClick={() => {
                    setUserformerror({ ...userformerror, email: "" });
                  }}
                />
              </div>
              <div class="input-group">
                <label for="username" class="labels">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  required
                  placeholder=""
                  onChange={userhandlechange}
                  class="inputsform"
                />
              </div>
              <div class="input-group">
                <label for="place" class="labels">
                  Place
                </label>
                <input
                  type="text"
                  name="place"
                  id="place"
                  placeholder=""
                  onChange={userhandlechange}
                  class="inputsform"
                />
              </div>

              <div class="input-group">
                <label for="password" class="labels">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder=""
                  class="inputsform"
                  onChange={userhandlechange}
                />
              </div>
              <div class="input-group">
                <label for="place" class="labels">
                  Confirm password
                </label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  placeholder=""
                  onChange={userhandlechange}
                  class="inputsform"
                />
              </div>
              <br />

              <button class="sign1">Sign Up</button>
            </form>
            <br />

            <p class="signin">
              Already have an account?
              <a rel="noopener noreferrer" href="/Login" class="">
                Sign in
              </a>
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default Admindoctoraddingpart;
