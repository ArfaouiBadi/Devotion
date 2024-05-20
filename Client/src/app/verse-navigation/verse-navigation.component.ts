import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verse-navigation',
  templateUrl: './verse-navigation.component.html',
  styleUrls: ['./verse-navigation.component.css']
})
export class VerseNavigationComponent implements OnInit {
  surahs: { id: number, name: string, ayahCount: number }[] = [
    { id: 1, name: 'Al-Fatihah', ayahCount: 7 },
    // Add more surahs as needed
  ];
  verses: number[] = [];
  selectedSurahId: number = 1;
  selectedVerse: number = 1;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.updateVerses();
    this.displayVerse(this.selectedSurahId, this.selectedVerse);
  }

  onSurahChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedSurahId = parseInt(target.value, 10);
    this.updateVerses();
    this.selectedVerse = 1;
    this.displayVerse(this.selectedSurahId, this.selectedVerse);
  }

  onVerseChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedVerse = parseInt(target.value, 10);
    this.displayVerse(this.selectedSurahId, this.selectedVerse);
  }

  prevVerse() {
    if (this.selectedVerse > 1) {
      this.selectedVerse--;
      this.displayVerse(this.selectedSurahId, this.selectedVerse);
    }
  }

  nextVerse() {
    if (this.selectedVerse < this.verses.length) {
      this.selectedVerse++;
      this.displayVerse(this.selectedSurahId, this.selectedVerse);
    }
  }

  updateVerses() {
    const selectedSurah = this.surahs.find(surah => surah.id === this.selectedSurahId);
    if (selectedSurah) {
      this.verses = Array.from({ length: selectedSurah.ayahCount }, (_, i) => i + 1);
    }
  }

  displayVerse(surah: number, verse: number) {
    this.http.get(`https://api.alquran.cloud/v1/ayah/${surah}:${verse}`)
      .subscribe((data: any) => {
        const verseDisplay = document.getElementById('verse-display');
        if (verseDisplay) {
          verseDisplay.textContent = data.data.text;
        }
      }, error => console.error('Error fetching verse:', error));
  }
}
