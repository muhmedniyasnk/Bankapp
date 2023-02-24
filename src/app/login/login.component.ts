import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //class - collection of properties and functions
  //properties/variables
  
  aim="Your perfect banking partner";

  account="enter ur account here";

  acno='';
  pswd='';
  registrationForm: any;

   //login model
   loginForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-B0-9]*')]]
  })

  //control pass to ts to html file


 
  //functions/methods -user defined functions
  //depentancy injection
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { //(1st exicute)
    //it automatically invoke when the object is created
    //object initialization
   }

  ngOnInit(): void {//(2nd exicute)
    //its a life cycle hooks of angular
    //when the component is created at same time it will initialize or authorized
  }
 

login(){
  // alert('Login Clicked')


  var acno=this.loginForm.value.acno;
  var pswd=this.loginForm.value.pswd;
  // var userDetails=this.ds.userDetails;
  if(this.loginForm.valid){
  this.ds.login(acno,pswd)
  .subscribe((result:any)=>{
    localStorage.setItem('currentuser',JSON.stringify(result.currentuser));
    localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno));
    localStorage.setItem('token',JSON.stringify(result.token));

    alert(result.message);
    this.router.navigateByUrl('dashboard')

  },
  result=>{
    alert(result.error.message)
  }
  )}
}
}                                   
//   if(result){
//     alert('login successful');
//   }
//   else{
//     alert('Login failed');
//   }
// }

  // if(acno in userDetails){
  //   if(pswd==userDetails[acno]['password']){
  //     alert('Login Successful');
  //     this.router.navigateByUrl('dashboard')
  //   }
  //   else{
  //     alert('Invalid password');
  //   }
  // }
  // else{
  //   alert('Invalid user Details');
  // }


// login(a:any,p:any){
//   // alert('Login Clicked')
//   var acno=a.value;
//   var pswd=p.value;
//   var userDetails=this.userDetails;

//   if(acno in userDetails){    
//     if(pswd==userDetails[acno]['password']){
//       alert('Login Successful');
//     }
//     else{
//       alert('Invalid password');
//     }
//   }
//   else{
//     alert('Invalid user Details');
//   }
// }


