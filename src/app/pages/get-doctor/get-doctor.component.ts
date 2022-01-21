import { DoctorServiceService } from './../../service/doctor-service.service';
import { PatientService } from './../../service/patient.service';

import { Doctor } from '../../class/doctor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-doctor',
  templateUrl: './get-doctor.component.html',
  styleUrls: ['./get-doctor.component.css']
})
export class GetDoctorComponent implements OnInit {

  doctorName?: String[];
  doctor: Doctor = new Doctor();
  selectedName: string;
  patientsAttended: number;
  show: boolean;
  message: string;

  constructor(private docService: DoctorServiceService,
              private patientService: PatientService)
   {
    this.patientsAttended = 0;
    this.show = false;
    this.selectedName ="";
    this.message = "";
   }

  ngOnInit(): void {
    this.docService.getDoctorName().subscribe(data => {
      this.doctorName = data ;
    })
    this.selectedName = "Select One";
  }

  onSelect(){
    let name = this.selectedName.substring(0, this.selectedName.indexOf("["));
    this.patientService.getDoctorCount(name).subscribe(data => {
      this.patientsAttended = data;
    })
    this.docService.getDoctor(name).subscribe(data => {
      this.doctor = data;
    })
    this.show = true;
  }

  updateDocotor() {
    this.docService.updateDoctor(this.doctor).subscribe(data => {
      this.doctor = data;
      this.ngOnInit()
      this.message = "Doctor Updated Sucessfully";
    })
  }
}
