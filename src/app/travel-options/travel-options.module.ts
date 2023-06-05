import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { TravelOptionsRoutingModule } from './travel-options-routing.module';
import { TravelOptionsComponent } from './travel-options.component';
import { TravelOptionsService } from './travel-options.service';


@NgModule({
  declarations: [TravelOptionsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TravelOptionsRoutingModule
  ],
  providers: [TravelOptionsService],
  // bootstrap: [TravelOptionsComponent],
})
export class TravelOptionsModule { }
