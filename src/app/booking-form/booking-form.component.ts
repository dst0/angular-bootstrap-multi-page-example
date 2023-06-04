import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css'],
})
export class BookingFormComponent {
  bookingForm = new FormGroup({
    travellerName: new FormControl('', Validators.required),
    travellerEmail: new FormControl('', [Validators.required, Validators.email]),
    channel: new FormControl('', Validators.required),
    meetAndGreet: new FormControl(false),
    travelDateTime: new FormControl('', Validators.required),
    bookingPrice: new FormControl('', [Validators.required, Validators.min(0.001)]),
  });

  onSubmit() {
    if (this.bookingForm.valid) {
      console.log(Object
        .entries(this.bookingForm.value)
        .map((keyValueEntry) => keyValueEntry.join(': '))
        .join('\n'));
    }
  }
}
