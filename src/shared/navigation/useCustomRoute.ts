import { computed, type ComputedRef } from "vue"
import type { RouteLocationNormalizedLoaded } from "vue-router"

export function useCustomRoute(): { route: ComputedRef<RouteLocationNormalizedLoaded | undefined> } {
  const route = computed(() => window.router?.currentRoute.value)
  return { route }
}
