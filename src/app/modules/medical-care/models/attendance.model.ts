import Patient from './patient.model';

class Attendance {
  id: number;
  receptionInformation: string;
  patientAge: string;
  arrivalDate: string;
  isSamu: boolean;
  patientId: number;
  patient: Patient;
  statusId: number;
  attendanceStatus: any;

  constructor() {
    this.id = 0;
    this.receptionInformation = '';
    this.patientAge = '';
    this.arrivalDate = '';
    this.isSamu = false;
    this.patientId = 0;
    this.patient = new Patient();
    this.statusId = 0;
    this.attendanceStatus = null;
  }
}

export default Attendance;
