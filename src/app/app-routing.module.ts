import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: 'login' },
{ path: 'login', component: LoginPageComponent },
{path: 'employees', component: EmployeesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
