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
  itemsPerPage: number = 10; // Number of items to display per page

  constructor(private surahService: SurahService) {}

  ngOnInit(): void {
    this.loadSurahs();
  }

  loadSurahs(): void {
    this.surahService.getAllSurahs().subscribe((surahs) => {
      this.surahs = surahs;
    });
  }

  getCurrentPageSurahs(): Surah[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.surahs.slice(startIndex, endIndex);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.surahs.length / this.itemsPerPage);
  }
}
