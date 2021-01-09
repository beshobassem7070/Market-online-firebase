import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ConditionalExpr } from '@angular/compiler';
import { promise } from 'protractor';
import { resolve } from 'path';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private fs: AngularFirestore , private storage: AngularFireStorage) { }

  getAllGoods() {
    return this.fs.collection('goods').snapshotChanges();
  }

  addNewGood(name: string , price: number , discription: string, image: File ) {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve , reject) => {
      const ref = this.storage.ref('good/' + image.name);
      ref.put(image).then(() => {
      ref.getDownloadURL().subscribe(photoUrl => {
        this.fs.collection('goods').add({
           name,
           price,
           discription,
           photoUrl
        }).then(() => resolve());
      });
    });
    });
  }
}
