import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousesForRentListComponent } from './components/houses-for-rent-list/houses-for-rent-list.component';
import { HouseComponent } from './components/house/house.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';



@NgModule({
  declarations: [
    HousesForRentListComponent,
    HouseComponent,
    HousesPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HousesForRentListComponent]
})
export class HousesModule { }
