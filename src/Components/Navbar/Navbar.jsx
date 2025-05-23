import React, { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { VN, JP } from "country-flag-icons/react/3x2";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FiLogOut } from "react-icons/fi"; // Import logout icon
import "./navbar.css";
import "./avatar.css"; // Import the avatar styles
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
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const [showLogoutModal, setShowLogoutModal] = useState(false); // Add state for logout modal
  const token = localStorage.getItem("token");

  // Check authentication on component mount
  useEffect(() => {
    if (token) {
      fetchUserData(token);
    }
  }, [token]);

  const fetchUserData = async (token) => {
    try {
      setIsLoading(true); // Set loading to true when starting the request
      // Configure axios with the auth token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Get current user data
      const response = await axios.get("/auth/me", config);

      if (response.status === 200) {
        setUser(response.data.data);
        setIsAuthenticated(true);
      }
      setIsLoading(false); // Set loading to false after successful response
    } catch (error) {
      console.error("Error fetching user data:", error);
      // If token is invalid, clear localStorage
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      setUser(null);
      setIsLoading(false); // Set loading to false after error
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
    // Show the confirmation modal instead of immediate logout
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    toast.success("Logged out successfully!");
    setShowLogoutModal(false); // Hide the modal
  };

  const cancelLogout = () => {
    setShowLogoutModal(false); // Hide the modal
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

              {isLoading ? (
                <li className="navItem">
                  <div className="loading-spinner">
                    <div className="spinner"></div>
                  </div>
                </li>
              ) : isAuthenticated ? (
                <>
                  <li className="navItem user-profile">
                    <a href="/profile" className="navLink profile-link" title={t("settings.title")}>
                      {user?.avatarUrl && (
                        <img
                          src={user.avatarUrl}
                          alt={t("settings.profilePicture")}
                          className="avatar-img"
                        />
                      )}
                      {!user?.avatarUrl && (
                        <div className="avatar-placeholder">{user?.displayName?.charAt(0) || "U"}</div>
                      )}
                      <span className="displayName">
                        {user?.displayName || t("settings.profileTab")}
                      </span>
                    </a>
                  </li>
                  <li className="navItem logout-icon-container">
                    <button
                      className="logout-icon-btn"
                      onClick={handleLogout}
                      aria-label={t("logout")}
                      title={t("logout")}
                    >
                      <FiLogOut className="logout-icon" />
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="navItem">
                    <button
                      className="navLink signin-btn"
                      onClick={toggleSignin}
                    >
                      {t("signIn")}
                    </button>
                  </li>
                  <button className="btn signup-btn" onClick={toggleSignup}>
                    {t("signUp")}
                  </button>
                </>
              )}

              {/* Desktop language switcher */}
              <li className="navItem desktop-language-switcher">
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

              {/* Mobile-only icons for bottom of menu */}
              {isAuthenticated && (
                <div className="mobile-bottom-icons">
                  <li className="navItem logout-icon-container">
                    <button
                      className="logout-icon-btn"
                      onClick={handleLogout}
                      aria-label={t("logout")}
                      title={t("logout")}
                    >
                      <FiLogOut className="logout-icon" />
                    </button>
                  </li>
                  <li className="navItem language-switcher">
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
                </div>
              )}
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

      {/* Logout confirmation modal */}
      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="logout-modal">
            <h3>{t("logoutConfirmation.title")}</h3>
            <p>{t("logoutConfirmation.message")}</p>
            <div className="logout-modal-buttons">
              <button className="cancel-btn" onClick={cancelLogout}>
                {t("logoutConfirmation.cancel")}
              </button>
              <button className="confirm-btn" onClick={confirmLogout}>
                {t("logoutConfirmation.confirm")}
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer
        autoClose={1000}
        theme="colored"
        position="bottom-right"
      />
    </>
  );
};

export default Navbar;
