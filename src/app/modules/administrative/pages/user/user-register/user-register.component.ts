import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  private password: string = 'UPA1@email';
  public isActive: boolean = true;
  public form: FormGroup;
  public name = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public email = this.fb.control('', {
    validators: [
      Validators.required,
      Validators.maxLength(255),
      Validators.email,
    ],
    updateOn: 'blur',
  });
  public birthday = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public rg = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(15)],
    updateOn: 'blur',
  });
  public cpf = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(14)],
    updateOn: 'blur',
  });
  public zipCode = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(9)],
    updateOn: 'blur',
  });
  public address = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public number = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(20)],
    updateOn: 'blur',
  });
  public neighborhood = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public city = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(100)],
    updateOn: 'blur',
  });
  public state = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(25)],
    updateOn: 'blur',
  });
  public complement = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public telephone = this.fb.control('', {
    validators: [Validators.maxLength(13)],
    updateOn: 'blur',
  });
  public cell = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(14)],
    updateOn: 'blur',
  });
  public userTypeId = this.fb.control('', {
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
      userTypeId: this.userTypeId,
      isActive: this.isActive,
      password: this.password,
    });
  }

  ngOnInit(): void {}

  saveNewUser() {
    if (this.form.valid) {
      var request = this.form.value;
      this.userService.addUser(request).subscribe(() => {
        location.reload();
        this.clearForm();
      });
    }
  }

  clearForm() {
    this.form.reset();
  }
}
