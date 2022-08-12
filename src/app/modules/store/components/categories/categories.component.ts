import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() categories: string[] = [];
  @Output() categoryEmit = new EventEmitter<string>(); 
  
  constructor() { }

  ngOnInit(): void {
  }

  selectedCategory(key: string) {
    this.categoryEmit.emit(key);
  }

}
