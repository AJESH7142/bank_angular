import { Component, OnInit } from '@angular/core';

@Component({  //decorators - it is used for meta data
  selector: 'app-newbank',
  templateUrl: './newbank.component.html',
  styleUrls: ['./newbank.component.css']
})
export class NewbankComponent implements OnInit{
  passwordData:any
  data = "banking is easy!"
  placeHolderData = "User name"
  // click = "click"

  constructor(){
    this.passwordData = "password"
  } // creation and initialisation at the same time

  ngOnInit(): void {
    
  }
  login(){
    alert("Signed in")
  }
  uNamechange(event:any){
    console.log(event.target.value);
    // the value entered inside the input field is located inside event object and key target and value
  }
  upassChange(event:any){
    console.log(event.target.value);
    
  }
}
