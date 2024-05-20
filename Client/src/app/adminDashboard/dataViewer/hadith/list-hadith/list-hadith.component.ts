import { Component, OnInit } from '@angular/core';
import { Hadith } from 'src/app/interfaces/hadith';
import { HadithService } from 'src/app/service/hadith.service';

@Component({
  selector: 'app-list-hadith',
  templateUrl: './list-hadith.component.html',
  styleUrls: ['./list-hadith.component.css'],
})
export class ListHadithComponent implements OnInit {
  hadiths: Hadith[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private hadithService: HadithService) {}

  ngOnInit(): void {
    this.loadHadiths();
  }

  loadHadiths(): void {
    this.hadithService.getAllHadiths().subscribe((data: Hadith[]) => {
      this.hadiths = data;
      this.totalPages = Math.ceil(this.hadiths.length / 10); // Adjust the logic for pagination
    });
  }

  deleteHadith(id: number): void {
    this.hadithService.deleteHadith(id).subscribe({
      next: () => {
        this.hadiths = this.hadiths.filter((h) => h.hadithID !== id);
      },
      error: (err) => {
        console.error('Error deleting Hadith:', err);
      },
    });
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadHadiths();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadHadiths();
    }
  }
}
