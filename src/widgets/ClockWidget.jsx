import { useEffect, useState } from "react";
import { useEventBus } from "../context/EventBusContext";

function ClockWidget({ id }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const { emit } = useEventBus();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString();
      setTime(now);
      emit("time:update", now);
    }, 1000);

    return () => clearInterval(interval);
  }, [emit]);

  return (
    <div className="widget widget--clock">
      <p className="widget__title">Clock Widget</p>
      <p className="widget__time">{time}</p>
    </div>
  );
}

export default ClockWidget;
