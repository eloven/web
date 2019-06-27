/**
 * save
 *
 * @author GuoBin on
 */
import { FILE_DIR_PATH, IUploadFile } from '../config/IUploadFile';
import * as fs from 'fs';
import { forEach } from 'async';

export function saveFile(file: IUploadFile) {
  const date = new Date();
  const dirName = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  fs.open(FILE_DIR_PATH + '/' + dirName + '/', 'wx', (err) => {
    if (err) {
      fs.mkdir(FILE_DIR_PATH + '/' + dirName + '/', { recursive: true }, () => {
        fs.writeFileSync(FILE_DIR_PATH + '/' + dirName + '/' + file.originalname, file.buffer, {flag: 'a'});
      });
    } else {
      fs.writeFileSync(FILE_DIR_PATH + '/' + dirName + '/' + file.originalname, file.buffer, {flag: 'a'});
    }
  });
}

export function saveFiles(files: IUploadFile[]) {
  forEach(files, saveFile);
}
