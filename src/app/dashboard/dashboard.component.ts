import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //deposit
  acno="";
  pswd="";
  amount="";

  //withraw
  acno1="";
  pswd1="";
  amount1="";
  //currentuser properties
  user='';
  sdate:any='';

  
  //deposit model
  depositForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-B0-9]*')]]
  })

  //control pass to ts to html file
   
  //deposit model
  withrowForm = this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd1:['',[Validators.required,Validators.pattern('[a-zA-B0-9]*')]]
  })





  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) {
    // this.user=this.ds.currentuser;
    this.sdate=new Date();
   }

  ngOnInit(): void {
    // 
    this.user=JSON.parse(localStorage.getItem('currentuser')||'');
    console.log(this.user);
    
  }
  Deposit(){
    // alert('deposited')
    var acno=this.depositForm.value.acno;
    var pswd=this.depositForm.value.pswd;
    var amount=this.depositForm.value.amount;
    if(this.depositForm.valid){
    this.ds.deposit(acno,pswd,amount)
    .subscribe((result:any)=>{
      alert(
        result.message)
      
      },
      result=>{
        alert(result.error.message)
      }
    )
    }}
   
  withdraw(){
    // alert('withdrawed')
    var acno=this.withrowForm.value.acno1;
    var pswd=this.withrowForm.value.pswd1;
    var amount=this.withrowForm.value.amount1;

    const result=this.ds.withdraw(acno,pswd,amount)
    if(result){
      alert(`${amount} is debited...available balance is${result}`)
    }
  }

  logout(){
    // alert('Clicked');
    localStorage.removeItem('currentAcno');
    localStorage.removeItem('currentuser');
    this.router.navigateByUrl('');
 
  }
  delete(){
    // alert('clicked');
    this.acno=JSON.parse(localStorage.getItem('currentAcno')||'');
  }
  
oncancel(){
  this.acno="";
}

}
