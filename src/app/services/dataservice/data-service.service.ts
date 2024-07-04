import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor() { }
  dataEmitter = new EventEmitter<boolean>();

  raisDataEmiterEvent(data:boolean){
    this.dataEmitter.emit(data);
  }


}
