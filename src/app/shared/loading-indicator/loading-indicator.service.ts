import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingIndicatorService {
 private _isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

 get isLoading$(): Observable<boolean> {
   return this._isLoading$.asObservable();
 }

 show() {
  this._isLoading$.next(true);
 }

 hide() {
   this._isLoading$.next(false);
 }
}
