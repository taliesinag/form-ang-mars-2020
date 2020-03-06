import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      id: [this.prestation.id],
      typePresta: [this.prestation.typePresta, [Validators.required]],
      client: [this.prestation.client, [Validators.required]],
      tjmHt: [this.prestation.tjmHt, [Validators.required, Validators.min(1000)]],
      nbJours: [this.prestation.nbJours, [Validators.required, Validators.min(1), Validators.max(25)]],
      tva: [this.prestation.tva, [Validators.required]],
      state: [this.prestation.typePresta, [Validators.required]],
      comment: [this.prestation.comment]
    });
  }
  public onSubmit() {
    // console.log(this.prestationFormGroup.value);
    this.nItem.emit(this.prestationFormGroup.value);
  }
}
