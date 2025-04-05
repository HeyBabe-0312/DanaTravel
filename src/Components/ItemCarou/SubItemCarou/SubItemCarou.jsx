import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./subItemCarou.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { TiStarHalfOutline } from "react-icons/ti";
import { useTranslation } from "react-i18next";

const SubItemCarou = ({
  data,
  topic,
  search,
  toastShow,
  topicName,
  districtName,
}) => {
  const { t } = useTranslation();
  const [width, setWidth] = useState(window.innerWidth);
  const [dataTopic, setDataTopic] = useState(null);
  const defaultImg =
    "https://firebasestorage.googleapis.com/v0/b/musicupload-7dde0.appspot.com/o/PBL6%2Fimage002_1.webp?alt=media&token=cc97e131-aef2-4299-9544-deace1e4f0e3";
  const roundStar = (s) => {
    var starFloor = Math.floor(s);
    var calc = s - starFloor;
    if (calc < 0.25) return starFloor;
    else if (calc >= 0.75) return Math.ceil(s);
    else return starFloor + 0.5;
  };
  const showStars = (st) => {
    let s = roundStar(st);
    return (
      <>
        {s == 5 ? (
          <>
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
          </>
        ) : s == 4.5 ? (
          <>
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <TiStarHalfOutline className="star-rv" />
          </>
        ) : s == 4 ? (
          <>
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
          </>
        ) : s == 3.5 ? (
          <>
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <TiStarHalfOutline className="star-rv" />
            <AiOutlineStar className="star-rv" />
          </>
        ) : s == 3 ? (
          <>
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
          </>
        ) : s == 2.5 ? (
          <>
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <TiStarHalfOutline className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
          </>
        ) : s == 2 ? (
          <>
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
          </>
        ) : s == 1.5 ? (
          <>
            <AiFillStar className="star-rv" />
            <TiStarHalfOutline className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
          </>
        ) : s == 1 ? (
          <>
            <AiFillStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
          </>
        ) : s == 0.5 ? (
          <>
            <TiStarHalfOutline className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
          </>
        ) : (
          <>
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
          </>
        )}
      </>
    );
  };
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);
  useEffect(() => {
    var newArray = null;
    if (search === null && districtName === null && topicName !== null) {
      newArray = data?.filter(function (el) {
        return parseInt(el.id_tag) === parseInt(topic);
      });
      setDataTopic(newArray);
    } else if (
      search !== null &&
      (topicName !== null || districtName !== null)
    ) {
      if (topicName) {
        var topicFilter1 = topic?.filter(function (el) {
          return el.tag_name.toString().indexOf(topicName) === 0;
        });
      }
      var searchFilter1 = data.filter(function (el) {
        return t(el.name).toUpperCase().indexOf(search?.toUpperCase()) > -1;
      });
      if (districtName) {
        if (topicName) {
          var searchTopic1 = searchFilter1.filter(function (el) {
            return parseInt(el.id_tag) === parseInt(topicFilter1[0].id_tag);
          });
          newArray = searchTopic1?.filter(function (el) {
            return el.district.toString().indexOf(districtName) === 0;
          });
        } else {
          newArray = searchFilter1?.filter(function (el) {
            return el.district.toString().indexOf(districtName) === 0;
          });
        }
      } else {
        newArray = searchFilter1.filter(function (el) {
          return parseInt(el.id_tag) === parseInt(topicFilter1[0].id_tag);
        });
      }
      setDataTopic(newArray);
    } else if (districtName !== null && topicName !== null) {
      var topicFilter2 = topic?.filter(function (el) {
        return el.tag_name.toString().indexOf(topicName) === 0;
      });
      var searchTopic2 = data?.filter(function (el) {
        return parseInt(el.id_tag) === parseInt(topicFilter2[0].id_tag);
      });
      newArray = searchTopic2?.filter(function (el) {
        return el.district.toString().indexOf(districtName) === 0;
      });
      setDataTopic(newArray);
    } else if (districtName !== null) {
      newArray = data.filter(function (el) {
        return el.district.toString().indexOf(districtName) === 0;
      });
      setDataTopic(newArray);
    } else if (search) {
      newArray = data.filter(function (el) {
        return t(el.name).toUpperCase().indexOf(search.toUpperCase()) > -1;
      });
      setDataTopic(newArray);
    } else {
      newArray = data.filter(function (el) {
        return parseInt(el.id_tag) === parseInt(topic);
      });
      setDataTopic(newArray);
    }

    if (toastShow !== "") {
      if (newArray.length !== 0) toastShow(newArray.length + " results found");
      else toastShow("No result found");
    }
  }, [data, districtName, search, t, toastShow, topic, topicName]);

  const sortStar = (a, b) => {
    return b.stars - a.stars;
  };
  if (dataTopic) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: dataTopic
        ? dataTopic.length >= 3
          ? width > 1000
            ? 3
            : width > 600
            ? 2
            : 1
          : dataTopic.length == 2
          ? width > 850
            ? 2
            : 1
          : dataTopic.length
        : dataTopic.length,
      slidesToScroll: dataTopic
        ? dataTopic.length >= 3
          ? width > 1000
            ? 3
            : width > 600
            ? 2
            : 1
          : dataTopic.length == 2
          ? width > 850
            ? 2
            : 1
          : dataTopic.length
        : dataTopic.length,
    };
    if (dataTopic.length === 0) {
      return <div className="no-result">{t("no_result")}</div>;
    }
    return (
      <Slider {...settings}>
        {React.Children.toArray(
          dataTopic.sort(sortStar).map((d) => (
            <div className="bgLocations">
              <div className="itemLocation">
                <a href={`/location/${d.slug}`}>
                  <div className="imgLocation">
                    <img
                      src={d.center_img ? d.center_img : defaultImg}
                      className="avaLocation"
                      alt="avaLocation"
                    />
                  </div>
                  <div className="itemInfo">
                    <div className="titleInfo">{t(d.name)}</div>
                    <div className="stars">{showStars(d.stars)}</div>
                  </div>
                </a>
              </div>
            </div>
          ))
        )}
      </Slider>
    );
  }
};

export default SubItemCarou;
