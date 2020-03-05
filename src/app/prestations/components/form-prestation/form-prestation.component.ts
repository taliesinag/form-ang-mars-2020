import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {
  public states = Object.values(State);
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();
  @Input() prestation = new Prestation();
  public prestationFormGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.prestationFormGroup = this.formBuilder.group({
      typePresta: [this.prestation.typePresta],
      client: [this.prestation.client],
      tjmHt: [this.prestation.tjmHt],
      nbJours: [this.prestation.nbJours],
      tva: [this.prestation.tva],
      state: [this.prestation.typePresta],
      comment: [this.prestation.comment]
    });
  }

}
