import Patient from './patient.model';

class Attendance {
  id: number;
  receptionInformation: string;
  patientAge: string;
  arrivalDate: string;
  isSamu: boolean;
  isActive: boolean;
  patientId: number;
  patient: Patient;

  constructor() {
    this.id = 0;
    this.receptionInformation = '';
    this.patientAge = '';
    this.arrivalDate = '';
    this.isSamu = false;
    this.isActive = true;
    this.patientId = 0;
    this.patient = new Patient();
  }
}

export default Attendance;
