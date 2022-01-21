import { PatientService } from './service/patient.service';
import { DoctorServiceService } from './service/doctor-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDoctorComponent } from './pages/add-doctor/add-doctor.component';
import { AddPatientComponent } from './pages/add-patient/add-patient.component';
import { GetDoctorComponent } from './pages/get-doctor/get-doctor.component';
import { GetPatientComponent } from './pages/get-patient/get-patient.component';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDoctorComponent,
    AddPatientComponent,
    GetDoctorComponent,
    GetPatientComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DoctorServiceService, PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
