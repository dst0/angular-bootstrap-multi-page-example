import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { TravelOptionsComponent } from './travel-options/travel-options.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TravelOptionsService } from './travel-options.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookingFormComponent,
    TravelOptionsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],

  providers: [TravelOptionsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

