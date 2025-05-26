import React, { useState } from "react";
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
import { toast, ToastContainer } from "react-toastify";
import { useUser } from "../../contexts/UserContext";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("navBar");
  const [showSignin, setShowSignin] = useState("signin");
  const [showSignup, setShowSignup] = useState("signup");
  const [showLogoutModal, setShowLogoutModal] = useState(false); // Add state for logout modal

  // Use the global user context instead of local state
  const {
    user,
    isAuthenticated,
    loading: isLoading,
    fetchUserData,
    logout,
  } = useUser();

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
    // Use the context's logout function
    logout();

    // Update the UI by fetching user data (will recognize there's no token)
    fetchUserData();

    // Show success message
    toast.success(t("auth.logoutSuccess"));

    // Hide the logout confirmation modal
    setShowLogoutModal(false);
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
                  <div className="loading-spinner1">
                    <div className="spinner1"></div>
                  </div>
                </li>
              ) : isAuthenticated ? (
                <>
                  <li className="navItem user-profile">
                    <a
                      href="/profile"
                      className="navLink profile-link"
                      title={t("settings.title")}
                    >
                      {user?.avatarUrl && (
                        <img
                          src={user.avatarUrl}
                          alt={t("settings.profilePicture")}
                          className="avatar-img"
                        />
                      )}
                      {!user?.avatarUrl && (
                        <div className="avatar-placeholder">
                          {user?.displayName?.charAt(0) || "U"}
                        </div>
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

              <div className="mobile-bottom-icons">
                {isAuthenticated && (
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
                )}
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
            <h3>{t("auth.logoutConfirmation.title")}</h3>
            <p>{t("auth.logoutConfirmation.message")}</p>
            <div className="logout-modal-buttons">
              <button className="cancel-btn" onClick={cancelLogout}>
                {t("auth.logoutConfirmation.cancel")}
              </button>
              <button className="confirm-btn" onClick={confirmLogout}>
                {t("auth.logoutConfirmation.confirm")}
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
