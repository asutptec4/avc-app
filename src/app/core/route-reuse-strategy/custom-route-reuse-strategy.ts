import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

// TODO: Fix this strategy to store list of courses component
export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private storedRoutes = new Map<string, DetachedRouteHandle>();

  /**
   * Whether the given route should detach for later reuse.
   * Always returns false for `BaseRouteReuseStrategy`.
   * */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.routeConfig?.path === 'courses';
  }

  /**
   * A no-op; the route is never stored since this strategy never detaches routes for later re-use.
   */
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    if (route.routeConfig?.path != null && handle) {
      this.storedRoutes.set(route.routeConfig.path, handle);
    }
  }

  /** Returns `false`, meaning the route (and its subtree) is never reattached */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    if (route.routeConfig && route.routeConfig.path != null) {
      return !!this.storedRoutes.get(route.routeConfig.path);
    }
    return false;
  }

  /** Returns `null` because this strategy does not store routes for later re-use. */
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    let detached;
    if (route.routeConfig && route.routeConfig.path != null) {
      detached = this.storedRoutes.get(route.routeConfig.path);
    }
    return detached ? detached : null;
  }

  /**
   * Determines if a route should be reused.
   * This strategy returns `true` when the future route config and current route config are
   * identical.
   */
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
