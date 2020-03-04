import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  public collection$ : Observable<Prestation[]>;
  public tableHeaders: string[];
  constructor(
    private prestationsService: PrestationsService
  ) { }

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

}
