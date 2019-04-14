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
  static lazyLoad(lib: ILibsConfig) {
    if (!window[lib.name]) {
      console.log(lib);
      window.lazyLoad('./assets/js/' + lib.path);
    }
  }
}
