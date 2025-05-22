import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useParams } from "react-router-dom";

import "./Productdisplaying.css";
import axios from "axios";
import Productcard from "./Productcard";

const Productdisplaying = () => {
  const [productid, setProductid] = useState("");
  const id = sessionStorage.getItem("userid");
  console.log(id);
  console.log(productid);
  const token = sessionStorage.getItem("token");
  const [products, setProducts] = useState([]);
  console.log(products);
  const handleclick = (productid) => {
    axios
      .post(
        `http://localhost:8080/cart/productaddingtocart/${productid}/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((data) => {
        console.log(data);
        toast.success("added to cart", {
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
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/products/productdisplaying", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setProducts(data.data.productdisplay);
      });
  }, []);
  const Specilaisation = [
    { Specilaisation: "Medicine" },
    { Specilaisation: "Baby Care" },
    { Specilaisation: "Personal Care" },
    { Specilaisation: "Health Suppliments" },
    { Specilaisation: "Skin Care" },
    { Specilaisation: "Women Care" },
    { Specilaisation: "Protien Powder" },
    { Specilaisation: "Health Devices" },
  ];

  return (
    <section>
      <section className="designpart">
        <section className="designpart1">
          <Container>
            <Row className="colposi">
              <Col className="pcolposi">
                <div className="phead1">30% offer</div>
                <div className="phead2"> Pharamccutical Productds </div>
                <ToastContainer />
                <div>
                  <br />
                  <button className="button1"> Shop Now</button>
                </div>
              </Col>
              <Col>
                <img className="img6" src="/images/8.png" alt="" />
              </Col>
            </Row>
          </Container>
        </section>
      </section>
      <br />

      <section>
        <div class="container text-center">
          <div class="row colposi">
            {Specilaisation.map((data) => (
              <div class="col-3 textposi">
                <div class="card-client1">
                  <p class="name-client spcolor1" name="name">
                    {data.Specilaisation}
                  </p>

                  <br />
                  <Link to={`/productcatogories/${data.Specilaisation}`}>
                    <button className="button2">Shop</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <br />

      <section>
        <span class="productheading">PRODUCTS</span>
        <br />
        <section>
          <div class="container text-center">
            <div class="row colposi">
              {products.map((data) => (
                <div class="col-4 textposi">
                  <div class="card4">
                   <Productcard productData={data} handleclick={handleclick}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Productdisplaying;
