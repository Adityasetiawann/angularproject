import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { LoginComponent } from './login/login.component';
import { MahasiwaComponent } from './mahasiwa/mahasiwa.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "admin", component: AdminComponent  },
  { path: "dashboard", component: DashboardComponent },
  { path: "dashboard2", component: Dashboard2Component },
  { path: "login", component: LoginComponent },
  { path: "mahasiswa", component: MahasiwaComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
