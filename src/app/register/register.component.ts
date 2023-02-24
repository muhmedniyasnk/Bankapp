import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-B0-9]*')]]
  })

  //control pass to ts to html file

  ngOnInit(): void {
  }
  register(){
    console.log(this.registrationForm);
    
  
    
    var uname=this.registrationForm.value.uname;
    var acno=this.registrationForm.value.acno;
    var pswd=this.registrationForm.value.pswd;
    if(this.registrationForm.valid){

       
      // console.log(this.registrationForm.get('uname')?.errors);
      this.ds.register(acno,uname,pswd)
      .subscribe((result:any)=>{
        alert(result.message);
        this.router.navigateByUrl('')
      },
      result=>{
        alert(result.error.message)
      }
      )

      
    }
   

 
  }

}
