import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private sidenavOpenSubject = new BehaviorSubject<boolean>(false);

  constructor() {}

  toggle(): void {
    this.sidenavOpenSubject.next(!this.sidenavOpenSubject.getValue());
  }

  getSidenavOpenObservable(): Observable<boolean> {
    return this.sidenavOpenSubject.asObservable();
  }
}
