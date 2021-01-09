import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorMassage = '';
  constructor(private as: AuthService , private us: UserService , private router: Router ) { }

  signUp(form) {
    const data: User = form.value;
    this.as.signup(data.email , data.password)
    // tslint:disable-next-line: no-shadowed-variable
    .then(result => {this.errorMassage = ''; // لو اتنفزت يطلع كده
    // tslint:disable-next-line: align
    this.us.addNewUser(result.user.uid , data.name , data.address).then(() => {
      this.router.navigate(['/']);
    });
  })
    .catch(err => {this.errorMassage = err.message; } );  // لو متنفزتشي يطبع كده
    }
  ngOnInit() {
  }

}
