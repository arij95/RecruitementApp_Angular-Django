import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CandidatureFormComponent } from './../candidature-form/candidature-form.component';
import {CandidatureDetailsComponent}  from './../candidature-details/candidature-details.component';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { Employee } from '../../models/employee';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-candidature-list',
  templateUrl: './candidature-list.component.html',
  styleUrls: ['./candidature-list.component.scss']
})


export class CandidatureListComponent implements OnInit {

  dataSource;
  displayedColumns: string[] = ['Nom', 'Prenom', 'Email', 'Num_tel',  'Etat', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  candidates: Observable<Employee[]>;

  id: number;
  constructor(
    private service: EmployeeService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    ) { }

  
  ngOnInit() {
    this.getAllEmployees();
  }
  
  public getAllEmployees(){
   this.service.getEmployeeList().subscribe( results => {
     if (!results) {return ;}
     this.dataSource = new MatTableDataSource(results);
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
     
  });
}

reloadData() {
  this.candidates = this.service.getEmployeeList();
}

onCreate() {
  this.service.initializeFormGroup();
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "80%";
  this.dialog.open(CandidatureFormComponent,dialogConfig);
  this.reloadData();
}

onSearchClear() {
this.searchKey = "";
this.applyFilter();
}

applyFilter() {
this.dataSource.filter = this.searchKey.trim().toLowerCase();
}

onEdit(row){
  this.service.populateForm(row);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "80%";
  this.dialog.open(CandidatureFormComponent,dialogConfig);
  this.reloadData();
}

Details(row){

        
  this.service.populateForm(row);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "80%";
  this.dialog.open(CandidatureDetailsComponent,dialogConfig);
  this.reloadData();
}

onDelete(id){
  if(confirm('Are you sure to delete this record ?')){
    this.service.deleteEmployee(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },);
      this.reloadData();
  this.notificationService.warn('! Deleted successfully');
  this.reloadData();
  }
}

}
