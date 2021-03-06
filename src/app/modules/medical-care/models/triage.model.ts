class Triage {
  id: number;
  bloodPressure: string;
  temperature: string;
  triageDate: string;
  saturation: string;
  bloodGlucose: string;
  pulse: string;
  respiratoryFrequency: string;
  weight: string;
  height: string;
  preInformation: string;
  medicines: string;
  allergies: string;
  imc: string;
  personalBackground: string;
  painIntensity: number;
  riskRating: number;
  isPreferred: boolean;
  attendanceId: number;
  userId: number;

  constructor() {
    this.id = 0;
    this.bloodPressure = '';
    this.temperature = '';
    this.triageDate = '';
    this.saturation = '';
    this.bloodGlucose = '';
    this.pulse = '';
    this.respiratoryFrequency = '';
    this.weight = '';
    this.height = '';
    this.preInformation = '';
    this.medicines = '';
    this.allergies = '';
    this.imc = '';
    this.personalBackground = '';
    this.painIntensity = 0;
    this.riskRating = 0;
    this.isPreferred = false;
    this.attendanceId = 0;
    this.userId = 0;
  }
}

export default Triage;
