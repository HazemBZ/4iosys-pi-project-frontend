import { Injectable } from '@angular/core';
import  {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Container} from '../models/container';

// container model for submission

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  private IP = "127.0.0.1";
  private PORT ="3000";
  private REGISTRY_ENDPOINT = `http://${this.IP}:${this.PORT}/container`;

  private httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type': 'application/json'}
    )
  }

  constructor(private http:HttpClient) { }

  public addContainer(container:Container):Observable<any> {
    console.log(`Processing Container obj@addContainer => ${JSON.stringify(container)}`)
    const URL = `${this.REGISTRY_ENDPOINT}/registry/add`;
    return this.http.post<any>(URL, JSON.stringify(container), this.httpOptions).pipe(
      tap(_ => console.log(`Received CONTAINER => ${JSON.stringify(_)}`))
    )

  }
}
