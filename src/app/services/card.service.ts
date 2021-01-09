import { Injectable } from '@angular/core';
import { GoodsService } from './goods.service';
import { GoodInterface } from '../interface/good-interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private fs: AngularFirestore , private as: AuthService) { }
  addToCard(data: GoodInterface) {
    return this.fs.collection(`users/${this.as.userID}/card`).add(data);
  }

  getCard() {
    return this.fs.collection(`users/${this.as.userID}/card`).snapshotChanges();
  }

  delete(id) {
    return this.fs.doc(`users/${this.as.userID}/card/${id}`).delete();
  }
  save(id, amount) {
    return this.fs.doc(`users/${this.as.userID}/card/${id}`).update({amount});
  }
}
