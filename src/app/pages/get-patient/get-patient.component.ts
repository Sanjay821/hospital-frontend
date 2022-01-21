import { DoctorServiceService } from './../../service/doctor-service.service';
import { Router } from '@angular/router';
import { PatientService } from './../../service/patient.service';
import { Patient } from './../../class/patient';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-patient',
  templateUrl: './get-patient.component.html',
  styleUrls: ['./get-patient.component.css']
})
export class GetPatientComponent implements OnInit {

  patient: Patient = new Patient();
  patientId?: number;
  show: boolean;
  doctorName?: string;
  message : string;
  selectedName: string;
  doctorarray: string[];

  constructor(private patientService: PatientService,
              private docService: DoctorServiceService,
              private router: Router) {
    this.message = "";
    this.show = false;
    this.selectedName = "";
    this.doctorarray = [];
   }

  ngOnInit(): void {
    this.docService.getDoctorName().subscribe(data => {
      this.doctorarray = data ;
    })
    this.show = false;
    this.selectedName = "Select One";
  }

  onSubmit() {
    this.patientService.getPatient(this.patientId).subscribe(data => {
      if(data !== null) {
        this.patient = data;
        this.doctorName = this.patient.doc?.name;
        this.show = true;
      }
      else {
        this.router.navigate(['/error']);
      }
    })  
  }

  updatePatient() {
    console.log(this.patient)
    this.patientService.updatePatient(this.patient).subscribe(data => {
      this.patient = data;
      this.ngOnInit()
      this.message = "Patient Updated Sucessfully";
    })
  }

  deletePatient(id?: number) {
    this.patientService.deletepatient(id).subscribe(data => {
       this.ngOnInit()
        this.message = "Patient Deleted";  
    })
  }

  onSelect(){
    let name = this.selectedName.substring(0, this.selectedName.indexOf("["));
    
    this.docService.getDoctor(name).subscribe(data => {
      this.patient.doc = data;
    })
  }
}
