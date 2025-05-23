import { useState } from "react";
import WidgetLoader from "./components/WidgetLoader";

function App() {
  const [widgets, setWidgets] = useState([]);

  const addWidget = (name) => {
    const id = Date.now();
    setWidgets((prev) => [...prev, { id, name, version: Date.now() }]);
  };

  const removeWidget = (id) => {
    setWidgets((prev) => prev.filter((w) => w.id !== id));
  };

  const updateWidget = (id) => {
    setWidgets((prev) =>
      prev.map((w) => (w.id === id ? { ...w, version: Date.now() } : w))
    );
  };

  return (
    <div className="app">
      <h1 className="app__header">Dynamic Widgets App</h1>

      <div className="app__controls">
        <button
          onClick={() => addWidget("CounterWidget")}
          className="button button--counter"
        >
          Додати лічильник
        </button>
        <button
          onClick={() => addWidget("ClockWidget")}
          className="button button--clock"
        >
          Додати годинник
        </button>
      </div>

      <div className="app__widgets">
        {widgets.map((widget) => (
          <WidgetLoader
            key={`${widget.id}-${widget.version}`}
            name={widget.name}
            id={widget.id}
            version={widget.version}
            onRemove={() => removeWidget(widget.id)}
            onUpdate={() => updateWidget(widget.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
