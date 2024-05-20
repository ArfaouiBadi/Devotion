import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Dua } from 'src/app/interfaces/dua';
import { DuaService } from 'src/app/service/dua.service';

@Component({
  selector: 'app-add-dua',
  templateUrl: './add-dua.component.html',
  styleUrls: ['./add-dua.component.css'],
})
export class AddDuaComponent {
  duaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private duaService: DuaService,
    private router: Router
  ) {
    this.duaForm = this.fb.group({
      category: ['', Validators.required],
      text: ['', Validators.required],
      translation: ['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.duaForm.valid) {
      const newDua: Dua = this.duaForm.value;
      this.duaService.addDua(newDua).subscribe({
        next: (res) => {
          this.router.navigate(['/adminDashboard/dua']);
        },
        error: (err) => {
          console.error('Error adding Dua:', err);
        },
      });
    }
  }
}
