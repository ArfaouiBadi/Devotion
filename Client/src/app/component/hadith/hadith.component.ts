import { Component, OnInit } from '@angular/core';
import { Hadith } from 'src/app/interfaces/hadith';
import { HadithService } from 'src/app/service/hadith.service';

@Component({
  selector: 'app-hadith',
  templateUrl: './hadith.component.html',
  styleUrls: ['./hadith.component.css'],
})
export class HadithComponent implements OnInit {
  hadiths: Hadith[] = [];
  randomHadith: Hadith = {
    hadithID: 0,
    source: '',
    text: '',
    arabicInHadith: '',
    translation: '',
  };

  constructor(private hadithService: HadithService) {}

  ngOnInit(): void {
    this.getHadith();
  }

  getHadith(): void {
    this.hadithService.getAllHadiths().subscribe((data: any) => {
      this.hadiths = data;
      this.setRandomHadith();
    });
  }
  setRandomHadith(): void {
    if (this.hadiths.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.hadiths.length);
      this.randomHadith = this.hadiths[randomIndex];
    }
  }
}
