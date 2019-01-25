export class pickupPlaceResponse {

  location_lat: Number;
  location_lon: Number;

  constructor(long, lat)
  {
    this.location_lat=lat;
    this.location_lon=long;
  }
}
