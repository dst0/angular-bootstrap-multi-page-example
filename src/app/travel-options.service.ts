import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import type { PriceStatistics, TravelOption } from './travel-options/models';


@Injectable({
  providedIn: 'root'
})
export class TravelOptionsService {

  constructor(private http: HttpClient) { }

  loadTravelOptions(): Observable<{ listings: TravelOption[], priceStatistics: PriceStatistics }> {
    return this.http.get<any>('https://localhost:3001/').pipe(
      catchError((err) => {
        // Handle error
        return of({ listings: [], priceStatistics: null });
      }),
      map((data) => this.processTravelOptions(data))
    );
  }

  processTravelOptions(data: any): { listings: TravelOption[], priceStatistics: PriceStatistics } {
    const listings: TravelOption[] = data.listings;
    const priceStatistics: PriceStatistics = {
      minimum: 0,
      maximum: 0,
      average: 0,
    };

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

      priceStatistics.minimum = minimum;
      priceStatistics.maximum = maximum;
      priceStatistics.average = +(totalPrice / listings.length).toFixed(2);
    }

    return { listings, priceStatistics };
  }
}
