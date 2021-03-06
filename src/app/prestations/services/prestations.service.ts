import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';
@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private pCollection$: Observable<Prestation[]>;
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
    return this.pCollection$;
  }
  // set collection
  public set collection(collection: Observable<Prestation[]>) {
    this.pCollection$ = collection;
  }
  // add item in collection
  public add(prestation: Prestation) {
    return this.http.post(`${environment.urlApî}prestations`, prestation);
  }
  // update State
  public updateState(prestation: Prestation, state: State) {
    let obj = new Prestation(prestation);
    obj.state = state;
    return this.update(obj);
  }
  // update item in collection
  public update(item: Prestation) {
    return this.http.patch(`${environment.urlApî}prestations/${item.id}`, item);
  }
  // delete item in collection
  public delete(item: Prestation) {
    console.log('delete');
    return this.http.delete(`${environment.urlApî}prestations/${item.id}`);
  }
  // get item by id from collection
  public getItemById(id: number) {
    return this.http.get(`${environment.urlApî}prestations/${id}`);
  }
}
