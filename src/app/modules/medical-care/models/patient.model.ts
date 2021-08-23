class Patient {
  id: number;
  name: string;
  socialName: string;
  cns: string;
  birthday: string;
  rg: string;
  cpf: string;
  zipCode: string;
  address: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  complement: string;
  telephone: string;
  cell: string;
  fatherName: string;
  motherName: string;
  ethnicity: number;
  gender: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.socialName = '';
    this.cns = '';
    this.birthday = '';
    this.rg = '';
    this.cpf = '';
    this.zipCode = '';
    this.address = '';
    this.number = '';
    this.neighborhood = '';
    this.city = '';
    this.state = '';
    this.complement = '';
    this.telephone = '';
    this.cell = '';
    this.fatherName = '';
    this.motherName = '';
    this.ethnicity = 0;
    this.gender = 0;
  }
}

export default Patient;
