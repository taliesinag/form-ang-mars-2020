import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { Observable } from 'rxjs';
import { State } from 'src/app/shared/enums/state.enum';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  // Fonction values() de Object permet de récupérer un tableau des valeurs de l'objet passer en params
  // La fonction keys() permet de retourner un tableau comportant le nom des attributs de l'object.
  public states = Object.values(State);
  public collection$ : Observable<Prestation[]>;
  public tableHeaders: string[];
  constructor(
    private prestationsService: PrestationsService
  ) {}

  ngOnInit(): void {
    this.collection$ = this.prestationsService.collection;
    // Exemple : Subscribe()
    // this.prestationsService.collection.subscribe(
    //   (datas) => {this.collection = datas;}
    // );
    this.tableHeaders = [
      'Type',
      'Client',
      'NBJours',
      'TjmHT',
      'Total HT',
      'Total TTC',
      'State'
    ];
  }
  changeState(event, prestation: Prestation){
    this.prestationsService.updateState(prestation, event.target.value).subscribe((res: Prestation) => {
      prestation.state = res.state;
    });
  }
}
