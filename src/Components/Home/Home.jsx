import React, { useEffect } from "react";
import "./home.css";
import vid1 from "../../assets/videos/vid_header.mp4";
import thumb from "../../assets/images/thumb_header.webp";
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
  const { t, i18n } = useTranslation();
  const linkTo = useNavigate();
  const options = [
    "Bán đảo Sơn Trà",
    "Bà Nà Hills",
    "Bảo tàng Điêu Khắc Chăm",
    "Bảo tàng Mỹ Thuật",
    "Bãi biển Non Nước",
    "Bãi biển Mỹ Khê",
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
  const options2 = [
    "ソンチャ半島",
    "バーナーヒルズ",
    "チャム彫刻博物館",
    "美術博物館",
    "ノンヌオックビーチ",
    "ミーケービーチ",
    "彫刻博物館",
    "ドラゴン橋",
    "愛の桟橋",
    "ハン橋",
    "コン市場",
    "ハン市場",
    "リンウング寺",
    "千年のバニヤンツリー",
    "鯉の登竜像",
    "ルオン渓流",
    "逆さまの家",
    "五行山",
    "NUI THAN TAI ホットスプリングパーク",
    "ナムオー礁",
    "ホア渓流",
    "モー渓流",
    "カムネマット村",
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
      <video
        src={vid1}
        preload="metadata"
        muted
        autoPlay
        loop
        type="video/mp4"
        poster={thumb}
      ></video>

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
            options={i18n.language === "vi" ? options : options2}
            renderInput={(params) => (
              <div ref={params.InputProps.ref} id="destinationInput">
                <label htmlFor="city">{t("destination")}</label>
                <div className="input flex">
                  <input
                    type="search"
                    {...params.inputProps}
                    onKeyDown={_handlerEnter}
                    id="searchHome"
                    placeholder={t("placeholder")}
                  ></input>
                  <GrLocation className="icon" />
                </div>
              </div>
            )}
          />
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">{t("district")}</label>
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
              <label htmlFor="price">{t("topic")}</label>
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
