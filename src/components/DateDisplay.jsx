import { dayNames, monthNames } from "../lecturesdb";

export function DateDisplay({date, week}) {
    let day = dayNames.get(new Date(date.selectedDate).getDay());
    let dateNum = new Date(date.selectedDate).getDate();
    let month = monthNames.get(new Date(date.selectedDate).getMonth());

    

  return (
    <div className="text-sm text-center font-semibold text-gray-500 dark:text-gray-300 mt-4 mb-4">
       ✧  {day}, {dateNum} {month}  ✧ {week} Неделя ✧
    </div>
  );
}