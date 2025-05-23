import { Suspense, memo } from "react";
import { widgetMap } from "../widgetMap";

const WidgetLoader = memo(({ name, id, onRemove, onUpdate }) => {
  const Widget = widgetMap[name];

  if (!Widget) {
    return (
      <div className="widget-loader__error">
        Помилка: невідомий віджет "{name}"
      </div>
    );
  }

  return (
    <div className="widget-loader">
      <div className="widget-loader__content">
        <Suspense fallback={<div>Завантаження...</div>}>
          <Widget id={id} />
        </Suspense>
      </div>
      <div className="widget-loader__controls">
        <button
          onClick={onUpdate}
          className="widget-loader__button widget-loader__button--update"
        >
          Оновити
        </button>
        <button
          onClick={onRemove}
          className="widget-loader__button widget-loader__button--remove"
        >
          Видалити
        </button>
      </div>
    </div>
  );
});

export default WidgetLoader;
