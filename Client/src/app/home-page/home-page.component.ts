import { Component } from '@angular/core';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { FooterComponent } from '../component/footer/footer.component';
import { MainContentComponent } from '../component/main-content/main-content.component';
import { CategoryDuasAndZikrComponent } from '../component/category-duas-and-zikr/category-duas-and-zikr.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    MainContentComponent,
    CategoryDuasAndZikrComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {}
