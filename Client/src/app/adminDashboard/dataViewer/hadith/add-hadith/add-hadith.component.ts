import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hadith } from 'src/app/interfaces/hadith';
import { HadithService } from 'src/app/service/hadith.service';

@Component({
  selector: 'app-add-hadith',
  templateUrl: './add-hadith.component.html',
  styleUrls: ['./add-hadith.component.css'],
})
export class AddHadithComponent {
  hadithForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private hadithService: HadithService,
    private router: Router
  ) {
    this.hadithForm = this.fb.group({
      source: ['', Validators.required],
      text: ['', Validators.required],
      arabicInHadith: [''],
      translation: ['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.hadithForm.valid) {
      const newHadith: Hadith = this.hadithForm.value;
      this.hadithService.addHadith(newHadith).subscribe({
        next: (res) => {
          this.router.navigate(['/adminDashboard/hadith']);
        },
        error: (err) => {
          console.error('Error adding Hadith:', err);
        },
      });
    }
  }
}
