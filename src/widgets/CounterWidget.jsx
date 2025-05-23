import { useEffect, useState } from "react";
import { useEventBus } from "../context/EventBusContext";

function CounterWidget({ id }) {
  const [count, setCount] = useState(0);
  const { subscribe } = useEventBus();

  useEffect(() => {
    const unsubscribe = subscribe("time:update", () => {
      setCount((prev) => prev + 1);
    });

    return () => unsubscribe();
  }, [subscribe]);

  return (
    <div className="widget widget--counter">
      <p className="widget__title">Counter Widget</p>
      <p className="widget__count">Кількість: {count}</p>
      <div className="widget__controls">
        <button
          onClick={() => setCount((c) => c - 1)}
          className="widget__button"
          aria-label="Зменшити"
        >
          -
        </button>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="widget__button"
          aria-label="Збільшити"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CounterWidget;
