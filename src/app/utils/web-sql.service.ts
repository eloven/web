import {Injectable} from '@angular/core';

export interface WebSql {
    name: string;
    version: string;
    description: string;
    size: number;
}

export interface LogsData {
    id: number;
    log: string;
}

@Injectable({providedIn: 'root'})
export class WebSqlService {
    private db;
    private config: WebSql;

    constructor() {
    }

    /**
     * 创建数据库
     * @param config 配置
     */
    createDatabase(config: WebSql) {
        // @ts-ignore
        this.db = window.openDatabase(config.name, config.version, config.description, config.size);
        this.config = config;
    }

    /**
     * 创建 LOGS 数据表
     */
    createTable() {
        // @ts-ignore
        const db = window.openDatabase(this.config.name, this.config.version, this.config.description, this.config.size);
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
        });
    }

    /**
     * 插入 LOGS 数据
     */
    insertData(data: LogsData) {
        // @ts-ignore
        const db = window.openDatabase(this.config.name, this.config.version, this.config.description, this.config.size);
        db.transaction((tx) => {
            tx.executeSql(`INSERT INTO LOGS (id, log) VALUES (${data.id}, ${data.log})`);
        });
    }

    /**
     * 读取数据库数据
     */
    readData(): Promise<any> {
        return new Promise((resolve, reject) => {
            // @ts-ignore
            const db = window.openDatabase(this.config.name, this.config.version, this.config.description, this.config.size);
            const response = [];
            db.transaction((tx) => {
                tx.executeSql(`SELECT *
                               FROM LOGS`, [], (ab, result) => {
                    if (result.rows.length > 0) {
                        console.log(result.rows);
                        for (let i = 0; i < result.rows.length; i++) {
                            const obj: LogsData = {
                                id: result.rows[i].id,
                                log: result.rows[i].log,
                            };
                            response.push(obj);
                        }
                        resolve(response);
                    } else {
                        reject('查询数据为空');
                    }
                });
            });
        });
    }
}
