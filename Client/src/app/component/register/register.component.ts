import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      phone: ['', [Validators.required]],
      address: [''],
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
    });
  }

  submitForm() {
    if (this.registerForm.valid) {
      const user: User = {
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        phone: this.registerForm.value.phone,
        address: this.registerForm.value.address,
        nom: this.registerForm.value.nom,
        prenom: this.registerForm.value.prenom,
        role: 'Member',
      };
      console.log('Registering user:', user);
      // Call the appropriate service method to register the user
      this.authService.register(user).subscribe(
        (res) => {
          this.router.navigate(['/home']);
        },
        (err) => {
          console.error(err.error);
          console.error('Registration failed:', err);
        }
      );
    }
  }
}
