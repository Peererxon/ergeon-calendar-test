import Slider, { Settings } from "react-slick";
import { CalendarItem } from "./CalendarItem";
export const SlockCarousel = () => {
    const settings: Settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7,
      arrows: true,
    };
    return (
      <div className="container">
        <h2> Single Item</h2>
        <Slider {...settings}>
                <CalendarItem />
                <CalendarItem />
                <CalendarItem />
                <CalendarItem />
                <CalendarItem />
                <CalendarItem />
                <CalendarItem />
                <CalendarItem />
                <CalendarItem />
                <CalendarItem />
                <CalendarItem />
                <CalendarItem />
                <CalendarItem />
                <CalendarItem />
        </Slider>
      </div>
    );
}