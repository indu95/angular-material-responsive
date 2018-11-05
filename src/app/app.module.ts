
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatAutocompleteModule,MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatMenuModule,  MatStepperModule,MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,MatSelectModule, MatCardModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Routes, RouterModule } from '@angular/router';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { WizardComponent } from './wizard/wizard.component';
import { SampleCompComponent } from './sample-comp/sample-comp.component';
import { HomeComponent } from './home/home.component';
import { Comp2Component } from './comp2/comp2.component';
const appRoutes: Routes = [
  {
    path: 'control-panel', component: ControlPanelComponent,
    children: [
      {
        path: 'wizard', component: WizardComponent,
        
        children: [

        ]
      },{
        path: 'comp2', component: Comp2Component
      }
     
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  
  { path: 'sample-comp', component: SampleCompComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    WizardComponent,
    SampleCompComponent,
    HomeComponent,
    Comp2Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    ReactiveFormsModule,MatFormFieldModule,
    MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule,
  MatStepperModule,
  MatButtonModule,MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,MatSelectModule, MatCardModule,
  RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
