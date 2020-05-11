import { Component } from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-pax-info2',
  templateUrl: './pax-info2.component.html',
  styleUrls: ['./pax-info2.component.css']
})
export class PaxInfo2Component  {

  datepickerConfig : Partial<BsDatepickerConfig>;

  public myLocalDataList = [
    {
      Name : "Amsterdam", 

      Code : "AMS",

      Country : "Neitherland ",

      Latitude : "5500",

      Longitude : "2545"

    }, 

    {
      Name : "London", 

      Code : "LON",

      Country : "United Kingdoms",

      Latitude : "5500",

      Longitude : "2545"

    },

    {

      Name : "Tokyo", 

      Code : "TYO",

      Country : "Japan",

      Latitude : "5425",

      Longitude : "6589"

    } 

  ];

  public searchFrom = '';

  public searchTo = '';

  public travelDate = '';

  public tDate = '';

  Area = new Array();

  paxDetails : any[] = [];

   minDate: Date;

  constructor() {

    this.datepickerConfig = Object.assign({},
      {
        containerClass: 'theme-orange',

        showWeekNumbers: false,

        minDate: new Date(2018, 0, 1),

        dateInputFormat: 'DD/MM/YYYY',

        displayMonths : 2
    
      });

  }

  selectedTempStaticTo(item ) {

    this.searchTo = item.Name +" " + item.Country+" " + item.Code + " "+ item.Latitude + " " + item.Longitude;

  }

  selectedTempStaticFrom(item ) {

    this.searchFrom = item.Name +" "+ item.Country +" "+ item.Code +" "+ item.Latitude +" "+  item.Longitude;

  }

  onPush(travelDate : Date) : void {
 
    this.Area.push(this.searchFrom, this.searchTo , travelDate);

    console.log("Area is :" + this.Area);

    this.paxDetails.push(this.Area);

    console.log("paxDetails is :" + this.paxDetails);

    this.Area = [];
 
    this.searchFrom = "";

    this.searchTo = "";

    this.tDate = "";

    this.travelDate = "";

   }
}




