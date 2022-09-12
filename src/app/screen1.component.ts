import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss'],
})
export class Screen1Component {
  data: any = [];

  constructor(private http: HttpClient) {
    this.getUsers();
  }

  getUsers() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((resp) => {
        console.log(resp);
        this.data = resp;
      });
  }
}
