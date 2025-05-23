import { lazy } from "react";

export const widgetMap = {
  CounterWidget: lazy(() => import("./widgets/CounterWidget")),
  ClockWidget: lazy(() => import("./widgets/ClockWidget")),
};
