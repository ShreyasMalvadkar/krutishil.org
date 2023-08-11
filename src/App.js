import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Contacts from "./Components/General/Contacts";
import MaintainancePage from "./Components/Maintainance/MaintainancePage";
import AdminCorner from "./Components/Use Cases/AdminCorner";
import AuditReport from "./Components/Use Cases/AuditReport";
import ExecutiveCommittee from "./Components/Use Cases/ExecutiveCommittee";
import LoginForm from "./Components/Use Cases/LoginForm";
import Nirdesh from "./Components/Use Cases/Nirdesh";
import Pravartak from "./Components/Use Cases/Pravartak";
import RegistrationCertificate from "./Components/Use Cases/RegistrationCertificate";
import SecretaryReport from "./Components/Use Cases/SecretaryReport";
import SuggestionForm from "./Components/Use Cases/SuggestionForm";
import Updates from "./Components/Use Cases/Updates";
import UseFulLinks from "./Components/Use Cases/UseFulLinks";
// import ImageSlides from "./Components/Homepage/ImageSlides";
import "./Components/Homepage/Homepage.css";
import LeftSideMenu from "./Components/General/LeftSideMenu";
import RightSideMenu from "./Components/General/RightSIdeMenu";
import Homenavbar from "./Components/Homepage/Homenavbar";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/General/Footer";
import WelcomeModal from "./Components/General/WelcomeModal";

export const App = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour in place of 'smooth' */
    });
  }, []);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  setTimeout(function () {
    setShow(false);
  }, 1200);

  return (
    <div>
      <div onClick={handleClose}>
        <Homenavbar />
        <div style={{ paddingTop: "20px" }} className="container-fluid">
          <div className="row center">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 center">
              <LeftSideMenu />
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-6 center">
              <Routes>
                <Route path="/" element={<Homepage />}></Route>

                <Route
                  path="/RegistrationCertificate"
                  element={<RegistrationCertificate />}
                ></Route>

                <Route path="/Contacts" element={<Contacts />}></Route>

                <Route
                  path="/Executivecommittee"
                  element={<ExecutiveCommittee />}
                ></Route>

                <Route
                  path="/Secretaryreport"
                  element={<SecretaryReport />}
                ></Route>

                <Route path="/pravartak" element={<Pravartak />}></Route>

                <Route path="/nirdesh" element={<Nirdesh />}></Route>

                <Route path="/auditreports" element={<AuditReport />}></Route>

                <Route path="/usefullink" element={<UseFulLinks />}></Route>

                <Route path="/updates" element={<Updates />}></Route>

                <Route
                  path="/givesuggestions"
                  element={<SuggestionForm />}
                ></Route>

                <Route path="/adminlogin" element={<LoginForm />}></Route>

                <Route path="/admincorner" element={<AdminCorner />}></Route>

                <Route path="/mtn" element={<MaintainancePage />}></Route>
              </Routes>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 center">
              <RightSideMenu />
            </div>
          </div>
        </div>
        <Footer />

        {/* <WelcomeModal show={show} /> */}
      </div>
    </div>
  );
};
