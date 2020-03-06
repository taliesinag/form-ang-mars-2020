import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
/**
 * Un page doit servir de container et porté la logique de la page.
 * Elle va contenir que des petits composants d'affichage qui ne porte aucune logique.
 */
export class PagePrestationsComponent implements OnInit {
  // Fonction values() de Object permet de récupérer un tableau des valeurs de l'objet passer en params
  // La fonction keys() permet de retourner un tableau comportant le nom des attributs de l'object.
  public title: string;
  public subTitle: string;
  public states = Object.values(State);
  // public collection$ : Observable<Prestation[]>;
  public collection$ = new BehaviorSubject<Prestation[]>(null);
  public tableHeaders: string[];

  // Button
  public buttonLabel: string;
  public route: string;
  public externalLink: string;
  constructor(
    private prestationsService: PrestationsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.collection$ = this.prestationsService.collection;
    // Exemple : Subscribe()
    // this.prestationsService.collection.subscribe(
    //   (datas) => {this.collection = datas;}
    // );
    this.prestationsService.collection.subscribe((datas) => {
      this.collection$.next(datas);
    })
    this.tableHeaders = [
      'Type',
      'Client',
      'NBJours',
      'TjmHT',
      'Total HT',
      'Total TTC',
      'State',
      'Delete'
    ];
    this.buttonLabel = 'Ajouter une prestation';
    this.route = 'add';
    this.externalLink = 'https://www.google.fr';
    this.activatedRoute.data.subscribe((datas) => {
      console.log(datas);
      this.title = datas.title;
      this.subTitle = datas.subTitle;
    });
  }
  public changeState(event, prestation: Prestation){
    this.prestationsService.updateState(prestation, event.target.value).subscribe((res: Prestation) => {
      prestation.state = res.state;
    });
  }
  public delete(prestation: Prestation){
    console.log('delete page prestations');
    this.prestationsService.delete(prestation).subscribe((res) => {
      console.log(res);
      this.prestationsService.collection.subscribe((datas: Prestation[]) => {
        this.collection$.next(datas);
      })
    });
  }
  public edit(prestation: Prestation) {
    this.router.navigate(['prestations','edit',prestation.id]);
  }
}
