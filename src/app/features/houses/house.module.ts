import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseForRentListComponent } from './components/house-for-rent-list/house-for-rent-list.component';
import { HouseComponent } from './components/house/house.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HouseDetailsComponent } from './pages/house-details/house-details.component';
import { HouseCreateComponent } from './pages/house-create/house-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    HouseForRentListComponent,
    HouseComponent,
    HouseDetailsComponent,
    HouseCreateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  exports: [HouseForRentListComponent]
})
export class HouseModule { }
