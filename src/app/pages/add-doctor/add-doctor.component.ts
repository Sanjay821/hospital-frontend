import { DoctorServiceService } from './../../service/doctor-service.service';
import { Doctor } from './../../class/doctor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  
  doctor: Doctor = new Doctor();
  errorMessage?: string;

  constructor(private doctorService: DoctorServiceService, 
    private router: Router) { 
  }

  ngOnInit(): void {
  }

  saveEmployee() {
    this.doctorService.createDoctor(this.doctor).subscribe(
      data => { this.onError(data);
    },
       error => console.error(error));
  }

  onSubmit() {
    this.saveEmployee();
  }

  onError(data : any) {
    if(data === null) {
      this.errorMessage = "Doctor NAME all-ready exist";
    }
    else {
      this.errorMessage = "Docotr Added Sucessfully"
    }
  }
}
