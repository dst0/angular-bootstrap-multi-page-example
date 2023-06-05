import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'booking-form',
    loadChildren: () => import('./booking-form/booking-form.module').then(m => m.BookingFormModule)
  },
  {
    path: 'travel-options',
    loadChildren: () => import('./travel-options/travel-options.module').then(m => m.TravelOptionsModule)
  },
  { path: '', redirectTo: '/booking-form', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
