import { Injectable } from '@angular/core';
import  {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Container} from '../models/container';
import { MeasurementContainer } from '../models/measurementContainer';

// container model for submission

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  private IP = "127.0.0.1";
  private PORT ="3000";
  private CONTAINER_ENDPOINT = `http://${this.IP}:${this.PORT}/container`;

  private httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type': 'application/json'}
    )
  }

  constructor(private http:HttpClient) { }

  public addContainer(container:Container):Observable<any> {
    console.log(`Processing Container obj@addContainer => ${JSON.stringify(container)}`)
    const URL = `${this.CONTAINER_ENDPOINT}/registry/add`;
    return this.http.post<any>(URL, JSON.stringify(container), this.httpOptions).pipe(
      tap(_ => console.log(`Received CONTAINER => ${JSON.stringify(_)}`))
    )

  }

  public getAllContainers():Observable<Container[]> {
    const URL = `${this.CONTAINER_ENDPOINT}/allContainers`;

    return this.http.get<Container[]>(URL,this.httpOptions).pipe(
      tap(_ => console.log(`Received CONTAINERS => ${JSON.stringify(_)}`))
    );
  }

  public getMeasuringContainersRefs():Observable<Container[]> {
    const URL = `${this.CONTAINER_ENDPOINT}/allContainerRefs`;

    return this.http.get<Container[]>(URL,this.httpOptions).pipe(
      tap(_ => console.log(`Received Measuring CONTAINERS => ${JSON.stringify(_)}`))
    );
  }

  public getMeasurement(contRef):Observable<MeasurementContainer> {
    const URL = `${this.CONTAINER_ENDPOINT}/measurements/${contRef}`;

    return this.http.get<MeasurementContainer>(URL,this.httpOptions).pipe(
      tap(_ => console.log(`Received Measrement => ${JSON.stringify(_)}`))
    );
  }

  public pinContainer(reference) {
    const URL = `${this.CONTAINER_ENDPOINT}/pin/${reference}`;
    return this.http.put<any>(URL,this.httpOptions).pipe(
      tap(_ => console.log(`PIN Piped => ${JSON.stringify(_)}`))
    );
  }

  public unpinContainer(reference) {
    const URL = `${this.CONTAINER_ENDPOINT}/unpin/${reference}`
    return this.http.put<any>(URL,this.httpOptions).pipe(
      tap(_ => console.log(`UNPIN Piped => ${JSON.stringify(_)}`))
    );
  }


}
