import React, { useEffect, useState } from "react";
import SubItemCarou from "./SubItemCarou/SubItemCarou";
import "./itemCarou.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";

const ItemCarou = ({
  dataLocation,
  dataTopic,
  dataReview,
  checkIsTopic,
  search,
  topicName,
  districtName,
}) => {
  const [topicData, setTopicData] = useState(null);
  useEffect(() => {
    Aos.init({ duration: 1500 });
    setTopicData(dataTopic);
    if (topicName !== null) {
      var newArray = dataTopic?.filter(function (el) {
        return el.tag_name.toString().indexOf(topicName) === 0;
      });
      setTopicData(newArray);
    } else {
      setTopicData(dataTopic);
    }
  }, [dataTopic, topicName]);
  const toastShow = (txt) => {
    toast.info(txt);
  };
  if (topicData) {
    if (checkIsTopic && districtName === null) {
      return (
        <>
          {React.Children.toArray(
            topicData.map((d) => (
              <div data-aos="fade-up" className="item-container">
                <h2 className="title-location">{d.tag_name}</h2>
                <SubItemCarou
                  data={dataLocation}
                  topic={d.id_tag}
                  dataReview={dataReview}
                  search={null}
                  toastShow=""
                  districtName={null}
                  topicName={topicName}
                />
              </div>
            ))
          )}
        </>
      );
    } else if (topicName !== null && search !== null) {
      return (
        <>
          <div data-aos="fade-up" className="item-container">
            <h2 className="title-location"></h2>
            <SubItemCarou
              data={dataLocation}
              topic={dataTopic}
              dataReview={dataReview}
              search={search}
              toastShow={toastShow}
              topicName={topicName}
              districtName={null}
            />
          </div>
        </>
      );
    } else if (topicName !== null && districtName !== null) {
      return (
        <>
          <div data-aos="fade-up" className="item-container">
            <h2 className="title-location"></h2>
            <SubItemCarou
              data={dataLocation}
              topic={dataTopic}
              dataReview={dataReview}
              search={null}
              toastShow={toastShow}
              topicName={topicName}
              districtName={districtName}
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div data-aos="fade-up" className="item-container">
            <h2 className="title-location"></h2>
            <SubItemCarou
              data={dataLocation}
              topic={dataTopic}
              dataReview={dataReview}
              search={search}
              toastShow={toastShow}
              topicName={null}
              districtName={districtName}
            />
          </div>
        </>
      );
    }
  }
};
export default ItemCarou;
