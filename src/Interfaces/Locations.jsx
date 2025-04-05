import React, { useState, useEffect } from "react";
import ItemCarou from "../Components/ItemCarou/ItemCarou";
import { FaSearchLocation } from "react-icons/fa";
import "./styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Autocomplete from "@mui/material/Autocomplete";
import { useTranslation } from "react-i18next";

const Locations = ({ dataAllLct, dataTopic, dataReview }) => {
  const { t, i18n } = useTranslation();
  const [checkIsTopic, setCheckIsTopic] = useState(true);
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
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("Search");
  const topicName = new URLSearchParams(search).get("Topic");
  const districtName = new URLSearchParams(search).get("District");

  useEffect(() => {
    if (name === null) setCheckIsTopic(true);
    else setCheckIsTopic(false);
  }, [name]);

  const _handlerEnter = (e) => {
    if (e.key === "Enter") {
      const filter = document.getElementById("searchInput").value;
      if (filter !== "") {
        linkTo("?Search=" + filter);
      } else {
        linkTo("/locations");
      }
    }
  };
  if (dataAllLct && dataTopic) {
    return (
      <section className="bg-locations section">
        <ToastContainer
          autoClose={2000}
          theme="colored"
          position="bottom-right"
        />
        <div className="searchLocation">
          <Autocomplete
            className="text-box"
            options={i18n.language === "vi" ? options : options2}
            renderInput={(params) => (
              <div ref={params.InputProps.ref} className="auto-btn">
                <input
                  {...params.inputProps}
                  type="search"
                  placeholder={t("placeholder2")}
                  onKeyDown={_handlerEnter}
                  id="searchInput"
                  autoComplete="off"
                ></input>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <FaSearchLocation className="symbol" aria-hidden="true" />
                </span>
              </div>
            )}
          />
        </div>
        <ItemCarou
          dataTopic={dataTopic}
          dataLocation={dataAllLct}
          dataReview={dataReview}
          checkIsTopic={checkIsTopic}
          search={name}
          topicName={topicName}
          districtName={districtName}
        />
      </section>
    );
  } else {
    return (
      <section className="bg-locations section">
        <div className="searchLocation">
          <div className="text-box"></div>
        </div>
        <div className="noData">
          Something wrong with data in server. We will try to reconnect soon!
        </div>
      </section>
    );
  }
};

export default Locations;
