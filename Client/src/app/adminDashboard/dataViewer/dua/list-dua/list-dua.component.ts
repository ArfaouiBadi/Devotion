import { Component, OnInit } from '@angular/core';

import { Dua } from 'src/app/interfaces/dua';
import { DuaService } from 'src/app/service/dua.service';

@Component({
  selector: 'app-list-dua',
  templateUrl: './list-dua.component.html',
  styleUrls: ['./list-dua.component.css'],
})
export class ListDuaComponent implements OnInit {
  duas: Dua[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private duaService: DuaService) {}

  ngOnInit(): void {
    this.loadDuas();
  }

  loadDuas(): void {
    this.duaService.getAllDuas().subscribe((data: Dua[]) => {
      this.duas = data;
      this.totalPages = Math.ceil(this.duas.length / 10); // Adjust the logic for pagination
    });
  }

  deleteDua(id: number): void {
    this.duaService.deleteDua(id).subscribe({
      next: () => {
        this.duas = this.duas.filter((d) => d.duaID !== id);
      },
      error: (err) => {
        console.error('Error deleting Dua:', err);
      },
    });
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadDuas();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadDuas();
    }
  }
}
