import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../../../models/employee';
import { EmployeeService } from '../../../services/employee.service';
import { NotificationService } from '../../../services/notification.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.scss']
})
export class CandidatureComponent implements OnInit {
  employee: Employee = new Employee();
  candidates: Observable<Employee[]>;

  submitted = false;

  constructor(
    public employeeService: EmployeeService,
    private NotificationService: NotificationService,
    private router : Router
    ) { }

 
    ngOnInit() {
      }

 
    onClear() {
      this.employeeService.form.reset();
      this.employeeService.initializeFormGroup();
      this.NotificationService.warn('Reset');
    }
    
    onSubmit() {
      if (this.employeeService.form.valid) {
          this.employeeService.saveEmployee(this.employeeService.form.value).subscribe(data => {
            console.log(data);
            });
        
          this.employeeService.form.reset();
          this.employeeService.initializeFormGroup();
          this.NotificationService.success('Votre candidature a été sauvegardé avec succès ');

      }
    }
  
   

  }

  
