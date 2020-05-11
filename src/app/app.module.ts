import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { TopfilterComponent } from './topfilter/topfilter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MorefiltersComponent } from './morefilters/morefilters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
// import { MatFileUploadModule } from "angular-material-fileupload";
import { TabsComponent } from './tabs/tabs.component';
import { DealerAllocationComponent } from './dealer-allocation/dealer-allocation.component';
import { VehicleeventStatusComponent } from './vehicleevent-status/vehicleevent-status.component';
import { ReviewViewComponent } from './review-view/review-view.component';
import { AddreqModalComponent } from './addreq-modal/addreq-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    TopfilterComponent,
    MorefiltersComponent,
    TabsComponent,
    DealerAllocationComponent,
    VehicleeventStatusComponent,
    ReviewViewComponent,
    AddreqModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatChipsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCheckboxModule,
    // MatFileUploadModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
