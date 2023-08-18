import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Contacts from "./Components/General/Contacts";
import MaintainancePage from "./Components/Maintainance/MaintainancePage";
import AuditReport from "./Components/Use Cases/AuditReport";
import ExecutiveCommittee from "./Components/Use Cases/ExecutiveCommittee";
import Nirdesh from "./Components/Use Cases/Nirdesh";
import Pravartak from "./Components/Use Cases/Pravartak";
import RegistrationCertificate from "./Components/Use Cases/RegistrationCertificate";
import SecretaryReport from "./Components/Use Cases/SecretaryReport";
import SuggestionForm from "./Components/Use Cases/SuggestionForm";
import Updates from "./Components/Use Cases/Updates";
import UseFulLinks from "./Components/Use Cases/UseFulLinks";
import "./Components/Homepage/Homepage.css";
import LeftSideMenu from "./Components/General/LeftSideMenu";
import RightSideMenu from "./Components/General/RightSIdeMenu";
import Homenavbar from "./Components/Homepage/Homenavbar";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/General/Footer";
import Ahmednagar from "./Components/SubCenters/Ahmednagar/Ahmednagar";
import SubCenter from "./Components/SubCenters/SubCenter";
import Bhandara from "./Components/SubCenters/Bhandara/Bhandara";
import Pune from "./Components/SubCenters/Pune/Pune";
import Nashik from "./Components/SubCenters/Nashik/Nashik";
import Satara from "./Components/SubCenters/Satara/Satara";
import Buldhana from "./Components/SubCenters/Buldhana/Buldhana";
import Dhule from "./Components/SubCenters/Dhule/Dhule";
import Malegaon from "./Components/SubCenters/Malegaon/Malegaon";
import NoPravartak from "./Components/Maintainance/NoPravartak";
import Thane from "./Components/SubCenters/Thane/Thane";
import Raigad from "./Components/SubCenters/Panvel Raigad/Raigad";
import Panvel from "./Components/SubCenters/Panvel Raigad/Panvel";
import AdminPage from "./Components/Admin/AdminPage";
import LoginForm from "./Components/Admin/LoginForm";
import { useSelector } from "react-redux";
import AdminNavbar from "./Components/Admin/AdminNavbar";

export const App = () => {
  const navigate = useNavigate();
  const loginStatus = useSelector((state) => state.login);
  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div>
      <div>
        {!loginStatus && <Homenavbar />}
        {loginStatus && <AdminNavbar />}
        <div style={{ paddingTop: "20px" }} className="container-fluid">
          <div className="row center">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 center">
              <LeftSideMenu />
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-6 center">
              <Routes basename="/krutishil.org">
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

                <Route path="/adminPage" element={<AdminPage />}></Route>

                <Route path="/adminlogin" element={<LoginForm />}></Route>

                <Route path="/noPravartak" element={<NoPravartak />}></Route>

                <Route path="/subCenter" element={<SubCenter />}></Route>

                <Route
                  path="/subCenter/Ahmednagar"
                  element={<Ahmednagar />}
                ></Route>

                <Route
                  path="/subCenter/Bhandara"
                  element={<Bhandara />}
                ></Route>

                <Route path="/subCenter/Pune" element={<Pune />}></Route>

                <Route path="/subCenter/Nashik" element={<Nashik />}></Route>

                <Route path="/subCenter/Satara" element={<Satara />}></Route>

                <Route
                  path="/subCenter/Buldhana"
                  element={<Buldhana />}
                ></Route>

                <Route path="/subCenter/Dhule" element={<Dhule />}></Route>

                <Route
                  path="/subCenter/Malegaon"
                  element={<Malegaon />}
                ></Route>

                <Route path="/subCenter/Thane" element={<Thane />}></Route>

                <Route path="/subCenter/Raigad" element={<Raigad />}></Route>

                <Route path="/subCenter/Panvel" element={<Panvel />}></Route>

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
