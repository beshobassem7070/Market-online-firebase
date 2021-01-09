import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GoodInterface } from 'src/app/interface/good-interface';
import { GoodsService } from 'src/app/services/goods.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  addGood = '';
  // tslint:disable-next-line: max-line-length
  @ViewChild('image' , {static: false}) image: ElementRef;  // ViewChild === دى عشان بعمل سيليكت على عنصر معين من الاتش تى ام ال وبعمل عليه اللى انا عايزه وبدله قيمه وبحطه ك استرنج
  constructor(private gs: GoodsService , private router: Router) { }

  login(f: NgForm) {
    const name = ( f.value as GoodInterface ).name;  // as GoodInterface === دى معناها ان دوعها كده
    const price = ( f.value as GoodInterface ).price;
    const discription = ( f.value as GoodInterface ).discription;
    const image = (this.image.nativeElement as HTMLInputElement).files[0];
    this.gs.addNewGood(name , price , discription, image ).then(msg => {this.addGood = 'good';
    // tslint:disable-next-line: align
     // this.router.navigate(['/']);
  }).catch(err => {this.addGood = 'error'; });

    // console.log(f.value);
    // console.log((this.image.nativeElement as HTMLInputElement).files[3]);  // as HTMLInputElement === ممكن مكتبهاش
  }

  ngOnInit() {
  }

}
