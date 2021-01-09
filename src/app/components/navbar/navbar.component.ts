import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  src = '../../assets/IMGA_JuniorWorld-FloridaChallenge_CMYK_2.png';
  // tslint:disable-next-line: no-inferrable-types
  isUser: boolean = false ;
  constructor(private lo: AuthService , private router: Router) { }

  logout() {
    this.lo.logout().then(() => this.router.navigate(['/login']));
  }
  ngOnInit() {
    this.lo.user.subscribe( user => {
      if (user) {this.isUser = true;
        // tslint:disable-next-line: align
        this.lo.userID = user.uid; }
      // tslint:disable-next-line: one-line
      else {this.isUser = false;
      // tslint:disable-next-line: align
      this.lo.userID = ''; }
    });
  }

}
