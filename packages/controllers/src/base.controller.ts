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
  public abstract put: () => Promise<T>;
  /**
   * delete
   */
  public abstract delete: () => Promise<T>;
}
