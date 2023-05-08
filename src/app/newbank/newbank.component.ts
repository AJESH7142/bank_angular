import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

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
  uname:any
  psw:any 
  
  constructor(private ds:DataService){
    this.passwordData = "password"
  } // creation and initialisation at the same time

  ngOnInit(): void {
    
  }
  login(){
    // console.log(a.value, b.value);
    alert(`your name is ${this.uname}`)
    alert(`your password is ${this.psw}`)
    alert(this.ds.sdata) //data
    alert(this.ds.checkData()) //method

  }
  // uNamechange(event:any){
  //   this.uname = event.target.value;
  //   // the value entered inside the input field is located inside event object and key target and value
  // }
  
}
//accessSpecifier referenceName:className  inside constructor normal bracket 