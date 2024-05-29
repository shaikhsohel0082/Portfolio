import { NavLink, Outlet } from "react-router-dom";
import Styles from "./Navbar.module.css";
import { FaDownload } from "react-icons/fa";
export default function Navbar() {
  // alert("Switch to Dekstop Mode for better user experience");
  function handleDownload() {
    const pdfURL =
      "https://drive.google.com/file/d/1Wuv_oSr0N-N_7ZS4KXeGSd-_YX6gFR8p/view?usp=drivesdk";
    console.log(pdfURL);
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "sohel-shaikh-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <>
      <div className={Styles.navbarDiv}>
        <div className={Styles.navElement}>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "#fff" : "white",
                textShadow: isActive
                  ? "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff"
                  : null,
              };
            }}
          >
            Home
          </NavLink>
        </div>
        {/* <div>
          <NavLink
            to="/education"
            style={({ isActive }) => {
              return {
                color: isActive ? "#fff" : "white",
                textShadow: isActive
                  ? "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff"
                  : null,
              };
            }}
          >
            Education
          </NavLink>
        </div> */}
        <div>
          <NavLink
            to="/projects"
            style={({ isActive }) => {
              return {
                color: isActive ? "#fff" : "white",
                textShadow: isActive
                  ? "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff"
                  : null,
              };
            }}
          >
            Projects
          </NavLink>
        </div>
        {/* <div>
          <NavLink
            to="/skills"
            style={({ isActive }) => {
              return {
                color: isActive ? "#fff" : "white",
                textShadow: isActive
                  ? "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff"
                  : null,
              };
            }}
          >
            Skills
          </NavLink>
        </div> */}
        {/* <div>
          <NavLink
            to="/achievments"
            style={({ isActive }) => {
              return {
                color: isActive ? "#fff" : "white",
                textShadow: isActive
                  ? "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff"
                  : null,
              };
            }}
          >
            Achievments
          </NavLink>
        </div> */}
        <div>
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              return {
                color: isActive ? "#fff" : "white",
                textShadow: isActive
                  ? "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff"
                  : null,
              };
            }}
          >
            Contact
          </NavLink>
        </div>
        <div>
          <button className={Styles.downloadBtn} onClick={handleDownload}>
            <FaDownload />
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
}
