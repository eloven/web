export abstract class BaseService<T> {
  /**
   * query
   */
  public abstract query: () => Promise<T>
}
