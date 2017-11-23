import { Component } from '@angular/core';

/**
 * Generated class for the RegisterComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class RegisterComponent {

  text: string;

  constructor() {
    console.log('Hello RegisterComponent Component');
    this.text = 'Hello World';
  }

}
