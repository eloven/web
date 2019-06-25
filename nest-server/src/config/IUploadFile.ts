/**
 * IUploadFile
 *
 * @author GuoBin on
 */

export const FILR_DIR_PATH = '/Users/guobin/vscode/material-pro/nest-server/static';

export interface IUploadFile {
  /**
   * FormData -- name
   */
  fieldname: string;
  /**
   * 文件名
   */
  originalname: string;
  /**
   * 文件bit
   */
  encoding: string;
  /**
   * 文件类型
   */
  mimetype: string;
  /**
   * 文件buffer
   */
  buffer: Buffer;
}

