import { PrestationsI } from '../interfaces/prestations-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationsI{
  id: number;
  typePresta: string;
  client: string;
  tjmHt: number = 1499;
  nbJours: number = 1;
  tva: number = 20;
  state: State = State.OPTION;
  comment: string;
  constructor(objJson?: Partial<Prestation>) {
    if (objJson) {
      Object.assign(this, objJson);
    }
  }
  totalHt(): number {
    return this.tjmHt * this.nbJours;
  }
  totalTtc(): number {
    if ( this.tva <= 0) {
      return this.totalHt();
    }
    return this.totalHt() * ( 1 + this.tva / 100);
  }

}
