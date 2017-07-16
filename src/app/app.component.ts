import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{name}}</h1>
    <p><i>{{name}} is at {{street}} in {{city}} in the {{region}} region</i></p>
    <br>
    <fieldset>
      <label>Name: <input [(ngModel)]="name"></label>
    </fieldset>
    <fieldset>
      <label>Street: <input [(ngModel)]="street"></label>
    </fieldset>
    <fieldset>
      <label>City: <input [(ngModel)]="city"></label>
    </fieldset>
    <br>
    <label><input type="checkbox" [(ngModel)]="hideAddress"> Hide Address</label>

    <div [hidden]="hideAddress">
      <fieldset>
        <label>Street: </label>{{street}}
      </fieldset>
      <fieldset>
        <label>City: </label>{{city}}
      </fieldset>
      <fieldset>
        <label>Region:</label>
        <select [(ngModel)]="region">
          <option>East</option>
          <option>North</option>
          <option>South</option>
          <option>West</option>
        </select>
      </fieldset>
    </div>
  `,
})
export class AppComponent  {
  name = 'Alex Smith';
  street = '123 Ohio Ave';
  city = 'Milwaukee';
  region = 'South';
  hideAddress = false;
}
