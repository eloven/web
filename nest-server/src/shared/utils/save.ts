/**
 * save
 *
 * @author GuoBin on
 */
import { FILR_DIR_PATH, IUploadFile } from '../../config/IUploadFile';
import * as fs from 'fs';
import { forEach } from 'async';

export function saveFile(file: IUploadFile) {
  const date = new Date();
  const dirName = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  fs.open(FILR_DIR_PATH + '/' + dirName + '/', 'wx', (err) => {
    if (err) {
      fs.mkdir(FILR_DIR_PATH + '/' + dirName + '/', { recursive: true }, () => {
        fs.writeFileSync(FILR_DIR_PATH + '/' + dirName + '/' + file.originalname, file.buffer, {flag: 'a'});
      });
    } else {
      fs.writeFileSync(FILR_DIR_PATH + '/' + dirName + '/' + file.originalname, file.buffer, {flag: 'a'});
    }
  });
}

export function saveFiles(files: IUploadFile[]) {
  forEach(files, saveFile);
}
