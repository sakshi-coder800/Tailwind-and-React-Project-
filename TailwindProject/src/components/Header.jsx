import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  return (
    <header className='flex justify-between bg-slate-950 text-white p-6 capitalize'>
<div className="box1 flex gap-5 items-center">
    <div><FaHome /></div>
    <div>Go to Dashboard </div>
    <div className='dot'></div>
</div>
<div className="box2 ">
    <ul className='flex gap-5 items-center'>
        <li><a href="#"> Ecomm</a></li>
        <li><a href="#"> <FaCartArrowDown /></a></li>
        <li><a href="#">About Us </a></li>
        <li><a href="#">Contact Us </a></li>
        <li><a href="#"> Sign Up </a></li>
        <li><a href="#"> Sign In</a></li>
    </ul>
</div>
    </header>
  )
}

export default Header