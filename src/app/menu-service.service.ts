import { Injectable ,EventEmitter} from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  public showMenu$ = new Subject<Boolean>();


  constructor() { 
    
  }
 public setMenu(flag:Boolean){
    this.showMenu$.next(flag);
  }

}
