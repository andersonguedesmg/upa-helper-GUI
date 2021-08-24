import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  public form: FormGroup;
  public name = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(128)],
    updateOn: 'blur',
  });
  public email = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(100)],
    updateOn: 'blur',
  });
  public birthday = this.fb.control('', {
    validators: [Validators.maxLength(256)],
    updateOn: 'blur',
  });
  public rg = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public cpf = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public zipCode = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public address = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public number = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public neighborhood = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public city = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public state = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public complement = this.fb.control('', {
    validators: [],
    updateOn: 'blur',
  });
  public telephone = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public cell = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public userType = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });

  constructor(public userService: UserService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: this.name,
      email: this.email,
      birthday: this.birthday,
      rg: this.rg,
      cpf: this.cpf,
      zipCode: this.zipCode,
      address: this.address,
      number: this.number,
      neighborhood: this.neighborhood,
      city: this.city,
      state: this.state,
      complement: this.complement,
      telephone: this.telephone,
      cell: this.cell,
      userType: this.userType,
    });
  }

  ngOnInit(): void {}
}
