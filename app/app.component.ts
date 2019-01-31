import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {

  }

  check() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'fooBarToken'
      }),
      withCredentials: true
    };

    this.http.post('http://localhost:3000', {}, httpOptions)
      .subscribe(res => console.log(res))
  }

}
