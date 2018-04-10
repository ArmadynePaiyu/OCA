import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/providers/api.service';

@Component({
  selector: 'app-support-and-installation',
  templateUrl: './support-and-installation.component.html',
  styleUrls: ['./support-and-installation.component.css']
})
export class SupportAndInstallationComponent implements OnInit {
  supportInstallation = []; 
  response;
  constructor(public apiService:ApiService) { 
    this.apiService.getSupportAndInstallationData().subscribe(data =>{
      this.response = data;
      this.supportInstallation = this.response.supportAndInstallation;
      console.log(this.supportInstallation);
    })
  }

  ngOnInit() {
  }


}
