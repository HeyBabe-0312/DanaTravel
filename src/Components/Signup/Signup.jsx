import React from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineTravelExplore } from "react-icons/md";
import "./signup.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Signup = ({ signup, removeSignup }) => {
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
      toast.info("Please fill all inputs!");
      return;
    }

    if (!validateEmail(email)) {
      toast.error(email + " is not a valid email");
      return;
    }

    if (password.length < 6) {
      toast.info("Password too short (at least 6 characters)!");
      return;
    }

    if (password !== repass) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      // Using the API endpoint based on user.model.js
      const response = await axios.post("/api/auth/register", {
        email: email,
        password: password,
        displayName: displayName,
      });

      if (response.status === 201) {
        toast.success("Register successfully!");

        // Wait for the toast to show before closing the modal
        await new Promise((resolve) => setTimeout(resolve, 1500));
        removeData();
        removeSignup();
      }
    } catch (err) {
      if (err.response) {
        toast.error(
          err.response.data.error ||
            err.response.data.errors?.[0]?.msg ||
            "Registration failed"
        );
      } else {
        toast.error("Registration failed. Please try again later.");
      }
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
          <a className="logo-signup flex">
            <h1>
              <MdOutlineTravelExplore className="icon-signup" />
              DanaTravel.
            </h1>
          </a>
        </div>
        <div className="signup-text">
          <p className="text">
            This is a travel website integrates AI technology for easier search
            of places through images. Sign up to unlock the best of DanaTravel.{" "}
          </p>
        </div>
        <form>
          <div className="text-box">
            <input
              className="input100"
              type="text"
              autoComplete="off"
              maxLength={50}
              placeholder="Display Name"
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
              placeholder="Email"
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
              placeholder="Password"
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
              placeholder="Confirm password"
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
          <button className="login100-form-btn" onClick={checkSignup}>
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signup;
