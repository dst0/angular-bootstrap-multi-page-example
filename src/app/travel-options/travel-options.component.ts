import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface VehicleType {
  name: string;
  maxPassengers: number;
}

interface TravelOption {
  name: string;
  vehicleType: VehicleType;
  pricePerPassenger: number;
}

interface PriceStatistics {
  minimum: number;
  maximum: number;
  average: number;
}

interface Error {
  error: boolean;
  message: string;
}

@Component({
  selector: 'app-travel-options',
  templateUrl: './travel-options.component.html',
  styleUrls: ['./travel-options.component.css'],
})
export class TravelOptionsComponent implements OnInit {
  isLoading = false;
  error: Error | null = null;
  listings: TravelOption[] = [];
  priceStatistics: PriceStatistics | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.isLoading = true;
    this.http.get<any>(
      'https://localhost:3001/'
    ).pipe(
      catchError(err => {
        this.error = { error: true, message: 'Failed to load travel options' };
        this.isLoading = false;
        return of([]);
      })
    ).subscribe(data => {
      const listings: TravelOption[] = data.listings;
      this.listings = listings.sort((a: TravelOption, b: TravelOption) => a.pricePerPassenger - b.pricePerPassenger);
      if (listings.length > 0) {
        let minimum = listings[0].pricePerPassenger;
        let maximum = minimum;
        let totalPrice = 0;
        for (const { pricePerPassenger } of listings) {
          if (pricePerPassenger < minimum) {
            minimum = pricePerPassenger;
          } else if (pricePerPassenger > maximum) {
            maximum = pricePerPassenger;
          }
          totalPrice += pricePerPassenger;
        }
        this.priceStatistics = {
          minimum,
          maximum,
          average: +(totalPrice / listings.length).toFixed(2),
        }
      }
      this.isLoading = false;
    });
  }
}
