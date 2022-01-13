class Appointment {
  id: number;
  diagnosis: string;
  prescription: string;
  appointmentDate: string;
  cid: string;
  exitData: string;
  triageId: number;
  attendanceId: number;
  userId: number;

  constructor() {
    this.id = 0;
    this.diagnosis = '';
    this.prescription = '';
    this.appointmentDate = '';
    this.cid = '';
    this.exitData = '';
    this.triageId = 0;
    this.attendanceId = 0;
    this.userId = 0;
  }
}

export default Appointment;
