import { Component, OnInit } from '@angular/core';
import {APIService} from '../providers/api/apiService';

@Component({
  selector: 'app-summary-config',
  templateUrl: './summary-config.component.html',
  styleUrls: ['./summary-config.component.css']
})
export class SummaryConfigComponent implements OnInit {

  summaryList: any;
  actions:any;

  constructor(public api: APIService) {

    console.log('c');

  }

  ngOnInit() {
    this.getSummaryData();
    console.log('a');
  }

  getSummaryData() {

    console.log('b');

    this.api.getMenuList().then((data) => {
        this.summaryList = data;
        this.actions = this.summaryList.acti ;
        console.log(this.actions);
    });

  }
    
    

}
