import Patient from './patient.model';

class Attendance {
  id: number;
  receptionInformation: string;
  patientAge: string;
  arrivalDate: string;
  isSamu: boolean;
  isActive: boolean;
  patientId: number;
  patient: any;

  constructor() {
    this.id = 0;
    this.receptionInformation = '';
    this.patientAge = '';
    this.arrivalDate = '';
    this.isSamu = false;
    this.isActive = true;
    this.patientId = 0;
    this.patient = [];
  }
}

export default Attendance;
