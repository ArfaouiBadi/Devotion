import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Dua } from 'src/app/interfaces/dua';
import { DuaService } from 'src/app/service/dua.service';

@Component({
  selector: 'app-update-dua',
  templateUrl: './update-dua.component.html',
  styleUrls: ['./update-dua.component.css'],
})
export class UpdateDuaComponent implements OnInit {
  duaForm: FormGroup;
  duaId!: number;

  constructor(
    private fb: FormBuilder,
    private duaService: DuaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.duaForm = this.fb.group({
      duaID: [{ value: '', disabled: true }],
      category: ['', Validators.required],
      text: ['', Validators.required],
      translation: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.duaId = +this.route.snapshot.paramMap.get('id')!;
    this.duaService.getDuaById(this.duaId).subscribe((dua) => {
      this.duaForm.patchValue(dua);
    });
  }

  submitForm(): void {
    if (this.duaForm.valid) {
      const updatedDua: Dua = { ...this.duaForm.value, duaID: this.duaId };
      this.duaService.updateDua(updatedDua).subscribe({
        next: (res) => {
          this.router.navigate(['/adminDashboard/dua']);
        },
        error: (err) => {
          console.error('Error updating Dua:', err);
        },
      });
    }
  }
}
