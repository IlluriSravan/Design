import './index.css'



const Areas = () => {
  return (
    <div>
        
        <div className='area'>
            <div className='area-left'>
                <h1>Health</h1>
                <p>Infectious diseases, diabetes, obesity and cardiovascular disease are a threat to global public health.</p>
                <button type="button" className="button-nav">Read More</button>
            </div>
            <div className='area-right'>
                <img src="https://novonordiskfonden.dk//app/uploads/2022/06/Health-cover_636x371px-.jpg"/>
            </div>
        </div>

        <div className='area'>
            <div className='area-left'>
                <h1>Sustainability</h1>
                <p>We must solve the climate crisis and develop tomorrow’s food production so that we can feed a growing world population in a sustainable way.</p>
                <button type="button" className="button-nav">Read More</button>
            </div>
            <div className='area-right'>
                <img src="https://novonordiskfonden.dk//app/uploads/2022/06/Baredygtighed-cover_636x371px.jpg"/>
            </div>
        </div>

        <div className='area'>
            <div className='area-left'>
                <h1>Life Science Ecosystem</h1>
                <p>A robust life science ecosystem is a prerequisite for scientific breakthroughs and for developing new technologies that can help to solve major societal challenges.</p>
                <button  type="button" className="button-nav">Read More</button>
            </div>
            <div className='area-right'>
                <img src="https://novonordiskfonden.dk//app/uploads/Life-Science-cover_636x371px-quick-fix.jpg"/>
            </div>
        </div>

        <div className='area'>
        <div className='area-right'>
                <img src="https://novonordiskfonden.dk//app/uploads/2022/07/Frontpage-Mads-citat-aspect-ratio-960-960.jpg" className='auth-img'/>
            </div>
            <div className='area-left'>
                <h1 className='quot'>World events such as climate change, food shortages, global public health and a pandemic affect our focus areas. In the coming years, we will increase our efforts to help to solve these urgent societal challenges.</h1>
                <p>Mads Krogsgaard Thomsen</p>
                <p>Professor, CEO, Novo Nordisk Foundation</p>
                
            </div>
            
        </div>
        <hr/>
    </div>
  )
}

export default Areas