import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Greeting } from '../greeting';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {
  private apiServerUrl='http://localhost:8080/greeting';

  constructor(private http: HttpClient) { }
/*
  public getGreeting(): Observable<Greeting> { 
    return this.http.get<Greeting>(`${this.apiServerUrl}/greeting`);
   }
    */
   public getGreeting(content: string): Observable<Greeting> { 
    const params = new HttpParams().set('content', content);
    return this.http.get<Greeting>(this.apiServerUrl, { params }); 
  }

}
