import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

const components = [
  HeaderComponent,
  FooterComponent,
  ButtonsComponent
];

@NgModule({
  declarations: [
    ...components
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
