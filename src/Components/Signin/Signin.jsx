import React from 'react'
import {FaEnvelope} from 'react-icons/fa'
import {MdLock} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {MdOutlineTravelExplore} from 'react-icons/md'
import './signin.css'
import axios from 'axios'
import { toast,ToastContainer } from "react-toastify";

const Signin = ({signin,removeSignin}) => {
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    const checkLogin = async () =>{
        let email = document.getElementById("emailInp").value
        let password = document.getElementById("passwordInp").value
        if(email===""||password==""){
            toast.info("Please fill all inputs");
        }
        else if (!validateEmail(email)){
            toast.error(email+" is not a valid email");
        }
        else if(password.length<8){
            toast.info("Password too short (least 8 characters)!");
        }
        else{
            const data = {
                email:  email,
                password: password
            }
            try{
            const val = await axios.post("/user/login", data);
            if(val.status===200){
                localStorage.setItem('iduser', val.data.Id_User);
                localStorage.setItem('token', val.data.accessToken);
                toast.success("Sign in successfully!");
                await new Promise(resolve => setTimeout(resolve, 1500))
                window.location.reload();
            }}catch(err){
                if(err.response){
                    toast.error(err.response.data.msg);
                }
            }
        }
    }
    const removeData = () => {
        document.getElementById("emailInp").value=""
        document.getElementById("passwordInp").value=""
        return 0;
    }
    const _handlerClickEnter =(e) => {
        if(e.key === 'Enter'){
            checkLogin();
        }
    }
  return (
    <section className={signin}>
        {signin!="signin"?<ToastContainer autoClose={1000} theme="colored" position="bottom-right"/>:<></>}
        <div className="modal-signin">
            <div className="close-btn">
                <AiFillCloseCircle className='cls-signin icon' onClick={function(e){removeSignin();removeData()}}/>
            </div>
            <div className='logoDiv'>
                <a className='logo-signin flex'>
                    <h1><MdOutlineTravelExplore className='icon-signin'/>DanaTravel.</h1>
                </a>
            </div>
            <div className="signin-text">
                <p className="text">This is a travel website integrates AI technology for easier search of places through images. Sign in to participate in reviews, interact with everyone.</p>
            </div>
            <form>
            <div className="text-box" >
                <input className='input100' type="email" pattern=".+@gmail\.com" autoComplete='off' maxLength={100} placeholder='Email' id="emailInp" onKeyDown={_handlerClickEnter}></input>
                <span className='focus-input100'></span>
                <span className='symbol-input100'>
                    <FaEnvelope className='symbol' aria-hidden="true"/>
                </span>
            </div>
            <div className="text-box">
                <input className='input100' type="password" autoComplete='off' maxLength={20} placeholder='Password' id="passwordInp" onKeyDown={_handlerClickEnter}></input>
                <span className='focus-input100'></span>
                <span className='symbol-input100'>
                    <MdLock className='symbol' aria-hidden="true"/>
                </span>
            </div>
            </form>
            <div className='container-login100'>
                <button className='login100-form-btn' onClick={function(e) {checkLogin()}}>Let's Go</button>
            </div>
        </div>
    </section>
  )
}

export default Signin