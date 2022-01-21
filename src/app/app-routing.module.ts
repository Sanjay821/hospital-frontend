import { ErrorComponent } from './pages/error/error.component';
import { GetPatientComponent } from './pages/get-patient/get-patient.component';
import { GetDoctorComponent } from './pages/get-doctor/get-doctor.component';
import { AddPatientComponent } from './pages/add-patient/add-patient.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './pages/add-doctor/add-doctor.component';

const routes: Routes = [

  {path: 'doctor', component: AddDoctorComponent},
  {path: 'patient', component: AddPatientComponent},
  {path: 'getdoctor', component: GetDoctorComponent}, 
  {path: 'getpatient', component: GetPatientComponent},
  {path: "error", component: ErrorComponent},
  {path: '', redirectTo:'doctor', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
