import React, { useState } from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineTravelExplore } from "react-icons/md";
import "./signup.scss";
import { registerUser } from "../../services/api"; // Import the API function
import { toast, ToastContainer } from "react-toastify";
import { useUser } from "../../contexts/UserContext";
import { useTranslation } from "react-i18next";

const Signup = ({ signup, removeSignup }) => {
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

  const checkSignup = async () => {
    let displayName = document.getElementById("displayNameInp").value;
    let email = document.getElementById("emailInfo").value;
    let password = document.getElementById("upasswordInp").value;
    let repass = document.getElementById("repasswordInp").value;

    if (
      displayName === "" ||
      email === "" ||
      password === "" ||
      repass === ""
    ) {
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

    if (password !== repass) {
      toast.error(t("auth.passwordsDoNotMatch"));
      return;
    }

    setIsLoading(true);

    try {
      // Using the API endpoint based on user.model.js
      const response = await registerUser({
        // Use the imported API function
        email: email,
        password: password,
        displayName: displayName,
      });

      if (response.status === 201) {
        toast.success(t("auth.registerSuccess"));

        // Store the JWT token from the response
        localStorage.setItem("token", response.data.token);
        toast.success(t("auth.loginSuccess"));

        // Fetch the latest user data to update the UI
        fetchUserData();

        removeData();
        removeSignup();
      }
    } catch (err) {
      if (err.response) {
        toast.error(
          err.response.data.error ||
            err.response.data.errors?.[0]?.msg ||
            t("auth.registerFailed")
        );
      } else {
        toast.error(t("auth.registerFailed"));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const removeData = () => {
    document.getElementById("displayNameInp").value = "";
    document.getElementById("emailInfo").value = "";
    document.getElementById("upasswordInp").value = "";
    document.getElementById("repasswordInp").value = "";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      checkSignup();
    }
  };

  return (
    <section className={signup}>
      {signup && (
        <ToastContainer
          autoClose={1000}
          theme="colored"
          position="bottom-right"
        />
      )}
      <div className="modal-signup">
        <div className="close-btn">
          <AiFillCloseCircle
            className="cls-signup icon"
            onClick={() => {
              removeSignup();
              removeData();
            }}
          />
        </div>
        <div className="logoDiv">
          <div className="logo-signup flex">
            <h1>
              <MdOutlineTravelExplore className="icon-signup" />
              DanaTravel.
            </h1>
          </div>
        </div>
        <div className="signup-text">
          <p className="text">{t("auth.signupWelcomeText")}</p>
        </div>
        <form>
          <div className="text-box">
            <input
              className="input100"
              type="text"
              autoComplete="off"
              maxLength={50}
              placeholder={t("auth.displayName")}
              id="displayNameInp"
              onKeyDown={handleKeyDown}
            ></input>
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <FaUser className="symbol" aria-hidden="true" />
            </span>
          </div>
          <div className="text-box">
            <input
              className="input100"
              type="email"
              autoComplete="off"
              maxLength={100}
              placeholder={t("auth.email")}
              id="emailInfo"
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
              autoComplete="off"
              type="password"
              placeholder={t("auth.password")}
              maxLength={20}
              id="upasswordInp"
              onKeyDown={handleKeyDown}
            ></input>
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <MdLock className="symbol" aria-hidden="true" />
            </span>
          </div>
          <div className="text-box">
            <input
              className="input100"
              autoComplete="off"
              type="password"
              placeholder={t("auth.confirmPassword")}
              maxLength={20}
              id="repasswordInp"
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
            onClick={checkSignup}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading-spinner6">
                <div className="spinner6"></div>
                <span>{t("auth.signingUp") || "Signing up..."}</span>
              </div>
            ) : (
              t("auth.signUp")
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signup;
