import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(public http:HttpClient) { }
  getSupportAndInstallationData(): Observable<any[]> {
    return this.http.get("../assets/local-json/supportInstallation.json")
    //.map((res: Response) => res.json())
    .catch((error: any) => Observable.throw( 'Server error'));
  };

  getOtherServicesData(): Observable<any[]> {
    return this.http.get("../assets/local-json/otherServices.json")
    //.map((res: Response) => res.json())
    .catch((error: any) => Observable.throw( 'Server error'));
  }

  getLifecycleServicesData(): Observable<any[]> {
    return this.http.get("../assets/local-json/lifecycleServices.json")
    //.map((res: Response) => res.json())
    .catch((error: any) => Observable.throw( 'Server error'));
  }

  getMenuItems(): Observable<any[]> {
    return this.http.get("../assets/local-json/menuComponent.json")
    //.map((res: Response) => res.json())
    .catch((error: any) => Observable.throw( 'Server error'));
  }
}
