import React,{useEffect} from 'react'
import './footer.css'
import vid2 from '../../assets/videos/vid2.mp4'
import {FiChevronRight} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 1500})
  },[])
  return (
    <section className="footer" id="footer">
      <div className="videoDiv">
        <video src={vid2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div data-aos='fade-right' data-aos-duration="1000" className="logoDiv">
              <a href="/" className="logo flex">
              <MdOutlineTravelExplore className="icon"/> DanaTravel.
              </a>
            </div>

            <div data-aos='fade-up' className="footerParagraph">
              DanaTravel is a travel website integrates AI technology for easier search of places through images. Currently the website only works within the city of Da Nang, Vietnam. The project was implemented by three university students. Have a good experience on website for u &#128150;
            </div>

            <div data-aos='fade-up' className='footerSocials'>
            <a href='https://twitter.com/HoMinHiu' target="_blank"><AiOutlineTwitter className="icon tw"/></a>
            <a href='https://www.youtube.com/watch?v=Ehku63B2pzQ' target="_blank"><AiFillYoutube className="icon yt"/></a>
            <a href='https://www.instagram.com/explore/tags/danang' target="_blank"><AiFillInstagram className="icon ig"/></a>
            <a href='https://www.tripadvisor.com/Search?q=danang' target="_blank"><FaTripadvisor className="icon ta"/></a>
            </div>
          </div>

          <div className="footerLinks grid">
            <div data-aos='fade-up' data-aos-duration="1500" className="linkGroup">
              <span className="groupTitle">PAGES</span>

              <li className="footerList flex">
                <a href="/"><FiChevronRight className="icon"/>Home</a>
              </li>

              <li className="footerList flex">
                <a href="/locations"><FiChevronRight className="icon"/>Locations</a>
              </li>

              <li className="footerList flex">
               <a href="/#"><FiChevronRight className="icon"/>Search</a>
              </li>

              <li className="footerList flex">
               <a href="/#destinations"><FiChevronRight className="icon"/>Suggest</a>
              </li>

              <li className="footerList flex">
                <a href="/#contact"><FiChevronRight className="icon"/>Contact</a>
              </li>
            </div>
            <div data-aos='fade-up' data-aos-duration="1500" className="linkGroup">
              <span className="groupTitle">MORE APPS</span>

              <li className="footerList flex">
                <a href="https://www.booking.com/" target='_blank'><FiChevronRight className="icon"/>Bookings</a>
              </li>

              <li className="footerList flex">
               <a href="https://www.expedia.com/" target='_blank'><FiChevronRight className="icon"/>Expedia</a>
              </li>

              <li className="footerList flex">
               <a href="https://www.orbitz.com/" target='_blank'><FiChevronRight className="icon"/>Orbitz</a>
              </li>

              <li className="footerList flex">
                <a href="https://www.trivago.com/" target='_blank'><FiChevronRight className="icon"/>Trivago</a>
              </li>

              <li className="footerList flex">
                <a href="https://www.tripadvisor.com" target='_blank'><FiChevronRight className="icon"/>TripAdvisor</a>
              </li>
            </div>
            <div data-aos='fade-up' data-aos-duration="1500" className="linkGroup">
              <span className="groupTitle">FIND MORE</span>

              <li className="footerList flex">
                <a href="https://www.tripadvisor.com/Search?q=England" target='_blank'><FiChevronRight className="icon"/>England</a>
              </li>

              <li className="footerList flex">
                <a href="https://www.tripadvisor.com/Search?q=America" target='_blank'><FiChevronRight className="icon"/>America</a>
              </li>

              <li className="footerList flex">
                <a href="https://www.tripadvisor.com/Search?q=Vietnam" target='_blank'><FiChevronRight className="icon"/>Vietnam</a>
              </li>

              <li className="footerList flex">
                <a href="https://www.tripadvisor.com/Search?q=Europe" target='_blank'><FiChevronRight className="icon"/>Europe</a>
              </li>

              <li className="footerList flex">
                <a href="https://www.tripadvisor.com/Search?q=Japan" target='_blank'><FiChevronRight className="icon"/>Japan</a>
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE FOR DA NANG TRAVEL</small>
            <small>COPYRIGHTS RESERVED - HOMINHIU 2022</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer