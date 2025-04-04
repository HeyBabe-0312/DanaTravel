import React from 'react'
import {MdLock} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import './ChangePass.css'
import axios from 'axios'
import { toast,ToastContainer } from "react-toastify";

const ChangePass = ({changePW,removeChangePW,user}) => {
    const checkChangePW = async () =>{
        let oldpw = document.getElementById("passwordInp").value
        let newpw = document.getElementById("npasswordInp").value
        let renpw = document.getElementById("renpasswordInp").value
        if(oldpw===""||newpw===""||renpw===""){
            toast.info("Please fill all inputs !");
        }
        else if(oldpw.length<8||newpw.length<8){
            toast.info("Password too short (least 8 characters)!");
        }
        else if(oldpw===newpw){
            toast.error("Your password and new password same!");
        }
        else if(newpw!==renpw){
            toast.error("Password and confirm password not match!");
        }
        else{
            const data = {
                id: user.result[0].Id_User,
                oldpass: oldpw,
                password: newpw
            }
            try{
            const val = await axios.put("/user/updatepassword", data);
            if(val.status===200){
                toast.success("Updated password successfully!")
                await new Promise(resolve => setTimeout(resolve, 1500))
                removeChangePW()
                removeData()
            }}catch(err){
                if(err.response){
                    toast.error(err.response.data);
                }
            }
        }
    }
    const removeData = () => {
        document.getElementById("passwordInp").value=""
        document.getElementById("npasswordInp").value=""
        document.getElementById("renpasswordInp").value=""
        return 0;
    }
    const _handlerClickEnter =(e) => {
        if(e.key === 'Enter'){
            checkChangePW();
        }
    }
  return (
    <section className={changePW}>
        {changePW!="changePW"?<ToastContainer autoClose={1000} theme="colored" position="bottom-right"/>:<></>}
    <div className="modal-changePW">
        <div className="close-btn">
            <AiFillCloseCircle className='cls-changePW icon' onClick={function(e){removeChangePW();removeData()}}/>
        </div>
        <form>
        <div className="text-box" >
            <input className='input100' autoComplete='off'  type="password" placeholder="Your password" maxLength={20} onKeyDown={_handlerClickEnter} id="passwordInp"></input>
            <span className='focus-input100'></span>
            <span className='symbol-input100'>
                <MdLock className='symbol' aria-hidden="true"/>
            </span>
        </div>
        <div className="text-box">
            <input className='input100' autoComplete='off'  type="password" placeholder='New password' maxLength={20} onKeyDown={_handlerClickEnter} id="npasswordInp"></input>
            <span className='focus-input100'></span>
            <span className='symbol-input100'>
                <MdLock className='symbol' aria-hidden="true"/>
            </span>
        </div>
        <div className="text-box">
            <input className='input100' autoComplete='off' type="password" placeholder='Confirm password' maxLength={20} onKeyDown={_handlerClickEnter} id="renpasswordInp"></input>
            <span className='focus-input100'></span>
            <span className='symbol-input100'>
                <MdLock className='symbol' aria-hidden="true"/>
            </span>
        </div>
        </form>
        <div className='container-login100'>
            <button className='login100-form-btn' onClick={function(e) {checkChangePW()}}>Save it</button>
        </div>
    </div>
</section>
  )
}

export default ChangePass