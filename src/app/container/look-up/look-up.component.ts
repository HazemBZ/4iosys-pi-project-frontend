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

  public pin(index) {
    console.log(`pinning ${JSON.stringify(this.allContainers[index])}`);
    this.containerService.pinContainer(this.allContainers[index].containerRef).subscribe((data)=> {this.allContainers[index].pinned = true;console.log(JSON.stringify(data))});;
  }

  public unpin(index) {
    console.log(`Unpinning ${JSON.stringify(this.allContainers[index])}`);
    this.containerService.unpinContainer(this.allContainers[index].containerRef).subscribe((data)=> {this.allContainers[index].pinned = false;console.log(JSON.stringify(data))} );
  }
}
