import React, { useEffect, useState } from "react";
import "./home.css";
import vid1 from "../../assets/videos/vid4.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaTripadvisor, FaTiktok } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineVerticalAlignBottom } from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const { t } = useTranslation();
  const linkTo = useNavigate();
  const options = [
    "Bán Đảo Sơn Trà",
    "Bà Nà Hills",
    "Bảo tàng Điêu Khắc Chăm",
    "Bảo tàng Mỹ Thuật",
    "Bãi biển Non Nước",
    "Biển Mỹ Khê",
    "Bảo tàng Ký Ức Điêu Khắc",
    "Cầu Rồng",
    "Cầu Tình Yêu",
    "Cầu Sông Hàn",
    "Chợ Cồn",
    "Chợ Hàn",
    "Chùa Linh Ứng",
    "Cây Đa Ngàn Năm",
    "Cá Chép Hóa Rồng",
    "Suối Lương",
    "Nhà Đảo Ngược",
    "Ngũ Hành Sơn",
    "Khu Du Lịch Núi Thần Tài",
    "Rạn Nam Ô",
    "Suối Hoa",
    "Suối Mơ",
    "Làng Chiếu Cẩm Nê",
  ];
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const goToLct = async () => {
    const filterSearch = document.getElementById("searchHome")?.value;
    const filterDistrict = document.getElementById("district")?.value;
    const filterTopic = document.getElementById("topics")?.value;
    let query = [];

    if (filterSearch !== "") {
      query.push("Search=" + encodeURIComponent(filterSearch));
    }
    if (filterTopic !== "None") {
      query.push("Topic=" + encodeURIComponent(filterTopic));
    }
    if (filterDistrict !== "None") {
      query.push("District=" + encodeURIComponent(filterDistrict));
    }

    const queryString = query.length > 0 ? "?" + query.join("&") : "";
    linkTo("/locations" + queryString);
  };

  const _handlerEnter = (e) => {
    if (e.key === "Enter") {
      goToLct();
    }
  };
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={vid1} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Da Nang Travel
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            {t("holiday")}
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <Autocomplete
            className="text-box"
            options={options}
            renderInput={(params) => (
              <div ref={params.InputProps.ref} id="destinationInput">
                <label htmlFor="city">Search your destination:</label>
                <div className="input flex">
                  <input
                    type="search"
                    {...params.inputProps}
                    onKeyDown={_handlerEnter}
                    id="searchHome"
                    placeholder="Enter name here..."
                  ></input>
                  <GrLocation className="icon" />
                </div>
              </div>
            )}
          />
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Search by districts:</label>
            </div>
            <div className="input flex dropdown-text">
              <select name="district" id="district">
                <option value="None">{t("districts.select")}</option>
                <option value="HaiChau">{t("districts.haiChau")}</option>
                <option value="SonTra">{t("districts.sonTra")}</option>
                <option value="NguHanhSon">{t("districts.nguHanhSon")}</option>
                <option value="LienChieu">{t("districts.lienChieu")}</option>
                <option value="CamLe">{t("districts.camLe")}</option>
                <option value="HoaVang">{t("districts.hoaVang")}</option>
                <option value="ThanhKhe">{t("districts.thanhKhe")}</option>
              </select>
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Search by topic:</label>
            </div>
            <div className="input flex dropdown-text">
              <select name="topic" id="topics">
                <option value="None">{t("topics.select")}</option>
                <option value="Suggest">{t("topics.suggest")}</option>
                <option value="Bridge">{t("topics.bridge")}</option>
                <option value="Mountain">{t("topics.mountain")}</option>
                <option value="Beach">{t("topics.beach")}</option>
                <option value="Pagoda">{t("topics.pagoda")}</option>
                <option value="Museum">{t("topics.museum")}</option>
                <option value="Stream">{t("topics.stream")}</option>
                <option value="Market">{t("topics.market")}</option>
                <option value="Village">{t("topics.village")}</option>
                <option value="Other">{t("topics.other")}</option>
              </select>
            </div>
          </div>

          <div className="searchOptions flex" onClick={goToLct}>
            <HiFilter className="icon" />
            <span>{t("all")}</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <a
              href="https://www.facebook.com/minhiuuu"
              target="_blank"
              rel="noreferrer"
            >
              <FiFacebook className="icon fb" />
            </a>
            <a
              href="https://www.instagram.com/explore/tags/danang/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram className="icon ig" />
            </a>
            <a
              href="https://www.tiktok.com/search?q=danang"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok className="icon tt" size={19} />
            </a>
            <a
              href="https://www.tripadvisor.com/Search?q=danang"
              target="_blank"
              rel="noreferrer"
            >
              <FaTripadvisor className="icon ta" />
            </a>
          </div>
          <div className="leftIcons">
            <a href="#destinations">
              <SiYourtraveldottv className="icon" />
            </a>
            <a href="#footer">
              <MdOutlineVerticalAlignBottom className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
