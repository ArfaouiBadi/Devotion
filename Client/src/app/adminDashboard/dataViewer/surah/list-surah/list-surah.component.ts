import { Component, OnInit } from '@angular/core';
import { Surah } from 'src/app/interfaces/surah';
import { SurahService } from 'src/app/service/surah.service';

@Component({
  selector: 'app-list-surah',
  templateUrl: './list-surah.component.html',
  styleUrls: ['./list-surah.component.css'],
})
export class ListSurahComponent implements OnInit {
  surahs: Surah[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private surahService: SurahService) {}

  ngOnInit(): void {
    this.loadSurahs();
  }

  loadSurahs(): void {
    this.surahService.getAllSurahs().subscribe((data: Surah[]) => {
      this.surahs = data;
      this.totalPages = Math.ceil(this.surahs.length / 10); // Adjust the logic for pagination
    });
  }

  deleteSurah(id: number): void {
    this.surahService.deleteSurah(id).subscribe({
      next: () => {
        this.surahs = this.surahs.filter((s) => s.suraID !== id);
      },
      error: (err) => {
        console.error('Error deleting Surah:', err);
      },
    });
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadSurahs();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadSurahs();
    }
  }
}
