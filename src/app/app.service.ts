import { Injectable } from '@angular/core';
import { Coin } from './Coin';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';


let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });

@Injectable()
export class CoinService {
private _Url = 'https://quantbit.herokuapp.com/cryptos/order/';
private _UrlList = 'https://quantbit.herokuapp.com/cryptos/list/10';

//private _Url = 'http://localhost:3000/cryptos/order/';
//private _UrlList = 'http://localhost:3000/cryptos/list/6';

    constructor(private _http: Http) { }
    
    getCoin(rank: string): Observable<Coin[]> {
        
        return this._http.get(this._Url.concat(parseInt(rank).toString()), options)
            .map((response: Response) => <Coin[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getListCoin(): Observable<Coin[]> {
        
        return this._http.get(this._UrlList, options)
            .map((response: Response) => <Coin[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}