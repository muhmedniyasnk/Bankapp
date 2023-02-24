import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //current username
  currentuser='';

  //curent account number
  currentAcno="";
  

  constructor(private http:HttpClient) { 
    // this.getDetails()
  }
  //saveDetails - to save data to the local storage
  saveDetails(){
    if(this.userDetails){
    //database
    localStorage.setItem('DataBase',JSON.stringify(this.userDetails))
    }
    if(this.currentuser){
    //currentuser
    localStorage.setItem('currentuser',JSON.stringify(this.currentuser))
    }
    if(this.currentAcno){
    //currentacno
    localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno))
    }
 
  }

  // getDetails(){
  //   if(localStorage.getItem('DataBase')){
  //     this.userDetails = JSON.parse(localStorage.getItem('DataBase') || '');
  //   }
  //   if(localStorage.getItem('currentuser')){
  //     this.currentuser = JSON.parse(localStorage.getItem('currentuser') || '');
  //   }
  //   if(localStorage.getItem('currentAcno')){
  //     this.currentAcno = JSON.parse(localStorage.getItem('currentAcno') || '');
  //   }
  // }
   //database
   userDetails:any={
    1000:{acno:1000,username:"amal",password:1000,balance:1000,transaction:[]},
    1001:{acno:1001,username:"priya",password:1001,balance:1000,transaction:[]},
    1002:{acno:1002,username:"maya",password:1002,balance:1000,transaction:[]},

  }

  register(acno:any,uname:any,pswd:any){



    const data={
      acno,
      pswd,
      uname
    }

    return this.http.post('http://localhost:3000/register',data)
    // let userDetails=this.userDetails;

    // if(acno in userDetails){
    //   return false;
    // }
    // else{
    //   userDetails[acno]={
    //     acno,
    //     username,
    //     password,
    //     balance:0,
    //     transaction:[]
    //   }
    //   this.saveDetails();
    //   console.log(userDetails);
    //   return true
      
    // }
  }

  login(acno:any,pswd:any){


    const data={
      acno,
      pswd
    
    }

    return this.http.post('http://localhost:3000/login',data)



    // let userDetails=this.userDetails;
    // if(acno in userDetails){
    //   if(pswd==userDetails[acno]['password']){
    //     this.currentuser=userDetails[acno]['username']
    //     this.currentAcno=acno;
    //     this.saveDetails();
    //     return true;
    //   }
    //   else{
    //     return false;
    //   }
    // }
    // else{
    //   return false;
    // }
  }
  getToken(){
    //fetch token from local storage
    const token = JSON.parse(localStorage.getItem('token')||'');
    //append token inside the header
  }

  

  deposit(acno:any,pswd:any,amt:any){

    const data={
      acno,
      pswd,
      amouunt:amt
    
    }

    return this.http.post('http://localhost:3000/deposit',data)


    // var amount=parseInt(amt)
    // let userDetails=this.userDetails;

    // if(acno in userDetails){
    //   if(pswd==userDetails[acno]['password']){
    //     userDetails[acno]['balance']+=amount;
    //     userDetails[acno]['transaction'].push({
    //       Type:'Credit',
    //       Amount:amount
    //     })
    //     this.saveDetails();
    //     console.log(userDetails);
        
    //     return userDetails[acno]['balance']
      
    //   }
    //   else{
    //     alert('password mismatch')
    //     return false;
    //   }
    // }
  
    // else{
    //   alert('Invalid data')
    //   return false;

    // }

  }


  withdraw(acno:any,pswd:any,amt:any){
    var amount=parseInt(amt)
    let userDetails=this.userDetails;

    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        userDetails[acno]['balance']-=amount;
        userDetails[acno]['transaction'].push({
          Type:'debit',
          Amount:amount
        })

    
        
        return userDetails[acno]['balance']
      }
      else{
        alert('password mismatch')
        return false;
      }
    }
    else{
      alert('Invalid data')
      return false;

    }

  }
  getTransaction(acno:any){
    return this.userDetails[acno]['transaction']
  }
}
