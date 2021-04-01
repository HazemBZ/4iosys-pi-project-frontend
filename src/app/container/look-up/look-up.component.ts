import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/models/container';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-look-up',
  templateUrl: './look-up.component.html',
  styleUrls: ['./look-up.component.scss']
})
export class LookUpComponent implements OnInit {
  allContainers:Container[] = []
  constructor(private containerService:ContainerService) { }

  ngOnInit() {
    this.fetchContainersData()
    console.log(`fetched containers ${JSON.stringify(this.allContainers)}`);
  }

  fetchContainersData(){
    this.containerService.getAllContainers().subscribe((data)=> this.allContainers = data)
  }
}
