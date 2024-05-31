import './index.css'

const Home = () => {
  return (
    <div className='home'>
    <div className='home1'>
        <h1 className='home-head'>Our vision is to improve people’s health and the sustainability of society and the planet</h1>
        <button className='button-nav' type="button">Read More</button>
    </div>
    <div className="video1">
    <video width="600" controls autoPlay>
<source src="https://novonordiskfonden.dk//app/uploads/2022/06/intro_NNF_web_1.mp4" type="video/mp4" />
Your browser does not support the video tag.
</video>
    </div>
    <hr/>
    <h4>Our Focuses Areas</h4>
    </div>
  )
}

export default Home
