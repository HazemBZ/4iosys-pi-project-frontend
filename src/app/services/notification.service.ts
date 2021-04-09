import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private IP = "127.0.0.1";
  private PORT ="3000";
  private CONTAINER_ENDPOINT = `http://${this.IP}:${this.PORT}/notification`;

  private httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type': 'application/json'}
    )
  }

  constructor(private http:HttpClient) { }



  public getAllNotifications():Observable<any[]> {
    const URL = `${this.CONTAINER_ENDPOINT}/allNotifications`;

    return this.http.get<any[]>(URL,this.httpOptions).pipe(
      tap(_ => console.log(`Received NOTIFICATIONS => ${JSON.stringify(_)}`))
    );
  }
}
