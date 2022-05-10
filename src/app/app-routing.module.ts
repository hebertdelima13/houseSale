import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { HouseCreateComponent } from './features/houses/pages/house-create/house-create.component';
import { HouseDashboardComponent } from './features/houses/pages/house-dashboard/house-dashboard.component';
import { HouseDetailsComponent } from './features/houses/pages/house-details/house-details.component';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { RegisterPageComponent } from './features/login/pages/register-page/register-page.component';
import { AuthGuard } from './shared/guards/auth/auth.guard';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'house-details/:id', component: HouseDetailsComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'dashboard', component: HouseDashboardComponent},
  {path: 'housescreate', component: HouseCreateComponent, canActivate: [AuthGuard]},
  { path: 'housescreate/:id', component: HouseCreateComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
