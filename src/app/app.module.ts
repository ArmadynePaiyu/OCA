import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OcaLoginComponent } from './oca-login/oca-login.component';
import { RouterModule,Routes } from "@angular/router";
import { AddNewConfigurationComponent } from './add-new-configuration/add-new-configuration.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { OcaConfigPageComponent } from './oca-config-page/oca-config-page.component';
import { ManagemyLibraryComponent } from './managemy-library/managemy-library.component';
import { ComponentConfigComponent } from './component-config/component-config.component';
import { SummaryConfigComponent } from './summary-config/summary-config.component' ;
import { HttpClientModule } from '@angular/common/http';
import {SummaryServiceService} from './services/summary-service.service';
import { OcaPowerComponent } from './oca-power/oca-power.component' ;
import {APIService} from './providers/api/apiService';
import { BomComponent } from './bom/bom.component';
import { MenuBtnOcaComponent } from './menu-btn-oca/menu-btn-oca.component';
import {Http} from '@angular/http';
import { ServiceConfigComponent } from './service-config/service-config.component';
import { SupportAndInstallationComponent } from './service-components/support-and-installation/support-and-installation.component';
import { OtherServicesComponent } from './service-components/other-services/other-services.component';
import { LifecycleServicesComponent } from './service-components/lifecycle-services/lifecycle-services.component';
import { TrainingServiceComponent } from './service-components/training-service/training-service.component';
import { ConsultingServiceComponent } from './service-components/consulting-service/consulting-service.component';
import { CreditServiceComponent } from './service-components/credit-service/credit-service.component' ;
import { ApiService } from 'app/providers/api.service';

@NgModule({
  declarations: [
    AppComponent,
    OcaLoginComponent,
    AddNewConfigurationComponent,
    OcaConfigPageComponent,
    ManagemyLibraryComponent,
    ComponentConfigComponent,
    SummaryConfigComponent,
    OcaPowerComponent,
    BomComponent,
    MenuBtnOcaComponent,
    ServiceConfigComponent,
    SupportAndInstallationComponent,
    OtherServicesComponent,
    LifecycleServicesComponent,
    TrainingServiceComponent,
    ConsultingServiceComponent,
    CreditServiceComponent
  ],
  imports: [
    HttpClientModule,
    UiSwitchModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path : "",
        component : OcaLoginComponent,
      },
      {
        path : "newConfig",
        component : AddNewConfigurationComponent
      },
      {
        path : "OcaConfig",
        component : OcaConfigPageComponent,
        children :
        [
          {
            path : "Component",
            component : ComponentConfigComponent
          },
          {
            path : "Summary",
            component  :SummaryConfigComponent
          },
          {
            path : "Power",
            component : OcaPowerComponent
          },
          {
            path :"BOM",
            component : BomComponent
          },
          {
            path : "Service",
            component  :ServiceConfigComponent
          }
        ]
      },
      {
        path : "newLibrary",
        component : ManagemyLibraryComponent
      }
    ])
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
