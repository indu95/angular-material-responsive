import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../menu-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  showMenu : Boolean=false;
  hideBtnClicked : Boolean=false;
  subscription: Subscription;
  constructor(private menuService :MenuServiceService) { 
    this.menuService.showMenu$.subscribe(flag => {
      this.showMenu = flag;
    } );
  }

  ngOnInit() {
   
  }
  toggleMenu(){
    this.showMenu=!this.showMenu;
    this.menuService.setMenu(this.showMenu);
    this.hideBtnClicked=true;
  }
  checkFlag(){
    if(this.showMenu){
           return true;


    }else{
      if( this.hideBtnClicked  && this.showMenu){
        return true;
      }
      else{
        return false;
      }
    }
    
  }
  ngOnDestroy() {
   
    this.hideBtnClicked=false;
}

}
