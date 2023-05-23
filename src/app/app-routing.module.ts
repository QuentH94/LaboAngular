import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'User', component: ComponentsComponent },
  { path: 'CreateUser', component: CreateUserComponent },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  


  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
