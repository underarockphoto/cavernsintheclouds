import './Launch.css';
import img from '../../assets/photos/00.jpg'

function Launch(){
    
    return(
        <div className="launch">
           <h3>Book Launch Event!</h3>
           <p>Join us at Laurel Caverns on<br/>Saturday, May 24 and Sunday, May 25, 2025 <br/>for the official launch official of <i>Caverns in the Clouds</i>!</p>
          <h3>Events</h3>
          <p> The following events are being offered on both days:</p>
          <ul>
            <li>Guided tours at 10am and 3pm using the book as a reference.</li>
            <li>12pm Free Presentation about the cave and the book.</li>
            <li>Book signings</li>
            <li>Photo Gallery</li>
          </ul>
          <p>Tours have a capacity of 30 people, please RSVP to:<br/><a href='emailto:sales@underarockphoto.com'>sales@underarockphoto.com</a></p>
          <p>Please note that you will still need to purchase a tour ticket at the front desk upon arrival!<br/>Current tour rates and directions can be found at:
            <br/> <a href="https://laurelcaverns.com/">https://www.laurelcaverns.com</a>
          </p>
        </div>
    )
}
export default Launch