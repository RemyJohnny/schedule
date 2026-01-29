import './App.css'
import { Filter } from './components/Filter'
import { Footer } from './components/footer';
import { Timetable } from './components/timetable';
import { useState } from 'react';


function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSubGroup, setSelectedSubGroup] = useState(1);

      if (!selectedDate) {
        setSelectedDate(new Date());
      }

  return (
    <div className='m-4'>
    <Filter date={{selectedDate,setSelectedDate}} subGroup={{selectedSubGroup,setSelectedSubGroup}}/>
    <Timetable  date={{selectedDate,setSelectedDate}} subGroup={{selectedSubGroup,setSelectedSubGroup}}/>
    <Footer/>
    </div>
  )
}

export default App
