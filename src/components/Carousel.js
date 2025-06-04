import Carousel from 'react-bootstrap/Carousel';
import "../css/carousel.css";
import Image1 from "../images/1.jpg"
import Image2 from "../images/2.jpg"
import Image3 from "../images/3.jpg"


const carousel = () => {
    return(
<Carousel id="car">
    <Carousel.Item >
      <img
        className="d-block w-100  carousel  "
        src = {Image1}
        alt="First slide"
      />
      <Carousel.Caption>
        {/* <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100  carousel "
        src={Image2}
        alt="Second slide"
      />

      <Carousel.Caption>
        {/* <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100  carousel "
        src={Image3}
        alt="Third slide"
      />

      <Carousel.Caption>
        {/* <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p> */}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

    )
}
export default carousel;