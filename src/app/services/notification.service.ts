import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NotificationData } from '../models/notification-data.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notification$: Subject<NotificationData> = new Subject();

  constructor() { }

  get notifications(): Observable<NotificationData> {
    return this.notification$.asObservable();
  }

  show(text: string, duration: number = 5000): void {
    this.notification$.next({ text, duration });
  }

}
