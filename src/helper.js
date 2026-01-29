import { periods } from "./lecturesdb.js";
import { DateTime } from 'luxon';
// Determines the current academic week
// semesterStartDate (YYYY-MM-DD format)
function getCurrentAcademicWeek(currentDateParam) {
    const startDate = new Date("2026-01-22");
    if (isNaN(startDate)) {
        throw new Error("Error parsing date");
    }

    const currentDate = new Date(currentDateParam);
    if (isNaN(currentDate)) {
        throw new Error("Error parsing current date");
    }

    startDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    if (currentDate < startDate) {
        throw new Error("Semester has not started");
    }

    const day = startDate.getDay();
    const mondayOffset = day === 0 ? -6 : 1 - day;
    const startMonday = new Date(startDate);
    startMonday.setDate(startDate.getDate() + mondayOffset);

    const diffInDay = Math.floor((currentDate - startMonday) / (1000 * 60 * 60 * 24));
    const weeksSinceStart = Math.floor(diffInDay / 7);

    return (weeksSinceStart % 4) + 1;
}

function isTimePastOrNow(period, date) {
    // periods is a Map where key is period number and value is time string "HH:mm - HH:mm"
    let time = periods.get(period);
    const [startTime] = time.split(' - ');
    if (!/^\d{2}:\d{2}$/.test(startTime)) {
      throw new Error('Invalid time format. Use HH:mm');
    }
  
    // Parse the full js date string from the date picker
    const selectedDateTime = DateTime.fromJSDate(date.selectedDate, { zone: 'local' });
    if (!selectedDateTime.isValid) {
      throw new Error('Invalid ISO date format');
    }
  
    // Extract hours and minutes from the period start time
    const [hoursStr, minutesStr] = startTime.split(':');
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
  
    // Set the time on the selected date (keep the date part, override time)
    const comparisonDate = selectedDateTime.set({
      hour: hours,
      minute: minutes,
      second: 0,
      millisecond: 0
    });
  
    // Compare to now
    return comparisonDate <= DateTime.now();
  }

export { getCurrentAcademicWeek, isTimePastOrNow };