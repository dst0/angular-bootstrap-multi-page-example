import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { PriceStatistics, TravelOption } from './models';

@Injectable({
  providedIn: 'root'
})
export class TravelOptionsService {

  constructor(private http: HttpClient) { }

  loadTravelOptions(): Observable<{ listings: TravelOption[], priceStatistics: PriceStatistics | null }> {
    return this.http.get<any>('https://localhost:3001/').pipe(
      catchError((err) => {
        // Handle error
        return of({ listings: [], priceStatistics: null });
      }),
      map((data) => this.processTravelOptions(data))
    );
  }

  processTravelOptions(data: any): { listings: TravelOption[], priceStatistics: PriceStatistics | null } {
    const listings: TravelOption[] = data.listings;
    let priceStatistics: PriceStatistics | null = null;

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

      priceStatistics = { minimum, maximum, average: +(totalPrice / listings.length).toFixed(2) };
    }

    return { listings, priceStatistics };
  }
}
