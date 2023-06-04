export type VehicleType = {
  name: string;
  maxPassengers: number;
}

export type TravelOption = {
  name: string;
  vehicleType: VehicleType;
  pricePerPassenger: number;
}

export type PriceStatistics = {
  minimum: number;
  maximum: number;
  average: number;
}

export type TravelOptionsError = {
  error: boolean;
  message: string;
}
