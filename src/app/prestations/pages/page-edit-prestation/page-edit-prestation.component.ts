import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-edit-prestation',
  templateUrl: './page-edit-prestation.component.html',
  styleUrls: ['./page-edit-prestation.component.scss']
})
export class PageEditPrestationComponent implements OnInit {
  public title: string;
  public subTitle: string;
  public item$: Observable<any>;
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
    // this.activatedRoute.params.subscribe((params) => {
    //    console.log(params);
    //    this.item$ = this.prestationService.getItemById(params.id);
    //    });
    this.item$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.prestationService.getItemById(+params.get('id'));
      })
    );
  }
  public updateItem(prestation: Prestation) {
    this.prestationService.update(prestation).subscribe((res) => {
      this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
    },
    (error) => {
      // console.log(error);
     },
    () => { console.log('complete()'); });
  }
}
