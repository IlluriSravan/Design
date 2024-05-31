import './index.css'



const Footer = () => {
  return (
    <div className='foot'>
        <div className='top-footer'>
            <div className='section1'>
                <h3 className='foot-text1'>Novo Nordisk Fonden</h3>
                <ul>
                    <li>Tuborg Havnevej 19</li>
                    <li>2900 Hellerup</li>
                    <li>Denmark</li>
                </ul>
                <ul>
                    <li>+ 45 35 27 66 00</li>
                    <li>info@novonordiskfonden.dk</li>
                    
                </ul>
                <ul>
                    <li>CVR: 10 58 29 89</li>
                </ul>
            </div>
            <div className='section2'>
            <h3 className='foot-text1'>Politics</h3>
            <ul>
                    <li>Cookie policy</li>
                    <li>Whistleblower</li>
                    <li>Privacy policy</li>
                    <li>Data Ethics</li>
                    <li>Diversity Policy</li>
                    <li>Electronic invoicing</li>
                    <li>Press</li>
                    <li>Employees</li>
                    <li>Reporting Scams</li>
                </ul>
            </div>
            <div className='section2'>
            <h3 className='foot-text1'>Follow Us</h3>
            <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    
                </ul>
            </div>
        </div>

        <h3 className='foot-text'>Signup for the latest News</h3>
        <p className='foot-text1'>Yes, I would like to receive relevant news from the Novo Nordisk Foundation.</p>
        <form>
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Email Adress'/>
        <button className='submit-button' type="button">Submit</button>
        </form>
        
        <p className='foot-text1'>© 1999-2022, All Rights Reserved</p>
    </div>
  )
}

export default Footer





