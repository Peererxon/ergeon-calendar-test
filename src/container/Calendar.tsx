import { addDays, format, lastDayOfMonth } from "date-fns";
import Slider, { Settings } from "react-slick";
import { CalendarDay } from "../interfaces/CalendarDay";
import { CalendarItem } from "../components/CalendarItem";
import { getFirstDayOfMonth } from "../utils/firstDayMonth";
import './styles/Calendar.css';
export const Calendar = () => {
    const date = new Date();
    const firstDayCurrentMonth = getFirstDayOfMonth(
    date.getFullYear(),
    date.getMonth(),
    );
    const todayNumber = parseInt( format( date, 'e' ) )
    //const result = getDaysInMonth(new Date()) // number of days in the actual month
    // new
    const lastDay = parseInt(format(lastDayOfMonth(date), 'd')) 
    const actualMonthDays = [  ]    
    for (let dayIndex = 0; dayIndex < lastDay; dayIndex++) {
        //const day = format(addDays(firstDayCurrentMonth, dayIndex), 'EEE/d/MMMM') // Sun/1/May
        const day: CalendarDay = {
            dayName: format(addDays(firstDayCurrentMonth, dayIndex), 'EEE'),
            dayNumber: format(addDays(firstDayCurrentMonth, dayIndex), 'd')
        }
        actualMonthDays.push(day)
    }
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
            {
                    actualMonthDays.map((day, index) => <CalendarItem {...day} key={ day.dayName + day.dayNumber }/> )
            }
        </Slider>
      </div>
    );
}