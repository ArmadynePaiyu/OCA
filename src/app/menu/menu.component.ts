import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/providers/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems;
  menuSections = [];
  constructor(public apiService : ApiService) {
      this.apiService.getMenuItems().subscribe(data => {
        this.menuItems = data;
        console.log(this.menuItems.actions["0"].pageData.members.data.cp.sections);
        this.menuSections = this.menuItems.actions["0"].pageData.members.data.cp.sections;
      })
   }

  ngOnInit() {
  }

}
