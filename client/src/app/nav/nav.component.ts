import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_service/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn: boolean;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.model);
    this.accountService.login(this.model).subscribe( token => {
      console.log(token);
      this.loggedIn = true;
    }, error => console.log(error));
  }

  logout(): void {
    this.loggedIn = false;
  }

}
