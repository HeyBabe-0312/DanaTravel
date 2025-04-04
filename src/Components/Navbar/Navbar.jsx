import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { VN, JP } from "country-flag-icons/react/3x2";
import { MdOutlineTravelExplore } from "react-icons/md";
import "./navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNav = () => {
    setActive("navBar");
  };

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("dana_language", lang);
  };

  return (
    <>
      <session className="navBarSection">
        <header className="header flex">
          <div className="logoDiv">
            <a href="/" className="logo flex">
              <h1>
                <MdOutlineTravelExplore className="icon" />
                DanaTravel.
              </h1>
            </a>
          </div>
          {active.includes("activeNavbar") && (
            <div className="overlay" onClick={removeNav}></div>
          )}
          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <a href="/" className="navLink">
                  Home
                </a>
              </li>
              <li className="navItem">
                <a href="/locations" className="navLink">
                  Locations
                </a>
              </li>
              <li className="navItem">
                {i18n.language === "vi" ? (
                  <JP
                    onClick={() => changeLang("ja")}
                    width={40}
                    style={{ marginLeft: "10px" }}
                    cursor="pointer"
                  />
                ) : (
                  <VN
                    onClick={() => changeLang("vi")}
                    width={40}
                    style={{ marginLeft: "10px" }}
                    cursor="pointer"
                  />
                )}
              </li>
            </ul>

            <div onClick={removeNav} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>
          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon" />
          </div>
        </header>
      </session>
    </>
  );
};

export default Navbar;
