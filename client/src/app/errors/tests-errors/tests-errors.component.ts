import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests-errors',
  templateUrl: './tests-errors.component.html',
  styleUrls: ['./tests-errors.component.css']
})
export class TestsErrorsComponent implements OnInit {
  baseUrl = 'https://localhost:5001/api/';
  validationError: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get500error(): void {
    this.http.get(this.baseUrl + 'buggy/server-error')
    .subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }

  get400error(): void{
    this.http.get(this.baseUrl + 'buggy/bad-request')
    .subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }

  get400ValidationeError(): void{
    this.http.post(this.baseUrl + 'account/register', {})
    .subscribe(
      response => console.log(response),
      error => {
        console.log(error);
        this.validationError = error;
      }
    );
  }

  get401error(): void{
    this.http.get(this.baseUrl + 'buggy/auth')
    .subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }

  get404error(): void{
    this.http.get(this.baseUrl + 'buggy/not-found')
    .subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }


}
