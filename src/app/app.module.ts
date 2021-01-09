import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule , FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { GoodsComponent } from './components/goods/goods.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GoodsComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NotfoundComponent,
    SignupComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyADLPvomfs56LR7D8lOQMkwcRnYy6tC3FM',
      authDomain: 'market-47d01.firebaseapp.com',
      databaseURL: 'https://market-47d01.firebaseio.com',
      projectId: 'market-47d01',
      storageBucket: 'market-47d01.appspot.com',
      messagingSenderId: '195513727392',
      appId: '1:195513727392:web:3b4bb9a1a80cea9bf04cc5',
      measurementId: 'G-192NJHMJP4'
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: FirestoreSettingsToken , useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
