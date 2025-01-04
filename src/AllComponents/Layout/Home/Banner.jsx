import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/1.jpeg"
import img2 from "../../../assets/2.jpeg"
import img3 from "../../../assets/3.jpeg"
import img4 from "../../../assets/4.jpeg"
import img5 from "../../../assets/5.jpeg"
import img6 from "../../../assets/6.jpeg"
const Banner = () => {
    return (
        <Carousel>
        <div>
            <img className="brightness-75" src={img1}/>
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img className="brightness-75" src={img2} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img className="brightness-75" src={img3} />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img className="brightness-75" src={img4} />
            <p className="legend">Legend 4</p>
        </div>
        <div>
            <img className="brightness-75" src={img5} />
            <p className="legend">Legend 5</p>
        </div>
        <div>
            <img className="brightness-75" src={img6}/>
            <p className="legend">Legend 6</p>
        </div>
    </Carousel>
    );
};

export default Banner;