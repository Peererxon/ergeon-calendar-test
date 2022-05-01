
import { CalendarDay } from '../interfaces/CalendarDay';
import './styles/CalendarItem.css';

export const CalendarItem = ({ dayName, dayNumber }: CalendarDay ) => {
  return (
    <div className="calendarDay">
        <span className="calendarDay__dayTitle">
            <time> {dayName} </time>
        </span>
        <span className="calendarDay__dayNumber">
            <time> {dayNumber} </time>      
        </span>
    </div>
  )
}
