import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hidePassword = true;
  form: UntypedFormGroup;
  cpf = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  password = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });

  constructor(
    private authService: AuthService,
    private fb: UntypedFormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      cpf: this.cpf,
      password: this.password,
    });
  }

  ngOnInit(): void {}

  async onLogin() {
    if (this.form.valid) {
      var request = this.form.value;
      let login = await this.authService.login(request);
      if (login) {
        window.localStorage.setItem(
          'userCpfLogged',
          String(this.form.value.cpf)
        );
        this.router.navigate(['/dashboard']);
      }
    }
  }
}
