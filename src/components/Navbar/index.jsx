import {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { TbMathGreater } from "react-icons/tb";
import './index.css'

const Navbar = () => {
    const [ham,setHam]=useState(false)
    console.log(ham)
  return (
    <div className='nav-top'>
    <img src="https://novonordiskfonden.dk//app/themes/nnf/assets/images/NNF_100_years_logo_tagline_blue_RGB_40pct_opacity_UK.svg" className='logo-img'/>
    <div className='item-ham-side1'>
    <h4 className='h4'>What do we support?</h4>
    <h4 className='h4'>How do we work?</h4>
    <h4 className='h4'>Who are we?</h4>
    </div>
    <div className='nav-right'>
        <button type="button" className="button-nav">Apply for Grants</button>
        <h3 className='d3'><span className='DK' >DK</span>/ <span>EN</span></h3>
    </div>
    <button type="button" className='button1' onClick={()=>setHam(pre=>!pre)}><GiHamburgerMenu /></button>
    
    

        <div className={ham?`ham-display`:`ham-hidden`}>
            <div className='item-ham-side'>
            <input type="search" placeholder="Search"/>
            <CiSearch/>
            </div>
            <hr/>
            <div className='item-ham-side'>
                <h3>News And Media </h3>
                <TbMathGreater/>
            </div>
            <div className='item-ham-side'>
                <h3>News And Media </h3>
                <TbMathGreater/>
            </div>
            <div className='item-ham-side'>
                <h3>News And Media </h3>
                <TbMathGreater/>
            </div>
            <div className='item-ham-side'>
                <h3>News And Media </h3>
                <TbMathGreater/>
            </div>
            <div className='item-ham-side'>
                <h3>News And Media </h3>
                <TbMathGreater/>
            </div>
            <div className='item-ham-side'>
                <h3>News And Media </h3>
                <TbMathGreater/>
            </div>
            <div className='item-ham-side'>
                <h3>News And Media </h3>
                <TbMathGreater/>
            </div>
        </div>
    
    </div>
  )
}

export default Navbar