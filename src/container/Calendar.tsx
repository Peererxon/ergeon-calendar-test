import { addDays, format, lastDayOfMonth } from "date-fns";
import Slider, { Settings } from "react-slick";
import { CalendarDay } from "../interfaces/CalendarDay";
import { CalendarItem } from "../components/CalendarItem";
import { getFirstDayOfMonth } from "../utils/firstDayMonth";
import './styles/Calendar.css';
const date = new Date();
const firstDayCurrentMonth = getFirstDayOfMonth(
  date.getFullYear(),
  date.getMonth(),
);
//const result = getDaysInMonth(new Date()) // number of days in the actual month
const lastDay = parseInt(format(lastDayOfMonth(date), 'd')) 
const actualMonthDays: CalendarDay[] = []
const todayFormatted = format(date, 'EEE/d') // Sun/1
const actualMonth = format(date, 'MMMM')

for (let dayIndex = 0; dayIndex < lastDay; dayIndex++) {
    //const day = format(addDays(firstDayCurrentMonth, dayIndex), 'EEE/d/MMMM') // Sun/1/May
    const day: CalendarDay = {
        dayName: format(addDays(firstDayCurrentMonth, dayIndex), 'EEE'), // Sun
        dayNumber: format(addDays(firstDayCurrentMonth, dayIndex), 'd') // 1
    }      
    actualMonthDays.push(day)
}
export const Calendar = () => {
    const settings: Settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7,
      rows: 1,
      arrows: true,
    };
    return (
      <div className="container">
        <h2> {actualMonth}</h2>
        <Slider {...settings}>
            {
              actualMonthDays.map((day, index) => (
                <CalendarItem
                  {...day}
                  key={`${day.dayName}/${day.dayNumber}`}
                  isActualDay={ todayFormatted === (`${day.dayName}/${day.dayNumber}`) }
                />
              ))
            }
        </Slider>
      </div>
    );
}