import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headerpart from "./components/Headerpart";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Doctorspecialisation from "./components/Doctorspecialisation";
import SpecificDoctordetails from "./components/SpecificDoctordetails";
import Bookingform from "./components/Bookingform";
import Doctordetailsspecificfordoctor from "./components/Doctordetailsspecificfordoctor";
import Doctoreditpart from "./components/Doctoreditpart";
import Patientbookingdetails from "./components/Patientbookingdetails";
import Appointmentbooking from "./components/Appointmentbooking";
import Productdisplaying from "./components/Productdisplaying";
import Productcategories from "./components/Productcategories";
import Cartdetails from "./components/Cartdetails";
import Admindoctoraddingpart from "./components/Admindoctoraddingpart";
import Adminproductaddingpert from "./components/Adminproductaddingpert";


function App() {
  return (
    <>
      <Router>
        <Headerpart />
        <Routes>
          <Route>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route
              exact
              path="/Doctors/:specialisation"
              element={<Doctorspecialisation />}
            />
            <Route
              exact
              path="/Specificdoctor/:userId"
              element={<SpecificDoctordetails />}
            />
            <Route
              exact
              path="/Appointmentbooking/:userId"
              element={<Bookingform />}
            />
            <Route
              exact
              path="/doctorsoecificdetails"
              element={<Doctordetailsspecificfordoctor />}
            />
            <Route
              exact
              path="/doctoreditpart/:userId"
              element={<Doctoreditpart />}
            />
            <Route
              exact
              path="/patientbookingdetails"
              element={<Patientbookingdetails />}
            />
            <Route
              exact
              path="/booingappointment"
              element={<Appointmentbooking />}
            />

            <Route
              exact
              path="/booingappointment"
              element={<Appointmentbooking />}
            />
            <Route
              exact
              path="/productdisplaying"
              element={<Productdisplaying />}
            />
            <Route
              exact
              path="/productcatogories/:catogeries"
              element={<Productcategories />}
            />
            <Route exact path="/cart" element={<Cartdetails />} />
            <Route
              exact
              path="/admindetailaddingpart"
              element={<Admindoctoraddingpart />}
            />
            <Route
              exact
              path="/Adminproductaddingpert"
              element={<Adminproductaddingpert />}
            />
          
            {/* <Route exact path="/Dermatologist" element={<Dermatologist />} />
            <Route exact path="/Gynecologist" element={<Gynecologist />} />
            <Route exact path="/GeneralPractitioner" element={<GeneralPractitioner />} />
            <Route exact path="/Neurologist" element={<Neurologist />} />
            <Route exact path="/Oncologist" element={<Oncologist />} />
            <Route exact path="/Pediatrician" element={<Pediatrician />} />
            <Route exact path="/Psychiatrist" element={<Psychiatrist />} /> */}
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
