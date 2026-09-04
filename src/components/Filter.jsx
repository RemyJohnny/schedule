import { Datepicker } from "flowbite-react";
import { SubGroupDropdown } from "./SubGroupDropdown.jsx";
import { Clock } from "./Clock.jsx";

export function Filter({date, subGroup }) {

  return (
    <div >
        <div className="mb-4">
            <Clock />
        </div>
        <div className="flex justify-between">
            <Datepicker value={date.selectedDate} onChange={date.setSelectedDate} minDate={new Date(2026, 8, 1)} maxDate={new Date(2027, 0, 1)} language="RU" labelTodayButton="сегодня" labelClearButton="очистить"/>
            <SubGroupDropdown subgroup={ subGroup }/>
        </div>
    </div>
  )
}
