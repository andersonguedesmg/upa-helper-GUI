import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TriageService } from '../../../services/triage.service';

@Component({
  selector: 'app-triage-register',
  templateUrl: './triage-register.component.html',
  styleUrls: ['./triage-register.component.scss'],
})
export class TriageRegisterComponent implements OnInit {
  public form: FormGroup;
  public bloodPressure = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(128)],
    updateOn: 'blur',
  });
  public temperature = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(100)],
    updateOn: 'blur',
  });
  public saturation = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public bloodGlucose = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public pulse = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(100)],
    updateOn: 'blur',
  });
  public respiratoryFrequency = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public weight = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public height = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public preInformation = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public medicines = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public personalBackground = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public painIntensity = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public riskRating = this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });
  public isPreferred = this.fb.control('', {
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

  constructor(public triageService: TriageService, private fb: FormBuilder) {
    this.form = this.fb.group({
      bloodPressure: this.bloodPressure,
      temperature: this.temperature,
      saturation: this.saturation,
      bloodGlucose: this.bloodGlucose,
      pulse: this.pulse,
      respiratoryFrequency: this.respiratoryFrequency,
      weight: this.weight,
      height: this.height,
      preInformation: this.preInformation,
      medicines: this.medicines,
      personalBackground: this.personalBackground,
      painIntensity: this.painIntensity,
      riskRating: this.riskRating,
      isPreferred: this.isPreferred,
    });
  }

  ngOnInit(): void {}
}
