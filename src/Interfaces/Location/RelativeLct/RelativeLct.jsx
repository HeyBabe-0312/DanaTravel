import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { TiStarHalfOutline } from "react-icons/ti";
import "./relativeLct.css";
import { useTranslation } from "react-i18next";

const RelativeLct = ({ data }) => {
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
  if (data) {
    return (
      <section>
        {React.Children.toArray(
          data.map((d) => (
            <div className="bgRelative">
              <div className="itemRelative">
                <a href={`/location/${d.slug}`}>
                  <div className="imgRelative">
                    <img
                      src={d.center_img}
                      className="avRelative"
                      alt="avaRelative"
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
      </section>
    );
  }
};

export default RelativeLct;
