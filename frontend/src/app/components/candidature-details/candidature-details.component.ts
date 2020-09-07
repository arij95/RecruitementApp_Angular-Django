import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CandidatureFormComponent } from './../candidature-form/candidature-form.component';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { Employee } from '../../models/employee';
import { NotificationService } from '../../services/notification.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-candidature-details',
  templateUrl: './candidature-details.component.html',
  styleUrls: ['./candidature-details.component.scss']
})
export class CandidatureDetailsComponent implements OnInit {

  employee: Employee = new Employee();
  candidates: Observable<Employee[]>;
  public form: FormGroup;

  submitted = false;

  constructor(
    public employeeService: EmployeeService,
    private NotificationService: NotificationService,
    public dialogRef: MatDialogRef<CandidatureFormComponent>
        ) { }

 
    ngOnInit() {
      this.reloadData();      
    
  }

 
    onClear() {
      this.employeeService.form.reset();
      this.employeeService.initializeFormGroup();
      this.NotificationService.warn('Reset');
    }
    
    onSubmit() {
      if (this.employeeService.form.valid) {
        
          this.employeeService.updateEmployee(this.employeeService.form.get('id').value, this.employeeService.form.value)
          .subscribe(data => {
          console.log(data);
         });   
          this.employeeService.form.reset();
          this.employeeService.initializeFormGroup();
          this.NotificationService.success('Changement d'+'état du candidature avec succès');
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

  
