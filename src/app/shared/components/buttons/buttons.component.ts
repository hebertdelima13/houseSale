import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  styleUrls: ['./buttons.component.scss'],
  template: 
  `
  <div class="btn buttons px-4 me-2">
  <ng-content select="[button]"></ng-content>
  </div>
  `
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
