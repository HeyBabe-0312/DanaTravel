import React, { useEffect } from "react";
import "./main.css";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { TiStarHalfOutline } from "react-icons/ti";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Main = ({ allDataLct, topic }) => {
  const { t } = useTranslation();

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
  const getTopic = (id) => {
    var findTopic = topic.filter(function (el) {
      return el.id_tag.toString().indexOf(id) === 0;
    });
    return findTopic[0].tag_name.toUpperCase();
  };
  const sortSuggest = (a, b) => {
    return b.suggest - a.suggest;
  };
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className="main container section" id="destinations">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          {t("home_title1")}
        </h3>
      </div>

      <div className="secContent grid">
        {allDataLct
          .sort(sortSuggest)
          .slice(0, 6)
          .map(
            ({
              id_location,
              center_img,
              name,
              stars,
              id_tag,
              describes,
              slug,
            }) => {
              return (
                <div
                  key={id_location}
                  data-aos="fade-up"
                  className="singleDestination"
                >
                  <div className="imageDiv">
                    <img src={center_img} alt={name} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{t(name)}</h4>
                    <div className="fees flex">
                      <div className="topic">
                        <p>{getTopic(id_tag)}</p>
                      </div>
                      <div className="stars">{showStars(stars)}</div>
                    </div>

                    <div className="desc">
                      <p>{t(describes)}</p>
                    </div>
                    <a href={`./location/${slug}`}>
                      <button className="btn flex">
                        {t("detail")}{" "}
                        <HiOutlineClipboardCheck
                          className="icon"
                          style={{ position: "relative", top: "-1px" }}
                        ></HiOutlineClipboardCheck>
                      </button>
                    </a>
                  </div>
                </div>
              );
            }
          )}
      </div>
      <div data-aos="fade-up" data-aos-duration="500" className="btn-more">
        <a href="/locations" style={{ fontWeight: "bold" }}>
          {t("more")}
        </a>
      </div>
    </section>
  );
};

export default Main;
