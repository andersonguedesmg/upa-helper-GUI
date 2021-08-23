class User {
  id: number;
  name: string;
  password: string;
  email: string;
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
  userType: number;
  isActive: boolean;
  createdAt: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.password = '';
    this.email = '';
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
    this.userType = 0;
    this.isActive = true;
    this.createdAt = '';
  }
}

export default User;
