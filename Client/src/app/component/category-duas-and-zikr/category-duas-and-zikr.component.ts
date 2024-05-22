import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-duas-and-zikr',
  templateUrl: './category-duas-and-zikr.component.html',
  styleUrls: ['./category-duas-and-zikr.component.css'],
})
export class CategoryDuasAndZikrComponent {
  constructor(private router: Router) {}

  navigateToCategory(category: string) {
    this.router.navigate(['/dua', category]);
  }
}
