import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='flex flex-col gap-5 bg-slate-950 text-white p-6 capitalize'>
        <div className="box1">
            <h3 className='text-4xl capitalize text-center' >These Are Our Companies</h3>
        </div>
        <div className="box2 flex justify-around w-full gap-10"> 
            <ul> 
                <li>  <h5>Getting Start </h5></li>
                <li>  item</li>
                <li>  item</li>
                <li>  item</li>
                <li>  item</li>
                <li>  item</li>
            </ul>
            <ul> 
                <li>  <h5>Getting Start </h5></li>
                <li>  item</li>
                <li>  item</li>
                <li>  item</li>
                <li>  item</li>
                <li>  item</li>
            </ul>
            <ul> 
                <li>  <h5>Getting Start </h5></li>
                <li>  item</li>
                <li>  item</li>
                <li>  item</li>
                <li>  item</li>
                <li>  item</li>
            </ul>
            <ul> 
                <li>  <h5>Getting Start </h5></li>
                <li>  item</li>
                <li>  item</li>
                <li>  item</li>
                <li>  item</li>
                <li>  item</li>
            </ul>
        </div>
        <div className="box3 flex text-center justify-center text-3xl p-4 gap-4 cursor-pointer">
  <div className="hover:text-white p-1 hover:bg-red-800 hover:rounded-lg hover:rotate-180 transition-transform duration-300">
    <FaWhatsappSquare />
  </div>
  <div className="hover:text-white p-1 hover:bg-red-800 hover:rounded-lg hover:rotate-180 transition-transform duration-300">
    <FaInstagram />
  </div>
  <div className="hover:text-white p-1 hover:bg-red-800 hover:rounded-lg hover:rotate-180 transition-transform duration-300">
    <FaGooglePlus />
  </div>
  <div className="hover:text-white p-1 hover:bg-red-800 hover:rounded-lg hover:rotate-180 transition-transform duration-300">
    <FaLinkedin />
  </div>
  <div className="hover:text-white p-1 hover:bg-red-800 hover:rounded-lg hover:rotate-180 transition-transform duration-300">
    <FaFacebook />
  </div>
</div>

        <div className="box4">
            <p className='text-center'>CopyRight 2024. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer




