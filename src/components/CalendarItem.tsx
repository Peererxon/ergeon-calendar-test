
import { CalendarDay } from '../interfaces/CalendarDay';
import './styles/CalendarItem.css';

interface Props extends CalendarDay {
    isActualDay?: boolean,
    isSelected?: boolean,
    
}

export const CalendarItem = ({ dayName, dayNumber, isActualDay }: Props ) => {
  return (
    <div className="calendarDay">
        { isActualDay && <div className='calendarDay__today'></div> }
        <span className="calendarDay__dayTitle">
            <time> {dayName} </time>
        </span>
        <span className="calendarDay__dayNumber">
            <time> {dayNumber} </time>      
        </span>
    </div>
  )
}
