import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class DebugService {

    private isDebugMode: boolean = environment.debug;

    constructor() {}

    log(title: String, data?: JSON| Object| Function) {

        if ( this.isDebugMode) {

            if (data === void(0)) {
                console.log(title);
            } else {
                if (data instanceof Object) {
                    console.log(title, JSON.stringify(data, null, 2));
                }else if (typeof data === "function") {
                    data();
                }else {
                    console.log(title, data);
                }
            }
        }
    }
}
