import { Component, OnInit } from '@angular/core';
import {Router} from  "@angular/router";
import * as $ from 'jquery' ;


@Component({
  selector: 'app-oca-config-page',
  templateUrl: './oca-config-page.component.html',
  styleUrls: ['./oca-config-page.component.css']
})
export class OcaConfigPageComponent implements OnInit {

  activeList : any ;

  changetoActive(listArray) {
    this.activeList = listArray ;
  }


  constructor(public route:Router) {

   }

  ngOnInit() {

  }

  configFuncList = [
    {
      "name" : "Summary",
      "icon" : "arrow_forward"
    },
    {
      "name" : "Component",
      "icon" : "arrow_forward"
    },
    {
      "name" : "Menu",
      "icon" : "arrow_forward"
    },
    {
      "name" : "Layout",
      "icon" : "arrow_forward"
    },
    {
      "name" : "Power",
      "icon" : "arrow_forward"
    },
    {
      "name" : "BOM",
      "icon" : "arrow_forward"
    },
    {
      "name" : "Customer Intent",
      "icon" : "arrow_forward"
    },
    {
      "name" : "Service",
      "icon" : "arrow_forward"
    }
  ]

  gotoConfig(){
      document.getElementById('configList').classList.toggle('active');
  }


}
