import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmDialogModel,
  ConfirmDialogComponent,
} from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.scss'],
})
export class PatientRegisterComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  public form: FormGroup;
  public name = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public socialName = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public birthday = this.fb.control('', {
    validators: [],
    updateOn: 'blur',
  });
  public rg = this.fb.control('', {
    validators: [Validators.maxLength(15)],
    updateOn: 'blur',
  });
  public cpf = this.fb.control('', {
    validators: [Validators.maxLength(14)],
    updateOn: 'blur',
  });
  public cns = this.fb.control('', {
    validators: [Validators.maxLength(15)],
    updateOn: 'blur',
  });
  public zipCode = this.fb.control('', {
    validators: [Validators.maxLength(9)],
    updateOn: 'blur',
  });
  public address = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public number = this.fb.control('', {
    validators: [Validators.maxLength(20)],
    updateOn: 'blur',
  });
  public neighborhood = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public city = this.fb.control('', {
    validators: [Validators.maxLength(100)],
    updateOn: 'blur',
  });
  public state = this.fb.control('', {
    validators: [Validators.maxLength(25)],
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
    validators: [Validators.maxLength(14)],
    updateOn: 'blur',
  });
  public fatherName = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public motherName = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public ethnicityId = this.fb.control('', {
    validators: [],
    updateOn: 'blur',
  });
  public genderId = this.fb.control('', {
    validators: [],
    updateOn: 'blur',
  });

  constructor(
    public patientService: PatientService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
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
      fatherName: this.fatherName,
      motherName: this.motherName,
      ethnicityId: this.ethnicityId,
      genderId: this.genderId,
      isActive: true,
    });
  }

  ngOnInit(): void {}

  confirmDialog(): void {
    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel('Salvar usuário', message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      if (dialogResult == true) {
        this.saveNewPatient();
      }
    });
  }

  saveNewPatient() {
    if (this.form.valid) {
      const message = `Você tem certeza de que quer salvar esse paciente?`;
      const dialogData = new ConfirmDialogModel('Salvar paciente', message);
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: '400px',
        data: dialogData,
      });

      dialogRef.afterClosed().subscribe((dialogResult) => {
        if (dialogResult == true) {
          var request = this.form.value;
          this.patientService.addPatient(request).subscribe(() => {
            location.reload();
            this.clearForm();
          });
        }
      });
    }
  }

  clearForm() {
    this.form.reset();
  }
}
