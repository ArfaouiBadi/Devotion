import { Component, OnInit } from '@angular/core';
import { Hadith } from 'src/app/interfaces/hadith';
import { HadithService } from 'src/app/service/hadith.service';

@Component({
  selector: 'app-main-hadith',
  templateUrl: './main-hadith.component.html',
  styleUrls: ['./main-hadith.component.css'],
})
export class MainHadithComponent implements OnInit {
  constructor(private hadithService: HadithService) {}
  allHadiths: Hadith[] = [];
  ngOnInit(): void {
    this.getHadiths();
  }
  getHadiths(): void {
    this.hadithService.getAllHadiths().subscribe((data: any) => {
      this.allHadiths = data;
    });
  }
}
