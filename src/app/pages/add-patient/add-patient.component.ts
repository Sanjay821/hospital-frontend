import { PatientService } from './../../service/patient.service';
import { Patient } from './../../class/patient';
import { DoctorServiceService } from './../../service/doctor-service.service';
import { Doctor } from './../../class/doctor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  doctorName: string[];
  errorMessage?: string;
  patient: Patient = new Patient();
  selectedName: string;

  constructor(private docService : DoctorServiceService,
        private patientService: PatientService) {
          this.doctorName = [];
          this.selectedName = "";
  }

  ngOnInit(): void {
    this.docService.getDoctorName().subscribe(data => {
      this.doctorName = data ;
    })
    this.selectedName = "Select One";
  }

  onSubmit() {
    this.savePatient()
  }

  savePatient() {
    console.log(this.patient)
    this.patientService.createPatient(this.patient).subscribe(data => {
      console.log(this.patient)
    })
    this.errorMessage = "Patient added";
  }

  onSelect(){
    let name = this.selectedName.substring(0, this.selectedName.indexOf("["));
    
    this.docService.getDoctor(name).subscribe(data => {
      this.patient.doc = data;
    })
  }
}

