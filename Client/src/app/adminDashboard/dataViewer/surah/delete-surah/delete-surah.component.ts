import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SurahService } from 'src/app/service/surah.service';

@Component({
  selector: 'app-delete-surah',
  templateUrl: './delete-surah.component.html',
  styleUrls: ['./delete-surah.component.css'],
})
export class DeleteSurahComponent {
  deleteSurahForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private surahService: SurahService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.deleteSurahForm = this.formBuilder.group({
      suraID: ['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.deleteSurahForm.valid) {
      const surahID = this.deleteSurahForm.value.suraID;
      this.surahService.deleteSurah(surahID);
      this.deleteSurahForm.reset();
    }
  }
}
