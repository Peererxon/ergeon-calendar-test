
import { memo } from 'react';
import { CalendarDay } from '../interfaces/CalendarDay';
import './styles/CalendarItem.css';

interface Props extends CalendarDay {
    isActualDay?: boolean,
    onSelect: ( day:string ) => void
    
}

//We only want to re-render a calenda item if one of our dependencies change
export const CalendarItem = memo( ({ dayName, dayNumber, isActualDay, onSelect, daySelected }: Props) => {
  return (
    <div className='calendarWrapper'>
        <div className={`calendarDay ${ daySelected && 'active' } `} onClick={ () => onSelect( `${dayName}/${dayNumber}` ) }>
          { isActualDay && <div className='calendarDay__today'></div> }
          <span className="calendarDay__dayTitle">
              <time> {dayName} </time>
          </span>
          <span className="calendarDay__dayNumber">
              <time> {dayNumber} </time>      
          </span>
      </div>

    </div>
  )
})
