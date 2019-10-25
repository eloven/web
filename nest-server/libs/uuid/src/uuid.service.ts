import { Injectable } from '@nestjs/common';

@Injectable()
export class UuidService {

    constructor() {}

    public getUUID(str: string): string {
        return str + new Date().getTime();
    }
}
