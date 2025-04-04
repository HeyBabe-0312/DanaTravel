import React from "react";
import "./map.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Map = ({ location, mapShow, removeMapShow }) => {
  const { t } = useTranslation();
  if (location) {
    return (
      <div className={mapShow}>
        <div className="modal-mapShow">
          <div className="topMap">
            <div className="titleMapLct">
              {t(location[0].name)} - {t(location[0].address)}
            </div>
            <div className="close-btn">
              <AiFillCloseCircle
                className="cls-mapShow icon"
                onClick={function (e) {
                  removeMapShow();
                }}
              />
            </div>
          </div>
          <div className="mapGG">
            <img
              src={location[0].address_img}
              className="avaLocation"
              alt="avaLocation"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Map;
