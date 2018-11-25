import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class IndexDBService {
    //  数据库配置
    private name = 'test-doc';
    private version = 1;
    private db: any = null;

    constructor() {
        if ('indexedDB' in window) {
            // console.log(window.indexedDB);
        } else {
            // @ts-ignore
            window.indexedDB = window.mozIndexedDB || window.webkitIndexedDB;
        }
    }

    /**
     * 打开并创建数据库
     */
    public open(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const req = indexedDB.open(this.name, this.version);
            // 打开DB成功后的回调
            req.onsuccess = (ev: any) => {
                console.log(ev);
                this.db = ev.target.result;
                resolve(this.db);
            };
            req.onerror = reject;
            // 打开新的数据库时，会回调此函数，改变name和version均会建立新的DB，所以都会发生此回调。
            req.onupgradeneeded = (ev: any) => {
                // 如果版本升级要记得删除旧的数据库表再建立新的。
                this.db = ev.target.result;
                const storeNames = this.db.objectStoreNames;
                if (storeNames && storeNames.length > 0) {
                    for (let i = 0; i < storeNames.length; i++) {
                        this.db.deleteObjectStore(storeNames[i]);
                        console.log('deleteObjectStore', storeNames[i]);
                    }
                }
            };
        });
    }

    /**
     * 关闭数据库
     */
    public close() {
        this.db.close();
    }

    /**
     * 删除数据库
     */
    public deleteDB(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            // 先关闭连接再删
            this.close();
            const req = indexedDB.deleteDatabase(this.name);
            req.onsuccess = () => {
                this.db = null;
                resolve();
            };
            req.onerror = reject;
        });
    }

    /**
     * 插入数据
     * @param storeName a
     * @param data a
     */
    public insert(storeName: string, data: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const transaction = this.db.transaction(storeName, 'readwrite');
            const store = transaction.objectStore(storeName);
            const req = store.add(data);
            req.onsuccess = () => {
                resolve(req.result);
            };
            req.onerror = reject;
        });
    }

    /**
     * 批量添加数据
     * @param storeName a
     * @param data a
     */
    public batchInsert(storeName: string, data: any[]): Promise<any> {
        if (data.length === 0) {
            return Promise.resolve();
        } else {
            const transaction = this.db.transaction(storeName, 'readwrite');
            const store = transaction.objectStore(storeName);

            return new Promise<null>((resolve, reject) => {
                data.forEach(row => {
                    store.add(row);
                });
                transaction.oncomplete = resolve;
                transaction.onerror = reject;
            }).catch(err => {
                console.error('添加' + storeName + '失败');
                return Promise.reject(err);
            });
        }
    }

    /**
     * 删除数据
     * @param storeName a
     * @param keyValue a
     */
    public deleteWork(storeName: string, keyValue: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const transaction = this.db.transaction(storeName, 'readwrite');
            const store = transaction.objectStore(storeName);

            const req = store.delete(keyValue);

            req.onsuccess = resolve;
            req.onerror = reject;
        });
    }

    /**
     * 清除全部数据
     */
    public clearAllData(): Promise<any> {
        const storeNameList: Array<string> = [];
        const storeNames = this.db.objectStoreNames;
        if (storeNames && storeNames.length > 0) {
            for (let i = 0; i < storeNames.length; i++) {
                storeNameList.push(storeNames[i]);
            }
        }
        return Promise.all(
            storeNameList.map((storeName) => {
                return this.clear(storeName);
            })
        );
    }

    /**
     * 清空数据
     * @param storeName 数据库名
     */
    public clear(storeName: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const transaction = this.db.transaction(storeName, 'readwrite');
            const store = transaction.objectStore(storeName);

            const req = store.clear();

            req.onsuccess = resolve;
            req.onerror = reject;
        });
    }

    /**
     * 更新数据
     * @param storeName a
     * @param data a
     */
    public update(storeName: string, data: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const transaction = this.db.transaction(storeName, 'readwrite');
            const store = transaction.objectStore(storeName);

            const req = store.put(data);

            req.onsuccess = resolve;

            req.onerror = reject;
        });
    }

    /**
     * 获取数据 by Key
     * @param storeName a
     * @param keyValue a
     */
    public selectByKey(storeName: string, keyValue: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const transaction = this.db.transaction(storeName, 'readonly');
            const store = transaction.objectStore(storeName);

            const req = store.get(keyValue);

            req.onsuccess = function () {
                resolve(req.result);
            };
            req.onerror = reject;
        });
    }

    /**
     * 根据索引获取数据
     * @param storeName a
     * @param indexName a
     * @param indexValue a
     */
    public selectByIndex(storeName: string, indexName: string, indexValue: any): Promise<any[]> {
        return new Promise<any[]>((resolve, reject) => {
            const transaction = this.db.transaction(storeName, 'readonly');
            const store = transaction.objectStore(storeName);
            const index = store.index(indexName);

            const req = index.openCursor(indexValue);
            const result: any[] = [];
            req.onsuccess = function (event) {
                const cursor = event.target.result;
                if (cursor) {
                    result.push(cursor.value);
                    cursor.continue();
                } else {
                    resolve(result);
                }
            };
            req.onerror = reject;
        });
    }

    /**
     * 批量合并数据
     * @param storeName a
     * @param data a
     * @param delFlagColName a
     */
    public batchMerge(storeName: string, data: any[], delFlagColName?: string): Promise<any> {
        // todo 合并数据需要重写
        if (data.length === 0) {
            return Promise.resolve();
        } else {
            const transaction = this.db.transaction(storeName, 'readwrite');
            const store = transaction.objectStore(storeName);

            return new Promise<null>((resolve, reject) => {
                data.forEach(row => {

                    const keyPath = store.keyPath;
                    let keyValue;
                    if (typeof keyPath === 'string') {
                        keyValue = row[keyPath];
                    } else {
                        keyValue = [];
                        keyPath.forEach(key => {
                            keyValue.push(row[key]);
                        });
                    }
                    store.delete(keyValue);
                });
                transaction.oncomplete = resolve;
                transaction.onerror = reject;
            }).catch(err => {
                console.error('更新' + storeName + '表数据失败', err);
                return Promise.reject(err);
            });
        }
    }

    /**
     * 清除30天的数据
     */
    cleanViewDB() {
        this.open().then(() => {
            // 通过IDBDatabase得到IDBTransaction
            const transaction = this.db.transaction('viewedDoc', 'readonly');
            // 通过IDBTransaction得到IDBObjectStore
            const objectStore = transaction.objectStore('viewedDoc');
            // 打开游标，遍历customers中所有数据
            objectStore.openCursor().onsuccess = (event) => {
                const cursor = event.target.result;
                if (cursor) {
                    const key = cursor.key;
                    const rowData = cursor.value;
                    const time1 = new Date(rowData.lastViewTime);
                    const time2 = new Date();
                    if (Math.abs(time2.getTime() - time1.getTime()) > 2592000000) {
                        // 清除三十天前的数据
                        this.deleteWork('viewedDoc', cursor.key);
                    } else {
                    }
                    cursor.continue();
                }
            };
        }).catch(err => {
            console.log(err);
        });
    }

    /**
     * 初始化数据库
     */
    private createDB(): void {
        this.createConfigInfo();
        this.createStoreUserInfo();
        this.createStoreOrgInfo();
        this.createStoreUserOrgInfo();
    }

    /**
     * 创建系统配置表以及索引
     */
    private createConfigInfo(): void {
        const store = this.db.createObjectStore(
            'ConfigInfo',
            {keyPath: 'key'}
        );
    }

    /**
     * 创建用户表以及索引
     */
    private createStoreUserInfo(): void {
        const store = this.db.createObjectStore(
            'UserInfo',
            {keyPath: 'userId'}
        );
    }

    /**
     * 创建组织表及索引
     */
    private createStoreOrgInfo(): void {
        const store = this.db.createObjectStore(
            'OrgInfo',
            {keyPath: 'orgId'}
        );

        store.createIndex(
            'parentOrgIdIndex',
            ['parentOrgId', 'displayOrder'],
            {unique: false}
        );
    }

    /**
     * 创建组织 == 用户表
     */
    private createStoreUserOrgInfo(): void {
        const store = this.db.createObjectStore(
            'UserOrgInfo',
            {keyPath: 'personRoleId'}
        );
        store.createIndex(
            'orgIdIndex',
            'orgId',
            {unique: false}
        );
    }

    /**
     * 创建稿件浏览记录表
     */
    private createViewDB(): void {
        const store = this.db.createObjectStore(
            'viewedDoc',
            {keyPath: 'docId'}
        );

        store.createIndex(
            'viewedDoc',
            'docId',
            {unique: true}
        );
    }

    /**
     * 批量查询稿件浏览信息
     * @param storeName a
     * @param input a
     */
    judgeWatched(storeName: string, input: any[]): Promise<any> {
        if (input.length === 0) {
            return Promise.resolve();
        }
        return Promise.all(
            input.map((data) => {
                return this.selectByKey(storeName, data.docId)
                    .then((res) => {
                        if (res && res.docId) {
                            data.viewed = '1';
                        }

                        return Promise.resolve();
                    });
            })
        ).catch((error) => {
            console.error(error);
            return Promise.reject(error);
        });
    }
}
