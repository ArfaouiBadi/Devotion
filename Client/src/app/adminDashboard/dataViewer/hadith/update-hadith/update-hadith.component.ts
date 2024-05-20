import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Hadith } from 'src/app/interfaces/hadith';
import { HadithService } from 'src/app/service/hadith.service';

@Component({
  selector: 'app-update-hadith',
  templateUrl: './update-hadith.component.html',
  styleUrls: ['./update-hadith.component.css'],
})
export class UpdateHadithComponent implements OnInit {
  hadithForm: FormGroup;
  hadithId!: number;

  constructor(
    private fb: FormBuilder,
    private hadithService: HadithService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.hadithForm = this.fb.group({
      hadithID: [{ value: '', disabled: true }],
      source: ['', Validators.required],
      text: ['', Validators.required],
      arabicInHadith: ['', Validators.required],
      translation: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.hadithId = +this.route.snapshot.paramMap.get('id')!;
    this.hadithService.getHadithById(this.hadithId).subscribe((hadith) => {
      this.hadithForm.patchValue(hadith);
    });
  }

  submitForm(): void {
    if (this.hadithForm.valid) {
      const updatedHadith: Hadith = {
        ...this.hadithForm.value,
        hadithID: this.hadithId,
      };
      this.hadithService.updateHadith(updatedHadith).subscribe({
        next: (res) => {
          this.router.navigate(['/adminDashboard/hadith']);
        },
        error: (err) => {
          console.error('Error updating Hadith:', err);
        },
      });
    }
  }
}
