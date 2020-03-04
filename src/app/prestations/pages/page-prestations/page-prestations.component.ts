import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  public collection : Prestation[];
  constructor(
    private prestationsService: PrestationsService
  ) { }

  ngOnInit(): void {
    this.prestationsService.collection.subscribe(
      (datas) => {this.collection = datas;}
    );
  }

}
