import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelOptionsComponent } from './travel-options.component';

const routes: Routes = [{ path: '', component: TravelOptionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelOptionsRoutingModule { }
