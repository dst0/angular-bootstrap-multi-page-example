import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingFormComponent } from './booking-form/booking-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TravelOptionsComponent } from './travel-options/travel-options.component';

const routes: Routes = [
  { path: 'booking-form', component: BookingFormComponent },
  { path: 'travel-options', component: TravelOptionsComponent },
  { path: '', redirectTo: '/booking-form', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
