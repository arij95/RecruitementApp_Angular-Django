import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };
  selectedEmployee: Employee = new Employee();
  employees: Employee[];

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(0),
    Nom: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    Prenom: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    Email: new FormControl('', [Validators.email, Validators.maxLength(200)]),
    Date_de_naissance: new FormControl(null),
    Num_tel: new FormControl('', [Validators.required, Validators.minLength(8)]),
    Disponibilite: new FormControl(0,[Validators.pattern(/[0-6]/)]),
    Experience: new FormControl(0,[Validators.pattern(/[0-999]/)]),
    Cv: new FormControl('', [Validators.required]),
    Message: new FormControl(null),
    Etat: new FormControl('Nouvelle'),
  });

 

  

  initializeFormGroup() {
    this.form.setValue({
      id: 0,
      Nom: '',
      Prenom: '',
      Email: '',
      Date_de_naissance: null,
      Num_tel: '',
      Disponibilite: 0,
      Experience: 0,
      Cv: '',
      Message: null,
      Etat: 'Nouvelle',
    });
  }
  saveEmployee(employee: Employee) {
    return this.http.post('http://127.0.0.1:8000/api' + '/employee/', employee);
  }

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://127.0.0.1:8000/api' + '/employee/' );
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get('http://localhost:8081/api/researchpaper/'+ id+ '/');
  }

  updateEmployee(id: string, employee: Employee) {
    return this.http.put('http://127.0.0.1:8000/api' + '/employee/' +id+'/', employee);
  }

  deleteEmployee(id: string) {
    return this.http.delete(environment.apiBaseUrl + '/employee' + `/${id}/`);
  }

  populateForm(employee) {
    this.form.setValue(employee);
  }

}