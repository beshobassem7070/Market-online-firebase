import { Component, OnInit, OnDestroy } from "@angular/core";
import { GoodInterface } from "src/app/interface/good-interface";
import { GoodsService } from "src/app/services/goods.service";
import { Subscription } from "rxjs";
import { CardService } from "src/app/services/card.service";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  goods: GoodInterface[] = [
    /*{name: 'burgle' , discription: 'very good', price: 5 , photoUrl: '../../assets/AABHnbv.jpg'},
    {name: 'suses' , discription: 'verr good' , price: 3 , photoUrl: '../../assets/171027052520-processed-foods-large-tease.jpg'},
    {name: 'bizza' , discription: 'very good' , price: 10 , photoUrl: '../../assets/images.jpg'} */
  ];
  goodsObservable: Subscription;
  // tslint:disable-next-line: no-inferrable-types
  add: number = -1;
  // tslint:disable-next-line: no-inferrable-types
  // isUser: boolean = false ;
  constructor(
    private gs: GoodsService,
    private cs: CardService,
    private lo: AuthService,
    private router: Router
  ) {}

  addToCard(index: number) {
    // this.add = +index;
    if (this.lo.userID) {
      this.add = +index;
    }
    // tslint:disable-next-line: one-line
    else {
      this.router.navigate(["/login"]);
    }
  }

  buy(amount: number) {
    const selectedGood = this.goods[this.add];
    const data = {
      name: selectedGood.name,
      amount: +amount,
      price: selectedGood.price,
    };
    this.cs.addToCard(data).then(() => (this.add = -1));
  }
  ngOnInit() {
    this.goodsObservable = this.gs.getAllGoods().subscribe((data) => {
      this.goods = data.map((element) => {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        };
      });
    });
    /*this.lo.user.subscribe( user => {
      if (user) {this.isUser = true;
        // tslint:disable-next-line: align
        this.lo.userID = user.uid; }
      // tslint:disable-next-line: one-line
      else {this.isUser = false;
      // tslint:disable-next-line: align
      this.lo.userID = ''; }
    });*/
  }
  ngOnDestroy() {
    // tslint:disable-next-line: max-line-length
    this.goodsObservable.unsubscribe(); // بعمل الفانكشن دى عشان اقله انه هو لما يعمل اوبسيرفابول يقفل بعده .. يعمى ميبقاش مكمل فيه ... عشان ميبطئليش الصفحه بتاعتى
  }
}
