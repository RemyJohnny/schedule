import {
    createTheme,
    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTime,
    TimelineTitle,
  } from "flowbite-react";
  import {periods,getFilteredLectures } from "../lecturesdb";
  import { getCurrentAcademicWeek,isTimePastOrNow } from "../helper";
import { DateDisplay } from "./DateDisplay";
import { Freeday } from "./FreeDay";
import { useEffect, useState, useMemo } from "react";

  const TimelineTheme = createTheme({
    timeline: {
    point: {
            marker: {
                base:{
                    vertical: "absolute -left-2 mt-3 h-4 w-4 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
                }
          },
    }, 
    }
  });

  const markPastnPresentEvent= (period, date )=>{
    let pointtheme = TimelineTheme.timeline.point
    
  
  let bool =  isTimePastOrNow(period, date)
    if (bool){
        let timelinetheme = createTheme({
            timeline: {
            point: {
                    marker: {
                        base:{
                            vertical: "absolute -left-2 mt-3 h-4 w-4 rounded-full border border-teal-900 bg-teal-200 dark:border-gray-200 dark:bg-teal-600"
                        }
                  },
            }, 
            }
          });
          pointtheme = timelinetheme.timeline.point
    }
    return pointtheme
  }

  export function Timetable({ date, subGroup }) {

    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
      // Update the refresh key to trigger a re-render
      setRefreshKey((prevKey) => prevKey + 1);
      }, 60000); // Refresh every 60 seconds

      return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    const day = useMemo(() => new Date(date.selectedDate).getDay(), [date.selectedDate]); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
    const week = useMemo(() => getCurrentAcademicWeek(date.selectedDate), [date.selectedDate]);

    const lectures = useMemo(() => 
      getFilteredLectures({ week: week, day: day, subGroup: subGroup.selectedSubGroup }), 
      [week, day, subGroup.selectedSubGroup]
    );
    
    return(
        <>
        <DateDisplay date={date} week={week}/>
        {lectures.length === 0 ? (
            <Freeday />
        ) : (
            <Timeline>
            {lectures.map((lecture) => {
                return (
                    <TimelineItem key={lecture.id}>
                    <TimelinePoint theme={markPastnPresentEvent(lecture.time,date)} />
                    <TimelineContent>
                        <TimelineTime>{periods.get(lecture.time)}</TimelineTime>
                        <TimelineTitle>{lecture.subject}</TimelineTitle>
                        <TimelineBody>
                            <p>{lecture.type} | {lecture.room}</p>
                        <p className="text-xs">{lecture.lecturer}</p>
                        </TimelineBody>
                    </TimelineContent>
                    </TimelineItem>
                );
            })}
            </Timeline>
        )}
        </>
    )
  }