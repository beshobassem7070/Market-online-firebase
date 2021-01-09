import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CardService } from 'src/app/services/card.service';
import { Shopping } from 'src/app/interface/shopping';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  allCard: Shopping[] = [];
  orderTotalPrice: number;
  @Output() totalPriceChange: EventEmitter<number>;


  constructor(private cs: CardService) {
    this.totalPriceChange = new EventEmitter<number>();
    this.orderTotalPrice = 0 ;
  }

  delete(index) {
    this.cs.delete(this.allCard[index].id);
  }
  save(index) {
    this.cs.save(this.allCard[index].id, this.allCard[index].amount);
  }

  onBuyClick(prdPrice: number , itemCount: number): void {
    this.orderTotalPrice += (prdPrice * itemCount);
    this.totalPriceChange.emit(this.orderTotalPrice);
  }

  ngOnInit() {
this.cs.getCard().subscribe(card => {
  this.allCard = card.map(shopping => {
    return {
      id: shopping.payload.doc.id,
      ...shopping.payload.doc.data()
    };
  });

});
  }

}
