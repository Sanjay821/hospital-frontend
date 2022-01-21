import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Patient } from './../class/patient';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  

  constructor(private httpClient: HttpClient) { }

  createPatient(patient: Patient): Observable<Object> {
    return this.httpClient.post(`http://localhost:8282/patients/addpatient`, patient);
  }

  getDoctorCount(name?: String): Observable<number> {
    return this.httpClient.get<number>(`http://localhost:8282/patients/getcount/`+name);
  }

  
  getPatient(id?: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`http://localhost:8282/patients/getpatient/`+id);
  }

  updatePatient(patient: Patient):Observable<Object> {
    return this.httpClient.put(`http://localhost:8282/patients/updatepatient`, patient);
  }

  deletepatient(id?: number) {
    return this.httpClient.delete(`http://localhost:8282/patients/deletepatient/`+id); 
 }
}
