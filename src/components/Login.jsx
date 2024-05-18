import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState } from "react";
import {EyeInvisibleOutlined , EyeOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'


function Login() {

  const [visible , setVisible] = useState(true);
  
  const [text] = useTypewriter({
    words: [ 'Medi', 'Chronicle'],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 2000,
  })

  

  return (
    <div className="bg-bgcolor w-full min-h-screen flex flex-col lg:flex-row">
  <div className="bg-cover bg-center w-full lg:w-1/2 min-h-screen" style={{ backgroundImage: "url(img/login1.png)" }}></div>
  <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
    <div className="mt-10  flex flex-col items-center">
      <h2 className="font-sans font-extrabold text-3xl lg:text-4xl text-white">
        Welcome to <span className="text-brandPrimary">&#8796; </span>
        <span className="text-brandPrimary">{text}</span>
        <Cursor/>
      </h2>
      
      <h4 className="font-mono font-semibold text-lg lg:text-xl text-white mt-2">Login to continue</h4>
      <form className=" w-[375px] flex flex-col w-1/2 h-2/3 mt-4 mb-4 p-2 justify-center items-center">
            <input
              className="  mb-4 p-2 rounded-sm drop-shadow-sm w-full"
              type="text"
              placeholder="Enter Username"
              name="username"
              required
            />
        <div className=" flex  ">
            <input
              className=" w-[360px] mb-4 p-2 rounded-sm drop-shadow-sm "
              type={visible ? 'text' : 'password'}
              placeholder="Enter Password"
              name="password"
              required
            />
            <div className=" absolute mx-80 my-2 px-3 cursor-pointer" onClick={() => setVisible(!visible)}>
              {
                visible ? <EyeInvisibleOutlined/> : <EyeOutlined/>
              }
            </div>
            </div>
        <Link className="btn-primary" type="submit"  to="/dashboard">Login</Link>
      </form>
      <div className="flex flex-wrap mr-6 mt-6 text-white text-sm lg:text-base">
        <h5 className="mr-6">Don't have an account?</h5>
        <Link className="text-brandPrimary hover:text-white hover:scale-110 cursor-pointer" to="/signup">Create a new account</Link>
      </div>
    </div>
  </div>
</div>

  );
}

export default Login;
