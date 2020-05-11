import { Component, Input, OnInit   } from '@angular/core';
import {BsDatepickerConfig}  from 'ngx-bootstrap/datepicker';
import { CompleterService, CompleterData,CompleterItem } from 'ng2-completer';
import { AirportInfo } from './AirportInfo';




@Component({
  selector: 'app-pax-info',
  templateUrl: './pax-info.component.html',
  styleUrls: ['./pax-info.component.css']
})
export class PaxInfoComponent  implements OnInit {
  datepickerConfig :Partial<BsDatepickerConfig>; // donot want to set all properties  
  //protected  cities  = ['Amsterdam','Italy','Greece','Rome','Amsitsar','London','Singapore','Delhi']; 
    cities:AirportInfo[] = []   ;
    Area = new Array();
    paxDetails: any = [];
   
    travelFrom : string;
    travelTo : string;
    tDate : string;

    AirportData: any[];
    dataServiceFrom: CompleterData;
    dataServiceTo : CompleterData;


   constructor(private completerService: CompleterService){
    this.datepickerConfig = Object.assign({},
      {
         containerClass: 'theme-orange',
         showWeekNumbers: false,
         minDate: new Date(2019, 0, 1),
         maxDate: new Date(2019, 11, 31),
         dateInputFormat: 'DD/MM/YYYY'
     }
    
 )
 this.cities = [
  {
      Name: 'Amsterdam ', Code: 'AMS', Country: 'Neitherland',
      Latitude: "5500", Longitude: '2545'
  },
  {
    Name: 'London', Code: 'LON', Country: 'United Kingdom',
    Latitude: "5500", Longitude: '2545'
  },
  {
    Name: 'Tokyo', Code: 'TYO', Country: 'Japan',
    Latitude: "5500", Longitude: '2545'
   },

];

 this.dataServiceFrom = completerService.local(this.cities, 'Name','Name');
 this.dataServiceTo = completerService.local(this.cities , 'Name', 'Name');

  
}

// public onFromSelected(selectedItem: CompleterItem) {
//   alert("Hi");
//   if (selectedItem) {
//     this.travelFrom = selectedItem.originalObject.value;
//     // this.captainSelected = true;
//     // const optionalStarships = this.starships.filter(starship => starship.class <= selectedItem.originalObject.shipClass);
//     // this.starshipsSubject.next(optionalStarships);
//   } else {
//     // this.captainSelected = false;
//     // this.starship = null;
//     // this.starshipsSubject.next([]);
//   }
// }
ngOnInit(): void {  

}  


onPush(from : string,to:string,travelDate : string) : void {

 this.Area.push(from, to , travelDate);
 console.log("Area is :" + this.Area);
 this.paxDetails.push(this.Area);
 console.log("paxDetails is :" + this.paxDetails);
 this.Area = [];
 this.travelFrom = "";
 this.travelTo = "";
 this.tDate = "";
}


 
}


