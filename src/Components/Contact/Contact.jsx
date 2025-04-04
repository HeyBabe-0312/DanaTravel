import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './contact.css'
import hieu from '../../assets/images/hieu.jpg'
import nghia from '../../assets/images/nghia.png'
import minh from '../../assets/images/minh.jpg'
import {BsFacebook,BsGithub} from 'react-icons/bs'
import {CgMoreO} from 'react-icons/cg'
import {SiYoutubemusic} from 'react-icons/si'

const Contact = () => {
    useEffect(()=>{
        Aos.init({duration: 1500})
      },[])
  return (
    <section className='contact container section' id="contact">
         <div className="conTitle">
        <h3 data-aos='fade-right' className="tittle">
          Contact our team
        </h3>
      </div>
        <div className="conContent grid">
            <div data-aos='fade-up' className="singleMember">
                <div className="avatar">
                    <img src={hieu} alt="hieu_ava"></img>
                </div>
                <div data-aos='fade-up' className="socialInfo">
                    <div className="name">Ho Minh Hieu<a href='https://en.wikipedia.org/wiki/Front-end_web_development' target="_blank">(FE)</a></div>
                    <div className="socialIcon">
                        <a href="https://www.facebook.com/minhiuuu" target="_blank">
                            <BsFacebook size={30} className='iconSocial fb'/>
                        </a>
                        <a href="https://github.com/HeyBabe-0312" target="_blank">
                            <BsGithub size={30} className='iconSocial gh'/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCyBl91KCxwPNGZ08CZJU8qQ" target="_blank">
                            <SiYoutubemusic size={30} className='iconSocial yt'/>
                        </a>
                        <a href="https://hominhiu-portfolio.vercel.app" target="_blank">
                            <CgMoreO size={30} className='iconSocial lk'/>
                        </a>
                    </div>
                </div>
            </div>
            <div data-aos='fade-up' className="singleMember">
                <div className="avatar">
                    <img src={minh} alt="minh_ava"></img>
                </div>
                <div data-aos='fade-up' className="socialInfo">
                    <div className="name">Ho Ngoc Hoang Minh<a href='https://en.wikipedia.org/wiki/Artificial_intelligence' target="_blank">(AI)</a></div>
                    <div className="socialIcon">
                        <a href="https://www.facebook.com/minh.hongochoang" target="_blank">
                            <BsFacebook size={30} className='iconSocial fb'/>
                        </a>
                        <a href="#" target="_blank">
                            <BsGithub size={30} className='iconSocial gh'/>
                        </a>
                        <a href="#" target="_blank">
                            <SiYoutubemusic size={30} className='iconSocial yt'/>
                        </a>
                        <a href="#" target="_blank">
                            <CgMoreO size={30} className='iconSocial lk'/>
                        </a>
                    </div>
                </div>
            </div>
            <div data-aos='fade-up' className="singleMember">
                <div className="avatar">
                    <img src={nghia} alt="nghia_ava"></img>
                </div>
                <div data-aos='fade-up' className="socialInfo">
                    <div className="name">Luu Van Nghia<a href="https://en.wikipedia.org/wiki/Back-end_database" target="_blank">(BE)</a></div>
                    <div className="socialIcon">
                        <a href="https://www.facebook.com/luuvan.nghia.90" target="_blank">
                            <BsFacebook size={30} className='iconSocial fb'/>
                        </a>
                        <a href="https://github.com/luunghia187" target="_blank">
                            <BsGithub className='iconSocial gh' size={30} />
                        </a>
                        <a href="#" target="_blank">
                            <SiYoutubemusic size={30} className='iconSocial yt'/>
                        </a>
                        <a href="#" target="_blank">
                            <CgMoreO size={30} className='iconSocial lk'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
