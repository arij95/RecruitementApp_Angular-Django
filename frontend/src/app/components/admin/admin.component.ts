import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from "../../services/admin.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  useremail = '';
  password = '';

  constructor(private router: Router, private toastr: ToastrService,
              private AdminService: AdminService) {
  }

  ngOnInit(): void {

  }

  signIn() {
    this.AdminService.login(this.useremail, this.password).subscribe((response) => {
      if (response) {
        this.router.navigateByUrl('/admin');
      } else {
        this.toastr.error('Please verify your login informations!', 'Error');
      }
    })
  }

}
