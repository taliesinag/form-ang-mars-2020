import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trash-icon',
  templateUrl: './trash-icon.component.html',
  styleUrls: ['./trash-icon.component.scss']
})
export class TrashIconComponent implements OnInit {
  public faTrashAlt = faTrashAlt;
  @Output() click: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  public onClick() {
    this.click.emit();
  }
}
