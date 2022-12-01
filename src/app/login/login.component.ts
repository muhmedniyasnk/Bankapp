import { Component, OnInit } from '@angular/core';
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

 
  //functions/methods -user defined functions
  //depentancy injection
  constructor(private ds:DataService,private router:Router) { //(1st exicute)
    //it automatically invoke when the object is created
    //object initialization
   }

  ngOnInit(): void {//(2nd exicute)
    //its a life cycle hooks of angular
    //when the component is created at same time it will initialize or authorized
  }
  acnoChange(event:any){
    console.log(event);
    this.acno=event.target.value;
    console.log(this.acno);
    
    
  }
  pswdChange(event:any){
    this.pswd=event.target.value;
    console.log(this.pswd);
    
  }

login(){
  // alert('Login Clicked')
  var acno=this.acno;
  var pswd=this.pswd;
  var userDetails=this.ds.userDetails;
  const result=this.ds.login(acno,pswd)
  if(result){
    alert('login successful');
    this.router.navigateByUrl('dashboard')
  }
  else{
    alert('Login failed');
  }
}

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

}
