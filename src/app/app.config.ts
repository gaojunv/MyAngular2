import { OpaqueToken } from '@angular/core';

export let AppConfig = new OpaqueToken('app.config');

export interface AppConfig {//接口用来强提示
    restUrl:string
};