export class CommandeListeUserM {
  _id: String;
  pickup_date: Date;
  pickup_place: [
      {
          _id: String;
          location_lat: Number;
          location_lon: Number;
      }
  ];
  orderLines: [
      {
          _id: String;
          productId: String;
          quantity: Number;
      }
  ];
  userId: String;
  state: String;
  date: Date;
}