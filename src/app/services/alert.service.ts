import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {
    private subject = new Subject<any[]>();
    private messages = [];
    private keepAfterNavigationChange = false;

    constructor(private router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    this.keepAfterNavigationChange = false;
                } else {
                    this.subject.next();
                }
            }
        });
    }

    success(title:string, message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.messages.push({severity:'success', summary:title, detail:message});
        this.subject.next(this.messages);
    }

    error(title:string, message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.messages.push({severity:'error', summary:title, detail:message});
        this.subject.next(this.messages);
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
