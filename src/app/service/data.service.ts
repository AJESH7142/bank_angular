import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //it can access anything under the root file
})
export class DataService {

  sdata = "service data"

  constructor() { }

  checkData(){
    return "hello hi"
  }
}
//any component can access this variable and method