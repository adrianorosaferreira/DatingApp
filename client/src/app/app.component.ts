import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_service/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  users: any;
  urlBase = 'https://localhost:5001/api/users';

  constructor(private http: HttpClient, private accountService: AccountService){}

  ngOnInit(): void{
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser(): void {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  getUsers(): any {
    return this.http.get(this.urlBase).subscribe(
      users => this.users = users,
      error => console.log(error)
      );
  }
}

