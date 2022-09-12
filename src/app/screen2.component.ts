import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss'],
})
export class Screen2Component {
  data: any = [];

  constructor(private http: HttpClient) {
    this.getUsers();
  }

  getUsers() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((resp) => {
        console.log(resp);
        this.data = resp;
      });
  }
}
