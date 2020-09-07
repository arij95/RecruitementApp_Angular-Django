import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { NotificationService } from '../../services/notification.service';
import { Observable } from "rxjs";


@Component({
  selector: 'app-candidature-form',
  templateUrl: './candidature-form.component.html',
  styleUrls: ['./candidature-form.component.scss']
})
export class CandidatureFormComponent implements OnInit {
  employee: Employee = new Employee();
  candidates: Observable<Employee[]>;

  submitted = false;

  constructor(
    public employeeService: EmployeeService,
    private NotificationService: NotificationService,
    public dialogRef: MatDialogRef<CandidatureFormComponent>,
    private router : Router
    ) { }

 
    ngOnInit() {
      this.reloadData();}

 
    onClear() {
      this.employeeService.form.reset();
      this.employeeService.initializeFormGroup();
      this.NotificationService.warn('Reset');
    }
    
    onSubmit() {
      if (this.employeeService.form.valid) {
        if (!this.employeeService.form.get('id').value){
          this.employeeService.saveEmployee(this.employeeService.form.value).subscribe(data => {
            console.log(data);
            });
        }
        
        else
        {
          this.employeeService.updateEmployee(this.employeeService.form.get('id').value, this.employeeService.form.value)
          .subscribe(data => {
          console.log(data);
         });
        }
        
        
          this.employeeService.form.reset();
          this.employeeService.initializeFormGroup();
          this.NotificationService.success('Votre candidature a été sauvegardé avec succès ');
          this.onClose(); 
          this.reloadData();
      }
    }
  
    onClose() {
      this.employeeService.form.reset();
      this.employeeService.initializeFormGroup();
      this.dialogRef.close();
      this.reloadData();

    }

    reloadData() {
      this.candidates = this.employeeService.getEmployeeList();
    }

  }

  
