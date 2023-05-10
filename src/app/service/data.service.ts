import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //it can access anything under the root file
})
export class DataService {

  constructor() { }

}
//any component can access this variable and method