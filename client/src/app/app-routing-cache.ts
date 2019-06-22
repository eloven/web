import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

interface RouteHandles {
  [key: string]: DetachedRouteHandle;
}

export class AppRoutingCache implements RouteReuseStrategy {
  public static handles: RouteHandles = {};

  /**
   * 计算url路径
   * @param route
   */
   static getCurrentUrl(route: ActivatedRouteSnapshot) {
    return route['_routerState'].url.replace(/\//g, '_')
      + '_' + (route.routeConfig.loadChildren || route.routeConfig.component.toString().split('(')[0].split(' ')[1]);
  }

  /**
   * 当前路由是否需要存储
   * @param route
   */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.data.keep;
  }

  /**
   * 当前路由是否需要还原
   * @param route
   */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const key = AppRoutingCache.getCurrentUrl(route);
    return !!route.routeConfig && !!AppRoutingCache.handles[key];
  }

  /**
   * 进入路由时触发，判断是否为同一个路由
   * @param future
   * @param curr
   */
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

  /**
   * 离开路由触发，此时缓存路由（key要唯一)
   * @param route
   * @param handle
   */
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    const key = AppRoutingCache.getCurrentUrl(route);
    AppRoutingCache.handles[key] = handle;
  }

  /**
   * 从缓存中获取路由快照
   * @param route
   */
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    if (!route.routeConfig) {
      return null;
    } else {
      const key = AppRoutingCache.getCurrentUrl(route);
      return AppRoutingCache.handles[key];
    }
  }
}
