import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { LiaLinkedin } from "react-icons/lia";
import { IoLogoGithub } from "react-icons/io";
export default function Footer() {
  return (
    <div className='flex flex-col  min-w-0.5'>
   <footer className='  font-semibold  bg-indigo-400 text-slate-900 px-2 py-5 ml-2 mr-2'>
    <div className='flex justify-evenly'>
    <a  href='https://www.facebook.com/mariam.latif.543'>Facbook <CiFacebook className='text-3xl  mt-4 text-slate-900 ml-4 hover:text-slate-200'  /> </a><br/>
    <a  href='https://github.com/maryamlatif'  >Github <IoLogoGithub className='text-2xl text-slate-900 mt-4 ml-4 hover:text-slate-200'   /></a><br/>
    <a href='https://www.linkedin.com/in/maham-latif-48732927a'>Linkedin <LiaLinkedin className='text-3xl text-slate-900 mt-4 ml-4 hover:text-slate-200' /></a><br/>
    <a  href='https://www.instagram.com/mariam.latif' >Instagram<IoLogoInstagram  className='text-2xl text-slate-900 mt-4 hover:text-slate-200' /> </a><br/>
  
    </div>  
   </footer>
    </div>
  )
}
