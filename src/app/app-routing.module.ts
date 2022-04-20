import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { HousesForRentListComponent } from './features/houses/components/houses-for-rent-list/houses-for-rent-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'houses', component: HousesForRentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
