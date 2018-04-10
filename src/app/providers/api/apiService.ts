import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { error } from 'util';



@Injectable()
export class APIService {

  constructor(private http: HttpClient) { }


  getMenuList() {

    return new Promise((resolve, reject) => {

      this.http.get('assets/local-json/menuOca.json').subscribe(res => {

        console.log(res);

        resolve(res);

      }, (error: HttpErrorResponse) => {

        console.log(error);

        reject(error);
      });

    });

  }

  // getSummaryList(): Observable<any[]> {
  //   return this.http.get("../assets/local-json/summary.json")
  //   //.map((res: Response) => res.json())
  //   .catch((error: any) => Observable.throw( 'Server error'));
  // }


}
