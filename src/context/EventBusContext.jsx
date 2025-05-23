import { createContext, useContext, useRef } from "react";

const EventBusContext = createContext(null);

export function EventBusProvider({ children }) {
  const subscribers = useRef({});

  const emit = (event, data) => {
    (subscribers.current[event] || []).forEach((callback) => callback(data));
  };

  const subscribe = (event, callback) => {
    if (!subscribers.current[event]) {
      subscribers.current[event] = [];
    }
    subscribers.current[event].push(callback);

    return () => {
      subscribers.current[event] = subscribers.current[event].filter(
        (cb) => cb !== callback
      );
    };
  };

  const bus = {
    emit,
    subscribe,
  };

  return (
    <EventBusContext.Provider value={bus}>{children}</EventBusContext.Provider>
  );
}

export function useEventBus() {
  return useContext(EventBusContext);
}
