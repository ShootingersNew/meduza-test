import type { TEventBus } from "meduza-bus/src/types";
import type { Router } from "vue-router";
import type { Pinia } from "pinia";
import i18n from "./shared/i18n/i18n";

declare global {
  interface Window {
    eventBus: TEventBus;
    router?: Router;
    pinia?: Pinia;
    i18n?: typeof i18n;
  }
}
