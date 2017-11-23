import { Component } from '@angular/core';

/**
 * Generated class for the DashboardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardComponent {

  text: string;

  constructor() {
    console.log('Hello DashboardComponent Component');
    this.text = 'Hello World';
  }

}
