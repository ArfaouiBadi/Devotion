import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dua } from 'src/app/interfaces/dua';
import { DuaService } from 'src/app/service/dua.service';

@Component({
  selector: 'app-main-dua',
  templateUrl: './main-dua.component.html',
  styleUrls: ['./main-dua.component.css'],
})
export class MainDuaComponent implements OnInit {
  category: string | null = null;
  allDua: Dua[] = [];

  constructor(private route: ActivatedRoute, private duaService: DuaService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category');
      if (this.category) {
        this.fetchDuasByCategory(this.category);
      }
    });
  }

  fetchDuasByCategory(category: string) {
    this.duaService.getDuasByCategory(category).subscribe((duas: Dua[]) => {
      this.allDua = duas;
      console.log(this.allDua);
    });
  }
}
