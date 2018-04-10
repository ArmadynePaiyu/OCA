import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/providers/api.service';

@Component({
  selector: 'app-credit-service',
  templateUrl: './credit-service.component.html',
  styleUrls: ['./credit-service.component.css']
})
export class CreditServiceComponent implements OnInit {
  supportCredits = ["All","SUPPORT CREDITS 10 PER YEAR SVC","SUPPORT CREDITS 30 PER YEAR SVC"];
  onsiteAnalysisGroup = ["All","PROACTIVE CARE ONSITE ANALYSIS"];
  onsiteAdditional = ["All","PROACTIVE CARE ONSITE ANALYSIS ADDITIONAL DAY"];
  onsiteAdditionalServices = [];
  onsiteAnalysisServices =[];
  supportCreditServices = [];
  response;

  constructor(public apiService : ApiService) {
    this.apiService.getLifecycleServicesData().subscribe(data => {
      this.response = data;
      this.onsiteAdditionalServices = this.response.lifecycleServices;
      this.onsiteAnalysisServices = this.response.lifecycleServices;
      this.supportCreditServices = this.response.lifecycleServices;
    })
   }

  ngOnInit() {
  }

}
