import { Directive, Input, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  // Une directive ne peut prendre qu'un seul input() qui doit porter le nnomp du selector de la directive
  @Input() appState: any;
  // Permet de bind un attribut ici class de l'element porteur de la directive
  @HostBinding('class') classTd: string;
  constructor() { }

  /**
   * OnChanges permet à Angular de détecter la mise à jour d'un input() et donc de réappliquer la directive a chaque
   * fois que l'input change de value
   */
  ngOnChanges(): void {
    console.log(this.appState)
    this.classTd = this.formatClass(this.appState);
  }
  /**
   * Si app-state vaut Annulé => state-annule
   * Si app-state vaut Option => state-option
   * Si app-state vaut Confirme => state-confirme
   * Puis Bind l'attribut Class du host element td avec le bon string
   */
  private formatClass(state: string) {
    // Replace les accents et lower case du string
    return `state-${state.normalize("NFD").replace(/[\u0300-\u036f\s]/g, "").toLowerCase()}`;
  }
}
