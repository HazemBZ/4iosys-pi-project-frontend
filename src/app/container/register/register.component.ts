import { JsonpInterceptor } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { ContainerService } from 'src/app/services/container.service';
import { ContentAnimateDirective } from 'src/app/shared/directives/content-animate.directive';
import { Container } from '../../models/container';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public container:Container = {containerRef:"", owner:"",location:"",destination:"",status:"",last_active:"", pinned:false}
  constructor(private containerService:ContainerService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // alert( JSON.stringify(this.container))
    this.containerService.addContainer(this.container).subscribe((res)=> {console.log(`container ADD response ${JSON.stringify(res)}`)});
  }

}
