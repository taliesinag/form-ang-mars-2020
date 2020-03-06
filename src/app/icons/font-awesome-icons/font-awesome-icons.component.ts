import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { faTrashAlt, faEdit, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-font-awesome-icons',
  templateUrl: './font-awesome-icons.component.html',
  styleUrls: ['./font-awesome-icons.component.scss']
})
export class FontAwesomeIconsComponent implements OnInit {
  public Icons = {
    trash: 'trash',
    edit: 'edit',
    bars: 'bars'
  }
  @Input() icon: string;
  @Output() takeTheClick: EventEmitter<void> = new EventEmitter();

  public faTrashAlt = faTrashAlt;
  public faEdit = faEdit;
  public faBars = faBars;
  constructor() { }

  ngOnInit(): void {
  }
  public onClick() {
    this.takeTheClick.emit();
  }
}
