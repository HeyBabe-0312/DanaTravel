import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./contact.css";
import hieu from "../../assets/images/hieu.jpg";
import tram from "../../assets/images/tram.jpg";
import khanh from "../../assets/images/khanh.jpg";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { SiYoutubemusic, SiGmail } from "react-icons/si";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className="contact container section" id="contact">
      <div className="conTitle">
        <h3 data-aos="fade-right" className="tittle">
          {t("home_title2")}
        </h3>
      </div>
      <div className="conContent grid">
        <div data-aos="fade-up" className="singleMember">
          <div className="avatar">
            <img src={hieu} alt="hieu_ava"></img>
          </div>
          <div data-aos="fade-up" className="socialInfo">
            <div className="name">Ho Minh Hieu</div>
            <div className="socialIcon">
              <a href="https://www.facebook.com/minhiuuu" target="_blank">
                <BsFacebook size={30} className="iconSocial fb" />
              </a>
              <a href="https://github.com/HeyBabe-0312" target="_blank">
                <BsGithub size={30} className="iconSocial gh" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCyBl91KCxwPNGZ08CZJU8qQ"
                target="_blank"
              >
                <SiYoutubemusic size={30} className="iconSocial yt" />
              </a>
              <a href="https://hominhiu-portfolio.vercel.app" target="_blank">
                <CgMoreO size={30} className="iconSocial lk" />
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="singleMember">
          <div className="avatar">
            <img src={khanh} alt="khanh_ava"></img>
          </div>
          <div data-aos="fade-up" className="socialInfo">
            <div className="name">Nguyen Van Khanh</div>
            <div className="socialIcon">
              <a
                href="https://www.facebook.com/nguyen.van.khanh.584000/"
                target="_blank"
              >
                <BsFacebook size={30} className="iconSocial fb" />
              </a>
              <a href="mailto:nguyenvkhanh000@gmail.com?subject=Hello&body=I%20want%20to%20connect%20with%20you.">
                <SiGmail size={30} className="iconSocial gm" />
              </a>
              <a href="#" target="_blank">
                <SiYoutubemusic size={30} className="iconSocial yt" />
              </a>
              <a href="#" target="_blank">
                <CgMoreO size={30} className="iconSocial lk" />
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="singleMember">
          <div className="avatar">
            <img src={tram} alt="nghia_ava"></img>
          </div>
          <div data-aos="fade-up" className="socialInfo">
            <div className="name">Bui Thi Bich Tram</div>
            <div className="socialIcon">
              <a
                href="https://www.facebook.com/profile.php?id=100014178876119&rdid=ZNa2UE2Se73TwCih&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Csr1ees6u%2F#"
                target="_blank"
              >
                <BsFacebook size={30} className="iconSocial fb" />
              </a>
              <a href="mailto:tram060804@gmail.com?subject=Hello&body=I%20want%20to%20connect%20with%20you.">
                <SiGmail size={30} className="iconSocial gm" />
              </a>
              <a href="#" target="_blank">
                <SiYoutubemusic size={30} className="iconSocial yt" />
              </a>
              <a href="#" target="_blank">
                <CgMoreO size={30} className="iconSocial lk" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
