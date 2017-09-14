import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Cafe } from "./cafe";

@Injectable()
export class CafeService {

  private _getUrl = '/api/cafes';
  private _postUrl = '/api/cafe';
  private _putUrl = '/api/cafe/';
  private _deleteUrl = '/api/cafe/';

  constructor(private _http: Http) { }

  getCafes() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

  addCafe(cafe: Cafe) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._postUrl, JSON.stringify(cafe), options)
      .map((response: Response) => response.json());
  }

  updateCafe(cafe: Cafe) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this._putUrl + cafe._id, JSON.stringify(cafe), options)
      .map((response: Response) => response.json());
  }

  deleteCafe(cafe: Cafe) {
    return this._http.delete(this._deleteUrl + cafe._id)
      .map((response: Response) => response.json());
  }

}
