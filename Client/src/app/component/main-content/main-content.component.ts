import { Component } from '@angular/core';
import { CategoryDuasAndZikrComponent } from '../category-duas-and-zikr/category-duas-and-zikr.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CategoryDuasAndZikrComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
