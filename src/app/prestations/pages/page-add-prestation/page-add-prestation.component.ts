import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationsService } from '../../services/prestations.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {
  public title: string;
  public subTitle: string;
  constructor(
    private prestationService: PrestationsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((datas) => {
      console.log(datas);
      this.title = datas.title;
      this.subTitle = datas.subTitle;
    });
  }
  public addItem(prestation: Prestation) {
    // console.log(prestation);
    this.prestationService.add(prestation).subscribe((res) => {
      console.log(res);
      // redirection avec navigate classique
      // this.router.navigate(['prestations']);
      this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    },
    (error) => {
      // console.log(error);
     },
    () => { console.log('complete()'); });
  }

}
