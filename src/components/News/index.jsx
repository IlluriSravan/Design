import './index.css'
import { FaArrowRight } from "react-icons/fa6";


const News = () => {
  return (
    <div className='news'>
    <div className='car-top'>
        <h3>News</h3>
        <p>See latest News <span><FaArrowRight/></span></p>
    </div>
    <div className='car'>
        <div className='car-item'>
            <img src='https://novonordiskfonden.dk//app/uploads/Foto-til-anders-408x282.jpg'/>
            <p>28 May 2024</p>
            <h3>SmartField: New platform set to combat the pressing environmental nitrogen challenges in agriculture</h3>
            <p>Read More <span><FaArrowRight/></span></p>
        </div>
        <div className='car-item'>
            <img src='https://novonordiskfonden.dk//app/uploads/Foto-til-anders-408x282.jpg'/>
            <p>28 May 2024</p>
            <h3>SmartField: New platform set to combat the pressing environmental nitrogen challenges in agriculture</h3>
            <p>Read More <span><FaArrowRight/></span></p>
        </div>
        <div className='car-item'>
            <img src='https://novonordiskfonden.dk//app/uploads/Foto-til-anders-408x282.jpg'/>
            <p>28 May 2024</p>
            <h3>SmartField: New platform set to combat the pressing environmental nitrogen challenges in agriculture</h3>
            <p>Read More <span><FaArrowRight/></span></p>
        </div>
        
    </div>
    </div>
  )
}

export default News