import { addDays, format, lastDayOfMonth } from "date-fns";
import { CalendarDay } from "../interfaces/CalendarDay";
import { getFirstDayOfMonth } from "./firstDayMonth";

const date = new Date();
const firstDayCurrentMonth = getFirstDayOfMonth(
  date.getFullYear(),
  date.getMonth(),
);

const lastDay = parseInt(format(lastDayOfMonth(date), 'd')) 
const actualMonthDays: CalendarDay[] = []
const todayFormatted = format(date, 'EEE/d') // Sun/1
const actualMonthName = format(date, 'MMMM') // May | Jun, etc...

for (let dayIndex = 0; dayIndex < lastDay; dayIndex++) {
    //const day = format(addDays(firstDayCurrentMonth, dayIndex), 'EEE/d/MMMM') // Sun/1/May

    // I create the month days by adding days from the first day of the month
    const day: CalendarDay = {
        dayName: format(addDays(firstDayCurrentMonth, dayIndex), 'EEE'), // Sun
        dayNumber: format(addDays(firstDayCurrentMonth, dayIndex), 'd'), // 1
    }      
    actualMonthDays.push(day)
}

export {
    actualMonthDays,
    actualMonthName,
    todayFormatted
}