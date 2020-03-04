import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prestation } from 'src/app/shared/models/prestation';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private pCollection: Observable<Prestation[]>;
  constructor(
    private http: HttpClient
  ) {
    this.collection = this.http.get<Prestation[]>(`${environment.urlApî}prestations`).pipe(
      // map( (datas) => {return datas.map((objJson) => {return new Prestation(objJson)})})
      map(datas => datas.map(objJson => new Prestation(objJson)))
    );
   }

  // get collection
  public get collection(): Observable<Prestation[]> {
    return this.pCollection;
  }
  // set collection
  public set collection(collection: Observable<Prestation[]>) {
    this.pCollection = collection;
  }
  // add item in collection

  // update item in collection

  // delete item in collection

  // get item by id from collection

}
