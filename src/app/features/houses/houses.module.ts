import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousesForRentListComponent } from './components/houses-for-rent-list/houses-for-rent-list.component';
import { HouseComponent } from './components/house/house.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HousesDetailsComponent } from './pages/houses-details/houses-details.component';
import { HousesCreateComponent } from './pages/houses-create/houses-create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HousesForRentListComponent,
    HouseComponent,
    HousesDetailsComponent,
    HousesCreateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [HousesForRentListComponent]
})
export class HousesModule { }
