// import { Injectable } from '@angular/core';  
// import { Http, Response } from '@angular/http';  
// import { Observable } from 'rxjs/add/operator/map';  

// @Injectable()  
// export class ClientSearchService {  
//     endPoint: string;  
//     constructor(private http: Http) {  
//         this.endPoint = "src/app/pax-info2/client.json";  
//     }  
//     search(term: string): Observable<any[]> {  
//         var ClientList = this.http.get(this.endPoint + '?term=' + term)  
//             .map((r: Response) => { return (r.json().length != 0 ? r.json() : [{ "ClientId": 0, "ClientName": "No Record Found" }]) as any[] });  
//         return ClientList;  
//     }  
// }