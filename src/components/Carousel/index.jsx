import './index.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const Carousel = () => {
  return (
    <>
    <div className='car1-top'>
        <div className='car1-first'>
        <h3>Selected projects and initiatives</h3>
        <FaArrowLeft className='car-mar'/>
        <FaArrowRight />
        </div>
        <p>See all our projects <span><FaArrowRight/></span></p>
    </div>
    <div className='car'>
        <div className='car-item'>
            <img src='https://novonordiskfonden.dk//app/uploads/Foto-til-anders-408x282.jpg' className='im-car'/>
            <h3>Challenge Programme</h3> 
            <p>The Novo Nordisk Foundation wishes to make significant contributions to the development and strengthening of the Danish research ecosystems, within research aimed at solving major challenges in health and the sustainability of society and the planet.</p>          
            <p>Read More <span><FaArrowRight/></span></p>
        </div>
        <div className='car-item'>
            <img src='https://novonordiskfonden.dk//app/uploads/Foto-til-anders-408x282.jpg' className='im-car'/>
            <h3>Challenge Programme</h3> 
            <p>The Novo Nordisk Foundation wishes to make significant contributions to the development and strengthening of the Danish research ecosystems, within research aimed at solving major challenges in health and the sustainability of society and the planet.</p>          
            <p>Read More <span><FaArrowRight/></span></p>
        </div>
        <div className='car-item'>
            <img src='https://novonordiskfonden.dk//app/uploads/Foto-til-anders-408x282.jpg' className='im-car'/>
            <h3>Challenge Programme</h3> 
            <p>The Novo Nordisk Foundation wishes to make significant contributions to the development and strengthening of the Danish research ecosystems, within research aimed at solving major challenges in health and the sustainability of society and the planet.</p>          
            <p>Read More <span><FaArrowRight/></span></p>
        </div>
        
    </div>
    </>
  )
}

export default Carousel