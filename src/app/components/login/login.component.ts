import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMassage = '';
  constructor(private as: AuthService , private router: Router) { }

  login(form) {
    const data = form.value;
    this.as.login(data.email , data.password).
    then(result => {this.errorMassage = '';
    // tslint:disable-next-line: align
    this.router.navigate(['/']); })
    .catch(err => {this.errorMassage = err.message; });
  }

  /*loginGoogle(form) {
    const data = form.value;
    this.as.login(data.email , data.password).
    then(result => {this.errorMassage = '';
    // tslint:disable-next-line: align
    this.router.navigate(['/']); })
    .catch(err => {this.errorMassage = err.message; });
  }*/

  ngOnInit() {
  }

}
