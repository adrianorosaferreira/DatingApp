import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  users: any;
  urlBase = 'https://localhost:5001/api/users';

  constructor(private http: HttpClient){}

  ngOnInit(): void{
    this.getUsers();
    console.log(this.users);
  }

  getUsers(): any {
    return this.http.get(this.urlBase).subscribe(
      users => this.users = users,
      error => console.log(error)
      );
  }
}

