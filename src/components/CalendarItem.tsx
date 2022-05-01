
import './styles/CalendarItem.css';

export const CalendarItem = () => {
  return (
    <div className="calendarDay">
        <span className="calendarDay__dayTitle">
            <time>Lunes</time>
        </span>
        <span className="calendarDay__dayNumber">
            <time>8</time>      
        </span>
    </div>
  )
}
