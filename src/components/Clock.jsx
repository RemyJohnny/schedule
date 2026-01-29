import { HiClock } from "react-icons/hi";
import { useEffect, useState } from "react";

export function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date());
        }, 1000); // update every second
    
        return () => clearInterval(interval);
      }, []);
    
      const hours = time.getHours().toString().padStart(2, "0");
      const minutes = time.getMinutes().toString().padStart(2, "0");

  return (
    <div className="text-center text-gray-600 font-extrabold dark:text-gray-200 flex items-center justify-center gap-2">
        <HiClock />
      <div>{hours}:{minutes}</div>
    </div>
  );
}

