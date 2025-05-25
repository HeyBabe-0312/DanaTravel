import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiPhone } from "react-icons/hi";
import { FaEnvelope, FaUserEdit } from "react-icons/fa";
import avaDefault from "../../assets/images/avaDefault.jpg";
import "./profile.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";

const Profile = ({ profile, removeProfile, user }) => {
  const { t } = useTranslation();
  const [imgAva, setImgAva] = useState("");
  const checkEdit = async () => {
    let username = document.getElementById("usernameInp").value;
    let phone = document.getElementById("phone").value;
    const data = {
      id: localStorage.getItem("iduser"),
      username: username === "" ? user.result[0].User_Name : username,
      phone: phone === "" ? user.result[0].phone_number : phone,
    };
    try {
      cloudinaryUpload(imgAva);
    } catch (err) {
      if (err.response) {
        toast.error(err.response.msg);
      }
    }
    try {
      const val = await axios.put("/user/update1", data);
      if (val.status === 200) {
        toast.success(t("profile.updateSuccess"));
        await new Promise((resolve) => setTimeout(resolve, 2500));
        window.location.reload();
      }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.msg);
      }
    }
  };
  const cloudinaryUpload = (fileToUpload) => {
    return axios
      .post(`/user/upload/${localStorage.getItem("iduser")}`, fileToUpload)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
  const removeData = () => {
    document.getElementById("usernameInp").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("inpFile").value = "";
    document.getElementById("avaOutput").src =
      user.result[0].avatar ||
      "https://firebasestorage.googleapis.com/v0/b/musicupload-7dde0.appspot.com/o/PBL6%2FTest%2Favatardefault_92824.webp?alt=media&token=a10034cd-29d5-41ad-b43f-802e142ca1c8";
    setImgAva("");
    return 0;
  };
  const _handlerClickEnter = (e) => {
    if (e.key === "Enter") {
      checkEdit();
    }
  };
  const showImg = (event) => {
    var output = document.getElementById("avaOutput");
    output.src = URL.createObjectURL(event.target.files[0]);
    const uploadData = new FormData();
    uploadData.append("file", event.target.files[0], "file");
    setImgAva(uploadData);
  };
  if (user === "" || user == null) {
    return (
      <section className={profile}>
        <div className="modal-profile">
          <div className="close-btn">
            <AiFillCloseCircle
              className="cls-signin icon"
              onClick={function (e) {
                removeProfile();
                removeData();
              }}
            />
          </div>
          <form runat="server">
            <div className="avatarUpload">
              <img src={avaDefault} className="avaInfo" id="avaOutput" />
              <div className="input flex fileIpt">
                <input
                  type="file"
                  name="avatar"
                  accept="image/png, image/jpg"
                />
              </div>
            </div>
          </form>
          <div className="textbox-container">
            <div className="text-box">
              <input
                className="input100"
                type="text"
                placeholder="oppahd96@gmail.com"
                id="emailInp"
                disabled
              ></input>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <FaEnvelope className="symbol" aria-hidden="true" />
              </span>
            </div>
            <div className="text-box">
              <input
                className="input100"
                type="text"
                placeholder="Username"
                id="usernameInp"
              ></input>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <FaUserEdit className="symbol" aria-hidden="true" />
              </span>
            </div>
            <div className="text-box">
              <input
                className="input100"
                autoComplete="off"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phonenumber"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              ></input>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <HiPhone className="symbol" aria-hidden="true" />
              </span>
            </div>
          </div>
          <div className="container-login100">
            <button
              className="login100-form-btn"
              onClick={function (e) {
                removeProfile();
              }}
            >
              Save it
            </button>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className={profile}>
        {profile != "profile" ? (
          <ToastContainer
            autoClose={2000}
            theme="colored"
            position="bottom-right"
          />
        ) : (
          <></>
        )}
        <div className="modal-profile">
          <div className="close-btn">
            <AiFillCloseCircle
              className="cls-signin icon"
              onClick={function (e) {
                removeProfile();
                removeData();
              }}
            />
          </div>
          <div className="avatarUpload">
            <img
              src={
                user.result[0].avatar ||
                "https://firebasestorage.googleapis.com/v0/b/musicupload-7dde0.appspot.com/o/PBL6%2FTest%2Favatardefault_92824.webp?alt=media&token=a10034cd-29d5-41ad-b43f-802e142ca1c8"
              }
              className="avaInfo"
              id="avaOutput"
            />
            <div className="input flex fileIpt">
              <input
                type="file"
                onChange={showImg}
                id="inpFile"
                name="avatar"
                accept="image/png, image/jpeg, image/jpg"
              />
            </div>
          </div>
          <div className="textbox-container">
            <div className="text-box">
              <input
                className="input100"
                type="text"
                placeholder={user.result[0].Email}
                id="emailInp"
                disabled
              ></input>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <FaEnvelope className="symbol" aria-hidden="true" />
              </span>
            </div>
            <div className="text-box">
              <input
                className="input100"
                type="text"
                onKeyDown={_handlerClickEnter}
                maxLength={20}
                placeholder={user.result[0].User_Name}
                id="usernameInp"
              ></input>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <FaUserEdit className="symbol" aria-hidden="true" />
              </span>
            </div>
            <div className="text-box">
              <input
                className="input100"
                autoComplete="off"
                onKeyDown={_handlerClickEnter}
                type="tel"
                maxLength={12}
                id="phone"
                name="phone"
                placeholder={user.result[0].phone_number || "Phone Number"}
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              ></input>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <HiPhone className="symbol" aria-hidden="true" />
              </span>
            </div>
          </div>
          <div className="container-login100">
            <button
              className="login100-form-btn"
              onClick={function (e) {
                checkEdit();
              }}
            >
              Save it
            </button>
          </div>
        </div>
      </section>
    );
  }
};

export default Profile;
