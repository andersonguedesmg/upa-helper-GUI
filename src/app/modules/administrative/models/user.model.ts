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
  council: string;
  userTypeId: number;
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
    this.council = '';
    this.createdAt = '';
    this.userTypeId = 0;
    this.isActive = true;
  }
}

export default User;
