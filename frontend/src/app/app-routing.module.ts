import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatureFormComponent } from './components/candidature-form/candidature-form.component';
import { AdminComponent } from './components/admin/admin.component';
import { CandidatureListComponent } from './components/candidature-list/candidature-list.component';
import { HomeComponent } from './components/home/home.component';
import { CandidatureComponent } from './components/candidature-form/candidature/candidature.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'cadidature', component: CandidatureComponent },
  { path: 'admin', component: CandidatureListComponent },
  { path: 'login', component: AdminComponent },
  { path: 'home', component: HomeComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
