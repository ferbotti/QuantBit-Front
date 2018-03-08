import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Coin } from 'app/Coin';
import { CoinService } from 'app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  coin: Coin[];
  rank: string;
    
    constructor(private _coinService: CoinService) {
    }

    CoinSelect(): void {
        this._coinService.getCoin(this.rank)
            .subscribe((data: Coin[]) => this.coin = data,
            error => console.log(error));
    }

    CoinSelectList(): void {
      this._coinService.getListCoin()
          .subscribe((data: Coin[]) => this.coin = data,
          error => console.log(error));
  }
}
