import type { RouteLocationRaw, Router } from "vue-router"
import router from "@/router"
// this service provides a simple interface for navigation
// it checks if the router is available and uses it, otherwise falls back to window.location
class NavigationService {
  private routerInstance: Router

  constructor() {
    this.routerInstance = router
    window.router = this.routerInstance
  }

  private get activeRouter(): Router | undefined {
    return window.router ?? this.routerInstance
  }

  navigate(location: RouteLocationRaw) {
    const r = this.activeRouter;
    
    if (r) {
      r.push(location)
    } else {
      console.warn('Router not available, using window.location')
      if (typeof location === 'string') {
        window.location.href = location
      } else if ('path' in location) {
        window.location.href = location.path!
      } else {
        window.location.href = '/'
      }
    }
  }

  replace(location: RouteLocationRaw) {
    const r = this.activeRouter
    if (r) {
      r.replace(location)
    } else {
      if (typeof location === 'string') {
        window.location.replace(location)
      } else if ('path' in location) {
        window.location.replace(location.path!)
      } else {
        window.location.replace('/')
      }
    }
  }

  goBack() {
    const r = this.activeRouter
    if (r) {
      r.go(-1)
    } else {
      window.history.back()
    }
  }

  getCurrentPath(): string {
    const r = this.activeRouter
    return r?.currentRoute.value.path || window.location.pathname
  }

  isRouterAvailable(): boolean {
    return !!this.activeRouter
  }

  getQuery(): Record<string, string> {
    const r = this.activeRouter
    if (r) {
      const query = r.currentRoute.value.query
      const result: Record<string, string> = {}
      for (const [key, value] of Object.entries(query)) {
        if (value && typeof value === 'string') {
          result[key] = value
        }
      }
      return result
    } else {
      return Object.fromEntries(new URLSearchParams(window.location.search))
    }
  }
}

export default new NavigationService()
