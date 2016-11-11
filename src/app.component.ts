import { Component } from 'angular-core';

export class AppClass {
  text: string;
}

@Component({
  selector: 'meowbs-app',
  template: `
    <input type="text" [(ngModel)]="data.text"><br />
    <small>Current value: <b>{{data.text}}</b></small>
  `
})
export class AppComponent {
  data: AppClass = {
    text: "Hello World!"
  }
}
