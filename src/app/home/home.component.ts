import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig}  from 'ngx-bootstrap/datepicker'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  title = 'home';
  datepickerConfig :Partial<BsDatepickerConfig>; // donot want to set all properties
  saveUsername : boolean = false;

  AdultCount : number = 1;
  InfantCount : number = 1;
  ChildCount : number = 1;

  toggleEconomy : boolean = false;
  toggleBusiness : boolean = false;
  toggleUSD : boolean = false;
  toggleEUR : boolean = false;

  constructor(){
   this.datepickerConfig = Object.assign({},
     {
        containerClass: 'theme-orange',
        showWeekNumbers: false,
        minDate: new Date(2019, 0, 1),
        maxDate: new Date(2019, 11, 31),
        dateInputFormat: 'DD/MM/YYYY'
    }
)
}
  onDecrClick(PaxValue:HTMLInputElement) : void {  
    
    console.log((<HTMLInputElement>PaxValue).value);
    var temp = parseInt((<HTMLInputElement>PaxValue).value);
    var PaxType = (<HTMLInputElement>PaxValue).name;

    if(temp > 0 )
    {
      if(PaxType == "Adult")
      {
        this.AdultCount = temp -  1;
      }
      if(PaxType == "Children")
      {
        this.ChildCount = temp - 1;
      }
      if(PaxType == "Infant" )
      {
        this.InfantCount = temp - 1;
      }
    }
     
  }
  onIncrClick(PaxValue:HTMLInputElement) : void {  
  
    console.log((<HTMLInputElement>PaxValue).value);
    var temp = parseInt((<HTMLInputElement>PaxValue).value);
    var PassengerType = (<HTMLInputElement>PaxValue).name;

    if(PassengerType == "Adult")
    {
      this.AdultCount = temp +  1;
    }
    if(PassengerType == "Children")
    {
      this.ChildCount = temp +  1;
    }
    if(PassengerType == "Infant" )
    {
      this.InfantCount = temp +  1;
    }
  }

  onConfirm() : void{
       this.saveUsername = false;
  }
  enableDisableRuleForEconomy() {
    this.toggleBusiness = false;
    this.toggleEconomy = !this.toggleEconomy;
   
  }
  enableDisableRuleForBusiness(){
    this.toggleBusiness = !this.toggleBusiness;
    this.toggleEconomy = false;
  }

  enableDisableRuleForUSD(){
   
    this.toggleEUR = false;
    this.toggleUSD = !this.toggleUSD;
  }

  enableDisableRuleForEUR(){
   
    this.toggleEUR= !this.toggleEUR;
    this.toggleUSD = false;
  }
  }


