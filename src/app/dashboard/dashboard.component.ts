import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FixedScaleAxis } from 'chartist';
import { NgbDate, NgbCalendar, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { ContainerService } from '../services/container.service';
import {Container} from '../models/container'
import { StaticDataService } from '../services/static-data.service';
// import * as am4code from
// import * as mqtt from 'mqtt';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_wordLow from '@amcharts/amcharts4-geodata/worldLow';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit{



  // Meine
  public allContainers:Container[] = [];
  public reached = 0;
  public transit = 0;
  public behind = 0;

  // Map related Data
  public codeToCountryEntries = null;
  public selectedCountry = 'None'
  map = null;
  lineSeries = null;
  imageSeries = null;

  //// Route data
  source = null; // {"latitude": 48.856614, "longitude": 2.352222 };
  current = null; //{ "latitude": 40.712775, "longitude": -74.005973 };
  destination = null; //{ "latitude": 49.282729, "longitude": -123.120738 };




  constructor( private containerService:ContainerService, private staticDataService:StaticDataService) {

  }
  // ===== View OnInit
  ngOnInit() {
    this.fetchContainersData(this.countTravelStats)
    console.log(`fetched containers ${JSON.stringify(this.allContainers)}`);
    this.codeToCountryEntries = Object.entries(this.staticDataService.codeToCountry);

  }

  ngAfterViewInit() {


    this.codeToCountryEntries = Object.entries(this.staticDataService.codeToCountry);
    // this.hookToDoor()

    this.map = am4core.create('mapdiv', am4maps.MapChart);  // create chart instance inside a container with specified id
    this.map.geodata = am4geodata_wordLow; // set map definition
    this.map.projection = new am4maps.projections.Miller(); // set map projection (sphere to rectangle)

    let polygonSeries = new am4maps.MapPolygonSeries(); // used to know how to draw
    this.map.series.push(polygonSeries); //
    polygonSeries.useGeodata = true;  // Part 1: bleak world map

    // polygonSeries.mapPolygons.template
    // polygonSeries.exclude = ['AQ', 'US'] // exclude map objects
    // polygonSeries.data = [
    //   {
    //     "id": "US",
    //     "name": "United States",
    //     "value": 100
    //   }, {
    //     "id": "FR",
    //     "name": "France",
    //     "value": 50
    //   }
    // ]


    // Part2: add color and tooltip data to map polygons
    let polygonTemplate = polygonSeries.mapPolygons.template; // template access to configure appearance and behavior
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#74B266");

    // let hs = polygonTemplate.states.create('hover') // hover state access
    // hs.properties.fill = am4core.color("#367B25");


    // Part3: draw container itenarary/route


    this.lineSeries = this.map.series.push(new am4maps.MapLineSeries());
    /*
    this.lineSeries.data = [{
      "multiGeoLine": [
          [
            this.source,
            this.current,
            this.destination
          ]
      ]
    }] */

  // Part4: image series: for visuals customization
  this.imageSeries = this.map.series.push(new am4maps.MapImageSeries());

  let imageSeriesTemplate = this.imageSeries.mapImages.template;
  let circle = imageSeriesTemplate.createChild(am4core.Circle);
  circle.radius = 4;
  circle.fill = am4core.color("#B27799");
  circle.stroke = am4core.color("#FFFFFF");
  circle.strokeWidth = 2;
  circle.nonScaling = true;
  circle.tooltipText = "{title}";

  imageSeriesTemplate.propertyFields.latitude = "latitude";
  imageSeriesTemplate.propertyFields.longitude = "longitude";

  /* this.imageSeries.data = [{
  "latitude": 48.856614,
  "longitude": 2.352222,
  "title": "Paris"
  }, {
  "latitude": 40.712775,
  "longitude": -74.005973,
  "title": "New York"
  }, {
  "latitude": 49.282729,
  "longitude": -123.120738,
  "title": "Vancouver"
  }]; */

  }

  // hookToDoor(){ // for all containers listen to their door channel
  //   let MQTT_SERVER_URI = "mqtt://localhost"; // whilst on same device
  // let client = mqtt.connect(MQTT_SERVER_URI)
  //   this.allContainers.forEach((cont) => {
  //     client.subscribe(`${cont.containerRef}/door`, (err) => {
  //       if(err)  console.log(`container ${cont.containerRef} subscription error`)
  //     })
  //   })

  //   client.on('message', (topic, message)=> {
  //     let ref = topic.split('/')[0];
  //     this.allContainers.forEach((cont, ind) => {
  //       // if(cont.containerRef == ref ) this.allContainers[ind].door = parseInt(message.toString()) == 1?true:false;
  //     })
  //   })
  // }

  fetchContainersData(clb=null){
    this.containerService.getAllContainers().subscribe((data)=> {this.allContainers = data;  this.countTravelStats(data)})
  }

  countTravelStats(containers:Container[]){
    console.log('Counting ...')

    containers.forEach((cont)=> {
      console.log(`Couting Using ${JSON.stringify(cont)}`)
      if(cont.arrived) this.reached ++;
      else {
        console.log(`${cont.arrivalTime} > ${new Date()} == ${new Date(cont.arrivalTime) > new Date()}`)
        if(new Date(cont.arrivalTime) > new Date()) this.transit ++;
        else this.behind ++;
      }
    })
  }

  public updateReport() {
    this.resetReport();
    this.fetchContainersData();
  }

  resetReport(){
    this.reached = 0;
    this.transit = 0;
    this.behind = 0;
  }

  public unpin(index) {
    console.log(`Unpinning ${JSON.stringify(this.allContainers[index].containerRef)}`);
    this.containerService.unpinContainer(this.allContainers[index].containerRef).subscribe((data)=> {this.allContainers[index].pinned = false;console.log(JSON.stringify(data))})
  }

  // ==== MAP Related ====


  selectContainerForMap(index){
    alert(`container ${JSON.stringify(this.allContainers[index])}`)
    let source = this.allContainers[index].source;
    let current = this.allContainers[index].location;
    let destination = this.allContainers[index].destination;
    alert(`source: ${source}, current:${current}, destination:${destination}`)

    // let country = code_country.split(',')[1].trim();
    // alert(`"${country}" selected\n `);
    let source_coord = this.staticDataService.countryToPosition[source.toString()]
    let current_coord = this.staticDataService.countryToPosition[current.toString()]
    let dest_coord = this.staticDataService.countryToPosition[destination.toString()];
    console.log(`source coord:${JSON.stringify(source_coord)}, destination coord${JSON.stringify(dest_coord)}`);
    // this.current = current_coord;
    // this.destination = dest_coord;


    // this.lineSeries = this.map.series.push(new am4maps.MapLineSeries());
    // Line Series data update
    this.lineSeries.data = [{
      "multiGeoLine": [
          [
            source_coord,
           current_coord?current_coord:source_coord,
            dest_coord
          ]
      ]
    }]

    alert(`line series ${this.lineSeries}`)

    // Image Series data update
    this.imageSeries.data = [{
      "latitude":source_coord['latitude'],
      "longitude":source_coord['longitude'],
      "title": "Source"
    },
    // {
    //   "latitude": this.current?["latitude"]: this.source['latitude'],
    //   "longitude": this.current?["longitude"]: this.source['longitude'],
    //   "title": "Current position"
    // },
    {
      "latitude": dest_coord['latitude'],
      "longitude": dest_coord['longitude'],
      "title": "Destination"
    }
  ];

  }
}
