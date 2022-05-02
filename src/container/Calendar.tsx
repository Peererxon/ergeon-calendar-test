import { addDays, format, lastDayOfMonth } from "date-fns";
import Slider, { Settings } from "react-slick";
import { CalendarDay } from "../interfaces/CalendarDay";
import { CalendarItem } from "../components/CalendarItem";
import { getFirstDayOfMonth } from "../utils/firstDayMonth";
import './styles/Calendar.css';
import { useCallback, useState } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRight from '@mui/icons-material/ArrowCircleRight'
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
        dayNumber: format(addDays(firstDayCurrentMonth, dayIndex), 'd'), // 1
    }      
    actualMonthDays.push(day)
}


export const Calendar = () => {
  const [actualMonthState, setActualMonthState] = useState(actualMonthDays)

    const settings: Settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesPerRow: 1,
      slidesToScroll: 7,
      rows: 1,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
  };
  
  /* Month */
  /* 
      slidesToShow: 1,
      slidesPerRow: 7,
      slidesToScroll: 7,
      rows: 5,
   */
  const handleSelectedDay = (daySelected: string) => {
    console.log(daySelected);
   const newState =  actualMonthState.map((dayOfMonth, index) => {
      return (
        daySelected === (`${dayOfMonth.dayName}/${dayOfMonth.dayNumber}`) ? { ...dayOfMonth, daySelected: true } :  { ...dayOfMonth, daySelected: false }
      )
    })
    console.log(newState);
    
    setActualMonthState(newState)
  }

  function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <ArrowCircleLeftIcon
        onClick={onClick}
        className={className}
        color='primary'
        style={{ ...style }}
        fontSize={ 'large' }
      />
    );
}
  
function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <ArrowCircleRight
      onClick={onClick}
      className={className}
      color='primary'
      style={{ ...style }}
      fontSize={ 'large' }
    />
  );
}

  const handleSelectedDayMemo = useCallback( handleSelectedDay,[]) // to avoid re-renders into the sliders items
  
    return (
      <div className="container">
        <h2> {actualMonth}</h2>
        <Slider {...settings}>
          
            {
              actualMonthState.map((day, index) => (
                <div key={`${day.dayName}/${day.dayNumber}`}>

                  <CalendarItem
                    onSelect={ handleSelectedDayMemo }
                    {...day}
                    isActualDay={ todayFormatted === (`${day.dayName}/${day.dayNumber}`) }
                  />
                </div>
              ))
            }
        </Slider>
      </div>
    );
}