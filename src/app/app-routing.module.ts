import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard-page/dashboard-page.component';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { HousesForRentListComponent } from './features/houses/components/houses-for-rent-list/houses-for-rent-list.component';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { RegisterPageComponent } from './features/login/pages/register-page/register-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'houses', component: HousesForRentListComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'dashboard', component: DashboardPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
