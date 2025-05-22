import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CgShoppingCart } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";

import "./Headerpart.css";
import { Link } from "react-router-dom";

const Headerpart = () => {
  const role = sessionStorage.getItem("role");
  const handleonclick = () => {
    sessionStorage.clear("username");
    sessionStorage.clear("role");
  };
  return (
    <>
      {role == 1 ? (
        <Navbar collapseOnSelect expand="lg" className="navstyle navtextstyle">
          <Container className="">
            <Navbar.Brand href="/">MedConnect</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                {/* <NavDropdown title="Specialisation" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/Doctors/Cardiology">
                    Cardiologist
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Doctors/Dermatologist">
                    Dermatologist
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Doctors/GeneralPractitioner">
                    General Practitioner
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Doctors/Gynecologist">
                    Gynecologist
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Doctors/Neurologist">
                    Neurologist
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Doctors/Oncologist">
                    Oncologist
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Doctors/Pediatrician">
                    Pediatrician
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Doctors/Psychiatrist">
                    Psychiatrist
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/booingappointment">
                    Book An Appointment
                  </NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link href="/">Home</Nav.Link>
                {/* <Nav.Link href="#pricing">Contact</Nav.Link> */}
                <Nav.Link href="/Adminproductaddingpert">Product Adding</Nav.Link>
                <Nav.Link href="/admindetailaddingpart">Add</Nav.Link>
                <Nav.Link href="/" onClick={handleonclick}>
                  <IoIosLogOut />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : role == 2 ? (
        <Navbar collapseOnSelect expand="lg" className="navstyle navtextstyle">
          <Container className="">
            <Navbar.Brand href="/">MedConnect</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/doctorsoecificdetails">
                    Doctor details
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/" onClick={handleonclick}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#pricing">
                  <MdContactSupport />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : role == 3 ? (
        <Navbar collapseOnSelect expand="lg" className="navstyle navtextstyle">
          <Container className="">
            <Navbar.Brand href="/">MedConnect</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <NavDropdown title="Specialisation" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/Doctors/Cardiology">
                    Cardiologist
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Doctors/Dermatologist">
                    Dermatologist
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Doctors/GeneralPractitioner">
                    General Practitioner
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Doctors/Gynecologist">
                    Gynecologist
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Doctors/Neurologist">
                    Neurologist
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Doctors/Oncologist">
                    Oncologist
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Doctors/Pediatrician">
                    Pediatrician
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Doctors/Psychiatrist">
                    Psychiatrist
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/booingappointment">
                    Book An Appointment
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/">Home</Nav.Link>

                <Nav.Link href="/productdisplaying">Shop</Nav.Link>

                <Nav.Link href="/patientbookingdetails">
                  Booking details
                </Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
                <Nav.Link href="/cart">
                  <CgShoppingCart />
                </Nav.Link>

                <Nav.Link href="/" onClick={handleonclick}>
                  <IoIosLogOut />
                </Nav.Link>

                <Link to={"/booingappointment"}>
                  <button className="button2"> Book An Appointment</button>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar collapseOnSelect expand="lg" className="navstyle navtextstyle">
          <Container className="">
            <Navbar.Brand href="#home">MedConnect</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
                <Nav.Link href="/Signup">SignUp</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default Headerpart;
