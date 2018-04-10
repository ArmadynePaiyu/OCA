import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/providers/api.service';

@Component({
  selector: 'app-other-services',
  templateUrl: './other-services.component.html',
  styleUrls: ['./other-services.component.css']
})
export class OtherServicesComponent implements OnInit {
  otherServices = [];
  response;
  constructor(public apiService:ApiService) {
    this.apiService.getOtherServicesData().subscribe(data => {
      this.response = data;
      this.otherServices = this.response.otherServices;
    })
   }

  ngOnInit() {
  }

}
