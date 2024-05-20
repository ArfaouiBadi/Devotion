import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Surah } from 'src/app/interfaces/surah';
import { SurahService } from 'src/app/service/surah.service';

@Component({
  selector: 'app-update-surah',
  templateUrl: './update-surah.component.html',
  styleUrls: ['./update-surah.component.css'],
})
export class UpdateSurahComponent implements OnInit {
  surahForm: FormGroup;
  surahId: number;
  surah: Surah;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private surahService: SurahService
  ) {
    this.surahForm = this.fb.group({
      name: ['', Validators.required],
      englishName: ['', Validators.required],
      type: ['', Validators.required],
      place: ['', Validators.required],
      audioUrl: [''],
      arabicName: ['', Validators.required],
      meaning: ['', Validators.required],
      totalAya: ['', Validators.required],
    });

    this.surahId = 0;
    this.surah = {} as Surah;
  }

  ngOnInit(): void {
    this.surahId = +this.route.snapshot.paramMap.get('id')!;

    this.surahService.getSurahById(this.surahId).subscribe((data: Surah) => {
      this.surah = data;

      this.populateForm(data);
    });
  }

  populateForm(surah: Surah): void {
    this.surahForm.patchValue({
      name: surah.name,
      englishName: surah.englishName,
      type: surah.type,
      place: surah.place,
      audioUrl: surah.audioUrl,
      arabicName: surah.arabicName,
      meaning: surah.meaning,
      totalAya: surah.totalAya,
    });
  }

  submitForm(): void {
    if (this.surahForm.valid) {
      const updatedSurah: Surah = {
        ...this.surah,
        ...this.surahForm.value,
      };
      this.surahService.updateSurah(updatedSurah).subscribe(() => {
        this.router.navigate(['/adminDashboard/surah']); // Navigate back to the list after update
      });
    }
  }
}
