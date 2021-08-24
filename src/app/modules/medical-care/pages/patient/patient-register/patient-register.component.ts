import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.scss'],
})
export class PatientRegisterComponent implements OnInit {
  public form: FormGroup;
  public name = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(128)],
    updateOn: 'blur',
  });
  public socialName = this.fb.control('', {
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
  public cns = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(100)],
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
  public fatherName = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(100)],
    updateOn: 'blur',
  });
  public motherName = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(100)],
    updateOn: 'blur',
  });
  public ethnicity = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(100)],
    updateOn: 'blur',
  });
  public gender = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(100)],
    updateOn: 'blur',
  });

  constructor(public userService: PatientService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: this.name,
      socialName: this.socialName,
      birthday: this.birthday,
      rg: this.rg,
      cpf: this.cpf,
      cns: this.cns,
      zipCode: this.zipCode,
      address: this.address,
      number: this.number,
      neighborhood: this.neighborhood,
      city: this.city,
      state: this.state,
      complement: this.complement,
      telephone: this.telephone,
      cell: this.cell,
      ethnicity: this.ethnicity,
      gender: this.gender,
    });
  }

  ngOnInit(): void {}
}
