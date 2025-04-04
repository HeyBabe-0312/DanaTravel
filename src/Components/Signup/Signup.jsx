import React from 'react'
import {FaEnvelope} from 'react-icons/fa'
import {MdLock} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {MdOutlineTravelExplore} from 'react-icons/md'
import './signup.css'
import axios from 'axios'
import { toast,ToastContainer } from "react-toastify";

const Signup = ({signup,removeSignup}) => {
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    const checkSignup = async () =>{
        let email = document.getElementById("emailInfo").value
        let password = document.getElementById("upasswordInp").value
        let repass = document.getElementById("repasswordInp").value
        if(email===""||password===""||repass===""){
            toast.info("Please fill all inputs !");
        }
        else if (!validateEmail(email)){
            toast.error(email+" is not a valid email");
        }
        else if(password.length<8){
            toast.info("Password too short (least 8 characters)!");
        }
        else{
            const data = {
                username: "Username",
                email:  email,
                password: password,
                confpassword: repass,
                phone: ""
            }
            try{
            const val = await axios.post("/user/register", data);
            if(val.status===200){
                toast.success("Register successfully!")
                await new Promise(resolve => setTimeout(resolve, 1500))
                removeData()
                removeSignup()
            }}catch(err){
                if(err.response){
                    toast.error(err.response.data.msg);
                }
            }
        }
    }
    const removeData = () => {
        document.getElementById("emailInfo").value=""
        document.getElementById("upasswordInp").value=""
        document.getElementById("repasswordInp").value=""
        return 0;
    }
    const _handlerClickEnter =(e) => {
        if(e.key === 'Enter'){
            checkSignup();
        }
    }
  return (
    <section className={signup}>
        {signup!="signup"?<ToastContainer autoClose={1000} theme="colored" position="bottom-right"/>:<></>}
        <div className="modal-signup">
            <div className="close-btn">
                <AiFillCloseCircle className='cls-signup icon' onClick={function(e){removeSignup();removeData()}}/>
            </div>
            <div className='logoDiv'>
                <a className='logo-signup flex'>
                    <h1><MdOutlineTravelExplore className='icon-signup'/>DanaTravel.</h1>
                </a>
            </div>
            <div className="signup-text">
                <p className="text">This is a travel website integrates AI technology for easier search of places through images. Sign up to unlock the best of DanaTravel. </p>
            </div>
            <form>
            <div className="text-box" >
                <input className='input100' pattern=".+@gmail\.com" autoComplete='off' type="email" maxLength={100} placeholder='Email' id="emailInfo" onKeyDown={_handlerClickEnter}></input>
                <span className='focus-input100'></span>
                <span className='symbol-input100'>
                    <FaEnvelope className='symbol' aria-hidden="true"/>
                </span>
            </div>
            <div className="text-box">
                <input className='input100' autoComplete='off' type="password" placeholder='Password' maxLength={20} id="upasswordInp" onKeyDown={_handlerClickEnter}></input>
                <span className='focus-input100'></span>
                <span className='symbol-input100'>
                    <MdLock className='symbol' aria-hidden="true"/>
                </span>
            </div>
            <div className="text-box">
                <input className='input100' autoComplete='off' type="password" placeholder='Confirm password' maxLength={20} id="repasswordInp" onKeyDown={_handlerClickEnter}></input>
                <span className='focus-input100'></span>
                <span className='symbol-input100'>
                    <MdLock className='symbol' aria-hidden="true"/>
                </span>
            </div>
            </form>
            <div className='container-login100'>
                <button className='login100-form-btn' onClick={function(e) {checkSignup()}}>Create</button>
            </div>
        </div>
    </section>
  )
}

export default Signup