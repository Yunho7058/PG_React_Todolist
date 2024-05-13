import { useEffect, useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState<Date>(new Date());

  setInterval(() => {
    let date = new Date();
    setTime(date);
  }, 1000);

  return (
    <div>
      시계
      <div>현재 시간 : {time.toLocaleTimeString()}</div>
    </div>
  );
};
export default Timer;
