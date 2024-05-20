import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Surah } from 'src/app/interfaces/surah';
import { SurahService } from 'src/app/service/surah.service';

@Component({
  selector: 'app-add-surah',
  templateUrl: './add-surah.component.html',
  styleUrls: ['./add-surah.component.css'],
})
export class AddSurahComponent implements OnInit {
  surahForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private surahService: SurahService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.surahForm = this.formBuilder.group({
      name: ['', Validators.required],
      audioUrl: [''],
      englishName: ['', Validators.required],
      arabicName: [''],
      meaning: [''],
      type: [''],
      popularOrNot: [false],
      place: [''],
      totalAya: [0],
    });
  }

  submitForm(): void {
    if (this.surahForm.valid) {
      const newSurah: Surah = {
        // You may want to remove this property if it's generated on the server
        audioUrl: this.surahForm.get('audioUrl')!.value, // You may want to add a field for audio URL or remove this property
        name: this.surahForm.get('name')!.value,
        englishName: this.surahForm.get('englishName')!.value,
        arabicName: this.surahForm.get('arabicName')!.value,
        meaning: this.surahForm.get('meaning')!.value,
        type: this.surahForm.get('type')!.value,
        popularOrNot: this.surahForm.get('popularOrNot')!.value,
        place: this.surahForm.get('place')!.value,
        totalAya: this.surahForm.get('totalAya')!.value,
      };

      this.surahService.addSurah(newSurah).subscribe(() => {
        console.log('Surah added successfully');
      });

      this.surahForm.reset();
    } else {
      // Handle invalid form
      // You can display validation errors or any other message here
    }
  }
}
