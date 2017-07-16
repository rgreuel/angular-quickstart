import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me, do this in html <my-app (click)="colorChange()">Toggle Color</my-app>
  template: `
    <h1>{{name}}</h1>
    <p>{{name}} is in the {{region}} region</p>
    <br/>
    <button (click)="addressClick()">Show/Hide address</button>
    <div [hidden]="hideAddress">
      <fieldset>
        <label>Street: </label>{{street}}
      </fieldset>
      <fieldset>
        <label>City: </label>{{city}}
      </fieldset>
      <fieldset>
        <label>Region:</label>
        <select (change)="regionChange($event.target.value)">
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
  image = 'favicon.ico';
  color = 'red';
  street = '123 Ohio Ave';
  city = 'Milwaukee';
  region = 'East';
  hideAddress = false;

  addressClick() {
    this.hideAddress = !this.hideAddress;
  }

  regionChange(region: string) {
    this.region = region;
  }
}
