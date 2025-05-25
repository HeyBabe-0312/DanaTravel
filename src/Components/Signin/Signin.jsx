import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineTravelExplore } from "react-icons/md";
import "./signin.scss";
import { loginUser } from "../../services/api"; // Import the API function
import { toast, ToastContainer } from "react-toastify";
import { useUser } from "../../contexts/UserContext";
import { useTranslation } from "react-i18next";

const Signin = ({ signin, removeSignin }) => {
  // Get the fetchUserData function from the user context
  const { fetchUserData } = useUser();
  // Get translations
  const { t } = useTranslation();
  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const checkLogin = async () => {
    let email = document.getElementById("emailInp").value;
    let password = document.getElementById("passwordInp").value;

    if (email === "" || password === "") {
      toast.info(t("auth.fillAllFields"));
      return;
    }

    if (!validateEmail(email)) {
      toast.error(email + " " + t("auth.invalidEmail"));
      return;
    }

    if (password.length < 6) {
      toast.info(t("auth.passwordTooShort"));
      return;
    }

    setIsLoading(true);

    try {
      // Using the API endpoint based on user.model.js
      const response = await loginUser({
        // Use the imported API function
        email: email,
        password: password,
      });

      if (response.status === 200) {
        // Store the JWT token from the response
        localStorage.setItem("token", response.data.token);
        toast.success(t("auth.loginSuccess"));

        // Fetch the latest user data to update the UI
        fetchUserData();

        removeSignin();
      }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.error || t("auth.loginFailed"));
      } else {
        toast.error(t("auth.loginFailed"));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const removeData = () => {
    document.getElementById("emailInp").value = "";
    document.getElementById("passwordInp").value = "";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      checkLogin();
    }
  };

  return (
    <section className={signin}>
      {signin && (
        <ToastContainer
          autoClose={1000}
          theme="colored"
          position="bottom-right"
        />
      )}
      <div className="modal-signin">
        <div className="close-btn">
          <AiFillCloseCircle
            className="cls-signin icon"
            onClick={() => {
              removeSignin();
              removeData();
            }}
          />
        </div>
        <div className="logoDiv">
          <div className="logo-signin flex">
            <h1>
              <MdOutlineTravelExplore className="icon-signin" />
              DanaTravel.
            </h1>
          </div>
        </div>
        <div className="signin-text">
          <p className="text">{t("auth.signinWelcomeText")}</p>
        </div>
        <form>
          <div className="text-box">
            <input
              className="input100"
              type="email"
              autoComplete="off"
              maxLength={100}
              placeholder={t("auth.email")}
              id="emailInp"
              onKeyDown={handleKeyDown}
            ></input>
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <FaEnvelope className="symbol" aria-hidden="true" />
            </span>
          </div>
          <div className="text-box">
            <input
              className="input100"
              type="password"
              autoComplete="off"
              maxLength={20}
              placeholder={t("auth.password")}
              id="passwordInp"
              onKeyDown={handleKeyDown}
            ></input>
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <MdLock className="symbol" aria-hidden="true" />
            </span>
          </div>
        </form>
        <div className="container-login100">
          <button
            className="login100-form-btn"
            onClick={checkLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading-spinner5">
                <div className="spinner5"></div>
                <span>{t("auth.signingIn") || "Signing in..."}</span>
              </div>
            ) : (
              t("auth.signIn")
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signin;
