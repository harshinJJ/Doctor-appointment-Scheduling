import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cartdetails.css";
import axios from "axios";

const Cartdetails = () => {
  const token = sessionStorage.getItem("token");
  const id = sessionStorage.getItem("userid");
  const [products, setProducts] = useState([]);
  const [totalprice, setTotalprice] = useState("");

  const handleclick = async (productid, data) => {
    try {
      axios
        .get(
          `http://localhost:8080/cart/addingquatityincart/${productid}`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((data) => {
          const quantity = data.data.itemquantity;
          const updatedproduct = products.map((item) => {
            return item._id === productid
              ? { ...item, product_qauantity: quantity }
              : item;
          });
          setProducts(updatedproduct);
          toast.success("1 item added", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleclick1 = (productid, data) => {
    try {
      axios
        .get(`http://localhost:8080/cart/deletionitem/${productid}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((data) => {
          const quantity = data.data.itemquantity;
          const updatedproduct = products.map((item) => {
            return item._id === productid
              ? { ...item, product_qauantity: quantity }
              : item;
          });
          setProducts(updatedproduct);
          toast.success("1 item removed", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    } catch (error) {}
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8080/cart/showingcart/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setProducts(data.data.itemsdetail);
        setTotalprice(data.data.totalprice);
        console.log(products);
        console.log(totalprice);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="bgcolo">
      <br />
      <br />
      <span class="productheading1">CART</span>
      <br />
      <br />
      <ToastContainer />
      <section>
        <div class="container text-center">
          <div class="row colposi">
            {products.map((data) => (
              <div class="col-4 textposi">
                <div class="card4">
                  <div class="card3-img">{data.product_photo}</div>
                  <div class="card3-info">
                    <p class="text3-title">{data.product_name}</p>

                    <p class="text3-body">Product description and details</p>
                    <span class="text3-body">
                      Quantity: {data.product_qauantity}
                    </span>
                  </div>
                  <div class="card3-footer">
                    <span class="text3-title">${data.product_price}</span>

                    <div className="buttons2">
                      <button
                        className="button8"
                        onClick={() => {
                          handleclick(data._id, data);
                        }}
                      >
                        +
                      </button>

                      <button
                        className="button8"
                        onClick={() => {
                          handleclick1(data._id, data);
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr />

      <div className="totalposi">
        <span className="total">total items : {products.length}</span>
        <br />
        <span className="total">Total price : {totalprice}</span>
      </div>
      <br />
    </div>
  );
};

export default Cartdetails;
