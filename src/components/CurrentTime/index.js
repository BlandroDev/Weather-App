import { useEffect, useState } from "react";
import { currentTime } from "functions/CurrentHour";

const CurrentTime = ({ timezone }) => {
  const [second, setSecond] = useState(null);
  const { currentHour } = currentTime(timezone);
  const { currentMonth, hour, min } = currentHour();

  useEffect(() => {
    const changeSeconds = () => setSecond(currentHour().sec);
    const interval = setInterval(changeSeconds, 1000);
    return () => clearInterval(interval);
  }, [second, currentHour]);

  return (
    <div className="CurrentTime">
      <main className="CurrentTime__main">
        <p className="CurrentTime__p--main">{`${currentMonth} ${hour}:${min}hs.`}</p>
      </main>
    </div>
  );
};
export default CurrentTime;
