import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filter: string[] = [
    "Todos",
    "Precio de menor a mayor",
    "Precio de mayor a menor",
    "Por categoría",
  ]
  selected: string = 'Todos';
  @Output() selectedEmit = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectItem(index: number) {
    this.selected = this.filter[index]
    this.selectedEmit.emit(this.selected);
  }
}
