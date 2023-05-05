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
  //  
  user:any
  password:any
  inpt:any
  constructor(){
    this.passwordData = "password"
  } // creation and initialisation at the same time

  ngOnInit(): void {
    
  }
  login(a:any, b:any){
    // console.log(a.value, b.value);
    this.user = a.value
    this.password = b.value
    this.inpt = {
      usrdta:this.user, pswrsdta:this.password
    }
    console.log(this.user, this.password);
    
    localStorage.setItem(this.user, JSON.stringify(this.inpt))
    alert("login clicked")
    
  }
  // uNamechange(event:any){
  //   this.uname = event.target.value;
  //   // the value entered inside the input field is located inside event object and key target and value
  // }
  
}
