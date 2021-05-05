import { JsonpInterceptor } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { ContainerService } from 'src/app/services/container.service';
import { StaticDataService } from 'src/app/services/static-data.service';
import { ContentAnimateDirective } from 'src/app/shared/directives/content-animate.directive';
import { Container } from '../../models/container';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public container:Container = {
    containerRef:"", owner:"",
    source:"",
    location:"",destination:"",
    status:"Unknown",last_active:"",
    pinned:false, location_status:'TRANSIT',
    arrivalTime: null, departureTime: null,
    arrived: false,
    door: true // door is closed(button pushed) by default
  }

  public countries = [];

  constructor(private containerService:ContainerService, private staticDataService:StaticDataService) { }

  ngOnInit(): void {
    this.countries = Object.keys(this.staticDataService.countryToPosition);
    console.log(`found keys: ${this.countries}`)
  }

  onSubmit() {
    alert( JSON.stringify(this.container))
    this.containerService.addContainer(this.container).subscribe((res)=> {alert('container registered successfuly'); console.log(`container ADD response ${JSON.stringify(res)}`)});

  }

  // not needed: replaced by ngModel binding
  selectSource(country){
    // this.container.source = country;
  }

  // not needed: replaced by ngModel binding
  selectDestination(country){
    // this.container.destination = country;
  }

}
