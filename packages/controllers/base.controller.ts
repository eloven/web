export abstract class BaseController<T> {
  /**
   * get
   */
  public abstract get: () => Promise<T>;
  /**
   * post
   */
  public abstract post: () => Promise<T>;
  /**
   * put
   */
  public put: () => Promise<T>;
  /**
   * delete
   */
  public delete: () => Promise<T>;
}
