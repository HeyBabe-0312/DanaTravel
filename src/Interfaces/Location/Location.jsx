import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { TiStarHalfOutline } from "react-icons/ti";
import { FaMapMarkedAlt } from "react-icons/fa";
import "./location.css";
import ImageList from "./ImageList/ImageList";
import Map from "./Map/Map";
import RelativeLct from "./RelativeLct/RelativeLct";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Location = ({ dataAllLct, dataTopic, dataReview }) => {
  const { t, i18n } = useTranslation();
  const [mapShow, setMapShow] = useState("mapShow");

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const showMapShow = () => {
    setMapShow("mapShow activeMapShow");
  };
  const removeMapShow = () => {
    setMapShow("mapShow");
  };
  const handleCopyTextFromParagraph = (paragraph) => {
    const cb = navigator.clipboard;
    cb.writeText(paragraph).then(() => alert("Address copied in clipboard"));
  };

  let { id } = useParams();
  const [dataLocation, setDataLocation] = useState(null);
  const [dataRelative, setDataRelative] = useState(null);
  const [topic, setTopic] = useState("");
  const [topicName, setTopicName] = useState("");

  useEffect(() => {
    var newArray = dataAllLct.filter(function (el) {
      return el.slug.toString().indexOf(id) === 0;
    });
    setDataLocation(newArray);
    var relativeArray = dataAllLct.filter(function (el) {
      return newArray[0].relate.includes(el.id_location);
    });
    setDataRelative(relativeArray);
    var findTopic = dataTopic.filter(function (el) {
      return el.id_tag.toString().indexOf(newArray[0].id_tag) === 0;
    });
    setTopic(findTopic[0].tag_name);
    setTopicName(findTopic[0].tag_title);
  }, [dataAllLct, dataTopic, id]);

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
        {s === 5 ? (
          <>
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
          </>
        ) : s === 4.5 ? (
          <>
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <TiStarHalfOutline className="star-rv" />
          </>
        ) : s === 4 ? (
          <>
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
          </>
        ) : s === 3.5 ? (
          <>
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <TiStarHalfOutline className="star-rv" />
            <AiOutlineStar className="star-rv" />
          </>
        ) : s === 3 ? (
          <>
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
          </>
        ) : s === 2.5 ? (
          <>
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <TiStarHalfOutline className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
          </>
        ) : s === 2 ? (
          <>
            <AiFillStar className="star-rv" />
            <AiFillStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
          </>
        ) : s === 1.5 ? (
          <>
            <AiFillStar className="star-rv" />
            <TiStarHalfOutline className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
          </>
        ) : s === 1 ? (
          <>
            <AiFillStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
            <AiOutlineStar className="star-rv" />
          </>
        ) : s === 0.5 ? (
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

  return (
    dataLocation && (
      <section className="section detailLct">
        <Map
          location={dataLocation}
          mapShow={mapShow}
          removeMapShow={removeMapShow}
        />
        <div className="bg-detailLct">
          <div className="titleLink">
            <a href="/locations">{t("all")}</a>
            <MdOutlineNavigateNext className="icon-next" />
            <a href={`/locations?Topic=${topic}`}>{t(topicName)}</a>
            <MdOutlineNavigateNext className="icon-next" />
            <a href="/">{t(dataLocation[0].name)}</a>
          </div>
          <div className="detailMain">
            <div className="detailInfo">
              <div className="grid-detail">
                <div className="albumsLct">
                  <ImageList data={dataLocation[0].sub_img} />
                </div>
                <div className="infoLct">
                  <div className="info">
                    <div className="info-title">
                      {t(dataLocation[0].title).toUpperCase()}
                    </div>
                    <div className="fees flex">
                      <div className="topic">
                        <p>{t(topicName).toUpperCase()}</p>
                      </div>
                      <div className="stars">
                        {showStars(dataLocation[0].stars)} [
                        {Math.round(dataLocation[0].stars * 100) / 100}]
                      </div>
                    </div>
                    <div className="title1">{t(dataLocation[0].title1)}</div>
                    <div className="descrip">
                      {t(dataLocation[0].describes)}
                    </div>
                  </div>
                  <div className="mapLct">
                    <div className="titleMap">
                      {t("location.title")}
                      <FaMapMarkedAlt className="icon-map" />
                    </div>
                    <div className="mapInfo">
                      <div className="addressInfo">
                        <p
                          onClick={function (e) {
                            showMapShow();
                            handleCopyTextFromParagraph(
                              t(dataLocation[0].address)
                            );
                          }}
                          className="addressTxt"
                        >
                          {t(dataLocation[0].address)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-container">
              <div className="comment" data-aos="fade-up">
                <div className="guide">{t("guide")}</div>
                <div
                  className="review"
                  dangerouslySetInnerHTML={{
                    __html:
                      i18n.language === "vi"
                        ? dataLocation[0].detail_describe
                        : dataLocation[0].detail_describe2,
                  }}
                />
              </div>
              <div className="relativeLct" data-aos="fade-up">
                <div className="titleRelative">{t("suggest_title")}</div>
                <RelativeLct data={dataRelative} />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Location;
