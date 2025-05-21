import React, { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { VN, JP } from "country-flag-icons/react/3x2";
import { MdOutlineTravelExplore } from "react-icons/md";
import "./navbar.css";
import { useTranslation } from "react-i18next";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("navBar");
  const [showSignin, setShowSignin] = useState("signin");
  const [showSignup, setShowSignup] = useState("signup");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Check authentication on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      // Configure axios with the auth token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Get current user data
      const response = await axios.get("/api/auth/me", config);

      if (response.status === 200) {
        setUser(response.data.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      // If token is invalid, clear localStorage
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNav = () => {
    setActive("navBar");
  };

  const toggleSignin = () => {
    setShowSignin(
      showSignin === "signin activeSignin" ? "signin" : "signin activeSignin"
    );
    if (showSignup) {
      setShowSignup("signup");
    }
  };

  const toggleSignup = () => {
    setShowSignup(
      showSignup === "signup activeSignup" ? "signup" : "signup activeSignup"
    );
    if (showSignin) {
      setShowSignin("signin");
    }
  };

  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    toast.success("Logged out successfully!");
    // Refresh the page
    window.location.reload();
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
                  {t("home")}
                </a>
              </li>
              <li className="navItem">
                <a href="/locations" className="navLink">
                  {t("loca")}
                </a>
              </li>
              <li className="navItem">
                <a href="/bookings" className="navLink">
                  {t("book")}
                </a>
              </li>

              {isAuthenticated ? (
                <>
                  <li className="navItem">
                    <a href="/profile" className="navLink">
                      {user?.displayName || "Profile"}
                    </a>
                  </li>
                  <li className="navItem">
                    <a href="#" className="navLink" onClick={handleLogout}>
                      {t("logout")}
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="navItem">
                    <a href="#" className="navLink" onClick={toggleSignin}>
                      {t("signIn")}
                    </a>
                  </li>
                  <button className="btn" onClick={toggleSignup}>
                    <a>{t("signUp")}</a>
                  </button>
                </>
              )}

              <li className="navItem">
                {i18n.language === "vi" ? (
                  <JP
                    onClick={() => changeLang("ja")}
                    width={40}
                    cursor="pointer"
                  />
                ) : (
                  <VN
                    onClick={() => changeLang("vi")}
                    width={40}
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

      {/* Sign in and Sign up modals */}
      <Signin signin={showSignin} removeSignin={toggleSignin} />
      <Signup signup={showSignup} removeSignup={toggleSignup} />
      <ToastContainer
        autoClose={1000}
        theme="colored"
        position="bottom-right"
      />
    </>
  );
};

export default Navbar;
