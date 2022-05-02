import Slider, { Settings } from "react-slick";
import { CalendarItem } from "../components/CalendarItem";
import './styles/Calendar.css';
import { useCallback, useState } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRight from '@mui/icons-material/ArrowCircleRight'
import { actualMonthDays, actualMonthName, todayFormatted } from "../utils/ActualMonth";


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
        <h2> {actualMonthName}</h2>
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