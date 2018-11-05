import { Component, OnInit,EventEmitter,Output } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuServiceService } from '../menu-service.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  
  mobileScreen: boolean = false;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private menuService :MenuServiceService) { }

  ngOnInit() {
    if ((window.innerWidth) < 600) {
      this.mobileScreen = true;
      
    }
    if((window.innerWidth) < 880){
      this.menuService.setMenu(true);
    }

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  onResize(event) {
    if ((window.innerWidth) < 600) {
      this.mobileScreen = true;
    }
    if((window.innerWidth) < 880){
      this.menuService.setMenu(true);
    }
    else {
     this.menuService.setMenu(false);
      this.mobileScreen = false;
    }

  }
}
