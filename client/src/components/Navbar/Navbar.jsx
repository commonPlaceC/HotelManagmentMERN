import { React, useState } from "react";
//import { Link } from "react-router-dom";

import Button from "../Button/Button";
import accLogo from "../../assets/img/Logo.png";
//import accArrow from "../../assets/img/svg/acc-arrow.svg";

const Navbar = () => {
  const navbarItems = [
    "Dashboard",
    "Reservations",
    "Rooms",
    "Users",
    "Services",
  ];

  const [time, setTime] = useState(new Date());
  setInterval(() => setTime(new Date()), 1000);

  return (
    <div className="navbar">
      <img src="" alt="" className="navbar__logo" />

      <span style={{ color: "white" }}>
        Time now: {time.toLocaleTimeString()}{" "}
      </span>

      <ul className="navbar__list">
        {navbarItems.map((item) => (
          <Button className="tab-button">{item}</Button>
        ))}
      </ul>

      <div className="navbar__account">
        <span>manager@example.com</span>
        <img src={accLogo} alt="accLogo"/>
        {/* <svg fill='$white' height='30px' width='30px'>
                    <use xlinkHref={accArrow}/>
                </svg> */}
      </div>
    </div>
  );
};

export default Navbar;
