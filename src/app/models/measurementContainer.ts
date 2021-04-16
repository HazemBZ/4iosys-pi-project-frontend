export interface MeasurementContainer {
  containerRef:string,
  data: {
    temp:[{value:Number, time: string}],
    gaz:[{value:Number, time: string}],
    flame:[ {value:Number, time: string}],
    door: [{value:Number, time: string}]
  }
}
