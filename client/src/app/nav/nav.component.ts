import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_service/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  currentUser$: Observable<User>;

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.model);
    this.accountService.login(this.model).subscribe( token => {
      console.log(token);
      this.router.navigateByUrl('/members');
      this.showSuccess();
    });
  }

  logout(): void {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

  showSuccess(): void {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
