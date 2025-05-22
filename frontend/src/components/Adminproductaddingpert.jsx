import React, { useRef, useState } from "react";
import axios from "axios";
import Productcard from "./Productcard";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Adminproductaddingpert = () => {
  const token = sessionStorage.getItem("token");

  const [input, setInput] = useState({
    name: "",
    price: "",
    catogeries: "",
    photo: "",
  });

  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const { userId } = useParams();

  const handlesubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8080/products/productsdetailsuploading`, input, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        toast.success("Product Added", {
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

 
  return (
    <div className="backcolor4">
      <ToastContainer />
      <section class="formsection">
        <div class="form-container">
          <p class="title">Appointment Booking</p>
          <form class="form" onSubmit={handlesubmit}>
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
                Price
              </label>
              <input
                type="email"
                name="price"
                id="email"
                placeholder=""
                required
                class="inputsform"
                onChange={handlechange}
              />
            </div>
            <div class="input-group">
              <label for="number" class="labels">
              catogeries
              </label>
              <select
                id="countrySelect"
                class="inputsform"
                name="catogeries"
                onChange={handlechange}
              >
                <option value="">----------Select----------</option>
                <option value="Baby Care">Baby Care</option>
                <option value="Personal Care">Personal Care</option>
                <option value="Health Suppliments">Health Suppliments</option>
                <option value="Skin Care">Skin Care</option>
                <option value="Women Care">Women Care</option>
                <option value="Protien Powder">Protien Powder</option>
                <option value="Health Devices">Health Devices</option>
              </select>
            </div>

            <br />

            <button class="sign1">Add Product</button>
          </form>
          <br />
        </div>
      </section>
    </div>
  );
};

export default Adminproductaddingpert;
