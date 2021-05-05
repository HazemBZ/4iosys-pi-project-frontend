export interface Container {
  containerRef: String,
  owner: String,
  source:String,
  location:String,
  destination:String,
  status:string,
  last_active:String,
  pinned:Boolean,
  location_status:String,
  departureTime:Date,
  arrivalTime:Date,
  arrived: Boolean,
  door: Boolean
}
