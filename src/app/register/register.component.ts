import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  acno="";
  pswd="";
  uname="";

  constructor(private fb:FormBuilder, private ds:DataService,private router:Router) { }

  //registration model
  registrationForm = this.fb.group({
    acno:[''],
    uname:[''],
    pswd:['']
  })

  //control pass to ts to html file

  ngOnInit(): void {
  }
  register(){
    console.log(this.registrationForm);
    
    // alert("Registered")
    var uname=this.registrationForm.value.uname;
    var acno=this.registrationForm.value.acno;
    var pswd=this.registrationForm.value.pswd;

    const result=this.ds.register(acno,uname,pswd);
    if(result){
      alert('register successful')
      this.router.navigateByUrl('')
    }
    else{
      alert('User already registered');
      this.router.navigateByUrl('register')
    }
  }

}
