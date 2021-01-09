import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;
  // tslint:disable-next-line: no-inferrable-types
  userID: string = '';

  constructor(private afAuth: AngularFireAuth ) {
    this.user = afAuth.user;
  }

  signup(email , pass) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email , pass);
  }

  login(email , password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

 /* loginGoogle() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout(){

  }*/
}
