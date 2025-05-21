import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineTravelExplore } from "react-icons/md";
import "./signin.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Signin = ({ signin, removeSignin }) => {
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
      toast.info("Please fill all inputs");
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

    try {
      // Using the API endpoint based on user.model.js
      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        // Store the JWT token from the response
        localStorage.setItem("token", response.data.token);
        toast.success("Sign in successfully!");

        // Wait for the toast to show before refreshing
        await new Promise((resolve) => setTimeout(resolve, 1500));
        window.location.reload();
      }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.error || "Login failed");
      } else {
        toast.error("Login failed. Please try again later.");
      }
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
          <p className="text">
            This is a travel website integrates AI technology for easier search
            of places through images. Sign in to participate in reviews,
            interact with everyone.
          </p>
        </div>
        <form>
          <div className="text-box">
            <input
              className="input100"
              type="email"
              autoComplete="off"
              maxLength={100}
              placeholder="Email"
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
              placeholder="Password"
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
          <button className="login100-form-btn" onClick={checkLogin}>
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signin;
