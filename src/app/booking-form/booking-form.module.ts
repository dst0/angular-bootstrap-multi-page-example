import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingFormRoutingModule } from './booking-form-routing.module';
import { BookingFormComponent } from './booking-form.component';

@NgModule({
  declarations: [
    BookingFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BookingFormRoutingModule,
  ],
  // bootstrap: [BookingFormComponent],
})
export class BookingFormModule { }
