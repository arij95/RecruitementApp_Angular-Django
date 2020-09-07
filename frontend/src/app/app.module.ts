import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatureFormComponent } from './components/candidature-form/candidature-form.component';
import { AdminComponent } from './components/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CandidatureListComponent } from './components/candidature-list/candidature-list.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import 'hammerjs';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CandidatureDetailsComponent } from './components/candidature-details/candidature-details.component';
import { MatRadioModule } from '@angular/material/radio';
import {ToastrModule} from "ngx-toastr";
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CandidatureComponent } from './components/candidature-form/candidature/candidature.component';


@NgModule({
  declarations: [
    AppComponent,
    CandidatureFormComponent,
    AdminComponent,
    CandidatureListComponent,
    CandidatureDetailsComponent,
    HeaderComponent,
    HomeComponent,
    CandidatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatRadioModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[CandidatureFormComponent]

})
export class AppModule { }
