import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
/**
 * encapsulation: ViewEncapsulation.none permet de désactivé le shadow dom et donc
 * de ne plus encapsuler le composant. Il faut cependant alourdir le poid du selector CSS
 * pour limiter la possibilité qu'un développeur écrase le css vu qu'il n'est plus encapsuler.
 */
@Component({
  selector: 'app-tableau-light',
  templateUrl: './tableau-light.component.html',
  styleUrls: ['./tableau-light.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableauLightComponent implements OnInit {
  @Input() tableHeaders: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
