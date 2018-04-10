import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/providers/api.service';

@Component({
  selector: 'app-lifecycle-services',
  templateUrl: './lifecycle-services.component.html',
  styleUrls: ['./lifecycle-services.component.css']
})
export class LifecycleServicesComponent implements OnInit {
  serviceGroups = ["All","DEPLOYMENT BCS AND ISS","CMS - COMMUNICATION AND MEDIA SERVICES","Datacenter Care - Add on",
                  "OPTIMIZATION BCS_ ISS AND STORAGE","OPERATIONS BCS AND ISS","EPLOYMENT STORAGE QUOTE ASSIST",
                  "CONVERGED SYSTEMS","OPERATIONS STORAGE"];
  quoteAssistTools = ["Data Replication","Data Migration","EISS","Firmware","SAN Deployment","SAP",
                      "Synergy","CS700/CS750","CS Firmware","cvs.SUAT"];
  lifecycleServices = [];
  response;             
  constructor(public apiService : ApiService) {
    this.apiService.getLifecycleServicesData().subscribe(data => {
      this.response = data;
      this.lifecycleServices = this.response.lifecycleServices;
    })
   }

  ngOnInit() {
  }

}
