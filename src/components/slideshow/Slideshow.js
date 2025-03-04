import './Slideshow.css';
import {useState,useEffect} from 'react'
import image0 from '../../assets/photos/trunk-2500.jpg'
import image1 from '../../assets/photos/pearls-2500.jpg'
import image2 from '../../assets/photos/petite-2500.jpg'
import image3 from '../../assets/photos/crossbed-2500.jpg'
import image4 from '../../assets/photos/discoveryentrance-2500.jpg'
import image5 from '../../assets/photos/pillar-2500.jpg'
function Slideshow() {
    const [number, setNumber] = useState(0);
    const images = [image0, image1, image2, image3, image4, image5];
  useEffect(() => {
    const intervalId = setInterval(() => {
        setNumber(prevNumber => (prevNumber + 1) % 6);
        
    }, 5000); 

    return () =>{ 
        clearInterval(intervalId)
    };
  }, []); 

  return (
    <div className="slideshow-container">
      <div className="slideshow">
      {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slideshow ${index}`}
            className={`slide ${number === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;