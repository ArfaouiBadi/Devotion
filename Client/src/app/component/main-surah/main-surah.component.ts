import { Component, OnInit } from '@angular/core';
import { Surah } from 'src/app/interfaces/surah';
import { SurahService } from 'src/app/service/surah.service';

@Component({
  selector: 'app-main-surah',
  templateUrl: './main-surah.component.html',
  styleUrls: ['./main-surah.component.css'],
})
export class MainSurahComponent implements OnInit {
  AllSurahs: Surah[] = [];
  filteredSurahs: Surah[] = [];
  searchTerm: string = '';
  currentAudio: HTMLAudioElement | null = null;
  currentTime: number = 0;
  duration: number = 0;
  isPlaying: boolean = false;

  constructor(private surahService: SurahService) {}

  ngOnInit(): void {
    this.getSurahs();
  }

  getSurahs(): void {
    this.surahService.getAllSurahs().subscribe((data: Surah[]) => {
      this.AllSurahs = data;
      this.filteredSurahs = data;
      console.log(data);
    });
  }

  playAudio(audioUrl: string): void {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio = null;
      this.isPlaying = false;
    }

    this.currentAudio = new Audio(audioUrl);
    this.currentAudio
      .play()
      .then(() => {
        this.isPlaying = true;
        this.currentAudio!.ontimeupdate = () => {
          this.currentTime = this.currentAudio!.currentTime;
          this.duration = this.currentAudio!.duration;
        };
      })
      .catch((error) => {
        console.error('Error playing audio: ', error);
        alert(
          'Failed to load audio. Please check the URL or try a different audio format.'
        );
      });
  }

  pauseAudio(): void {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.isPlaying = false;
    }
  }

  filterSurahs(): void {
    this.filteredSurahs = this.AllSurahs.filter(
      (surah) =>
        surah.name &&
        surah.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
