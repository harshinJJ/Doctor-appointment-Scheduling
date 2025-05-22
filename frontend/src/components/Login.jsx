import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [formError, setFormError] = useState({});

  // const [isSubmit, setIsSubmit] = useState(false);
  console.log(formError);
  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
    // setInput({...input,[name]:value})
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    setFormError(formValidate(input));

    axios
      .post("http://localhost:8080/login/signin", input)
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
        sessionStorage.setItem("token", data.data.token);
        // localStorage.setItem("username", JSON.stringify(data.data.logindata));
        sessionStorage.setItem("username", data.data.logindata.email);
        sessionStorage.setItem("userid", data.data.logindata._id);
        sessionStorage.setItem("role", data.data.logindata.role);

        // var logdata = localStorage.getItem("username");
        // console.log(logdata);

        navigate("/");
        window.location.reload();
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

    // setIsSubmit(true);
  };

  function formValidate(values) {
    var error = {};

    if (values.email === "") {
      error.email = "enter a email";
    }
    if (values.password === "") {
      error.password = "invalid password address cant be empty";
    }

    return error;
  }

  return (
    <div className="backcolor">
      <section class="formsection">
        <div class="form-container">
          <ToastContainer />
          <p class="title">LOGIN</p>
          <form class="form" onSubmit={handlesubmit}>
            <div class="input-group">
              <label for="username">Email</label>
              <input
                type="email"
                style={{ borderColor: formError.email ? "red" : "" }}
                name="email"
                id="email"
                placeholder=""
                class="inputsform"
                onChange={handlechange}
                onClick={() => {
                  setFormError({ ...formError, email: "" });
                }}
              />
            </div>
            <div class="input-group">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                style={{ borderColor: formError.password ? "red" : "" }}
                id="password"
                placeholder=""
                class="inputsform"
                onChange={handlechange}
                onClick={() => {
                  setFormError({ ...formError, password: "" });
                }}
              />
            </div>
            <br />

            <button class="sign">Sign in</button>
          </form>
          <br />
          <p class="signup">
            Don't have an account?
            <a rel="noopener noreferrer" href="/Signup" class="">
              Sign up
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
