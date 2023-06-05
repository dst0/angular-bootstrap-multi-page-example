import { Component, OnInit } from '@angular/core';
import type { PriceStatistics, TravelOption, TravelOptionsError } from './models';
import { TravelOptionsService } from './travel-options.service';

@Component({
  selector: 'app-travel-options',
  templateUrl: './travel-options.component.html',
  styleUrls: ['./travel-options.component.css'],
})
export class TravelOptionsComponent implements OnInit {
  isLoading = false;
  error: TravelOptionsError | null = null;
  listings: TravelOption[] = [];
  priceStatistics: PriceStatistics | null = null;

  constructor(private travelOptionsService: TravelOptionsService) { }

  ngOnInit() {
    this.isLoading = true;
    this.travelOptionsService.loadTravelOptions().subscribe({
      next: ({ listings, priceStatistics }) => {
        this.listings = listings;
        this.priceStatistics = priceStatistics;
      },
      error: (error: TravelOptionsError) => {
        this.error = error;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}
