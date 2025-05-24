import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";
import { AiFillStar, AiOutlineStar, AiFillCloseCircle } from "react-icons/ai";
import { TiStarHalfOutline } from "react-icons/ti";
import { FaMapMarkedAlt, FaYoutube } from "react-icons/fa";
import "./location.css";
import ImageList from "./ImageList/ImageList";
import Map from "./Map/Map";
import RelativeLct from "./RelativeLct/RelativeLct";
import LocationReviews from "../../Components/Reviews/LocationReviews";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Location = ({ dataAllLct, dataTopic, dataReview }) => {
  const { t, i18n } = useTranslation();
  const [mapShow, setMapShow] = useState("mapShow");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [isContentCollapsed, setIsContentCollapsed] = useState(true);

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
    cb.writeText(paragraph).then(() => alert(t("copy")));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleIframeLoad = () => {
    setIsIframeLoading(false);
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
                    {isModalOpen && (
                      <div className="modal-overlay">
                        <div className="modal-content">
                          <div className="topMap">
                            <div className="titleMapLct">
                              {t(dataLocation[0].title1)}
                            </div>
                            <div className="close-btn">
                              <AiFillCloseCircle
                                className="cls-mapShow icon"
                                onClick={closeModal}
                              />
                            </div>
                          </div>
                          {isIframeLoading && (
                            <div className="iframe-loading">
                              <div className="loading-spinner"></div>
                            </div>
                          )}
                          <iframe
                            src={dataLocation[0].ytbLink}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className={
                              isIframeLoading
                                ? "youtube-iframe vid-loading"
                                : "youtube-iframe"
                            }
                            onLoad={handleIframeLoad}
                          ></iframe>
                        </div>
                      </div>
                    )}
                    <div className="title1">
                      <span className="youtube-icon" onClick={openModal}>
                        <FaYoutube
                          style={{
                            cursor: "pointer",
                            fontSize: "24px",
                            color: "red",
                          }}
                        />
                      </span>
                      <span onClick={openModal} style={{ cursor: "pointer" }}>
                        {t(dataLocation[0].title1)}
                      </span>
                    </div>
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
            {/* Preview Section - Full Width */}
            <div className="preview-section" data-aos="fade-up">
              <div className="comment">
                <div className="guide">{t("guide")}</div>
                <div
                  className={`review ${isContentCollapsed ? "collapsed" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html:
                      i18n.language === "vi"
                        ? dataLocation[0].detail_describe
                        : dataLocation[0].detail_describe2,
                  }}
                />
                <button
                  className="toggle-button"
                  onClick={() => setIsContentCollapsed(!isContentCollapsed)}
                >
                  {isContentCollapsed ? t("showMore") : t("hide")}
                </button>
              </div>
            </div>

            {/* Reviews and Suggested Locations Container */}
            <div className="reviews-suggested-container">
              {/* Location Reviews Section */}
              <div className="reviews-section" data-aos="fade-up">
                <LocationReviews id={dataLocation[0].id_location} />
              </div>

              {/* Suggested Locations Section */}
              <div className="suggested-section">
                <div className="relativeLct">
                  <div className="titleRelative">{t("suggest_title")}</div>
                  <RelativeLct data={dataRelative} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Location;
