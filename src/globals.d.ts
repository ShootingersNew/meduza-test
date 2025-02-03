import type { TEventBus } from "meduza-bus/src/types";
declare global {
  interface Window {
    eventBus: TEventBus;
  }
}
