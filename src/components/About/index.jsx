import './index.css'

import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <h1 className='taxt-about'>About the Novo Nordisk Foundation</h1>
            <p className='taxt-about'>The Novo Nordisk Foundation is an independent Danish enterprise foundation. Characterised as a non-profit organisation, it supports philanthropic purposes using funds deriving from its ownership of and investment in companies and other financial assets.</p>
            <p className='taxt-about'>Our History <span><FaArrowRight/></span></p>
            <p className='taxt-about'>Read More about Our Impact <span><FaArrowRight/></span></p>
        </div>
        <div className='mid-about'></div>
        <div className='about-right'>
        <h1 className='taxt-about'>1924</h1>
        <img src='https://novonordiskfonden.dk//app/uploads/2022/08/frontpage-august-krogh-1923-aspect-ratio-636-358.jpg'/>
        <h1 className='taxt-about'>NOVO Holdings</h1>
        <img src='https://novonordiskfonden.dk//app/uploads/2022/08/Frontpage-NH-bund-aspect-ratio-636-358.jpg'/>
        <p className='taxt-about'>The Novo Nordisk Foundation’s investment activities are carried out by the Foundation’s fully owned subsidiary Novo Holdings. The purpose of Novo Holdings is to be a supportive owner of the Novo Group companies and to generate long-term returns on the assets of the Novo Nordisk Foundation. Read more at novoholdings.dk.</p>
                
        
        </div>
    </div>
  )
}

export default About