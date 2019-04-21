/**
 * 第三方库
 */
export enum Libs {
  G2 = 'G2',
  XLSX = 'XLSX'
}

interface ILibsConfig {
  name: Libs;
  path: string;
}

declare var window: any;

export class Utils {
  /**
   * 懒加载第三方库
   * @param lib
   */
  static lazyLoadJs(lib: ILibsConfig): void {
    if (!window[lib.name]) {
      window.lazyLoad('./assets/js/' + lib.path);
    }
  }
}
