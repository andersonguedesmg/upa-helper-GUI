class Cep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;

  constructor() {
    this.cep = '';
    this.logradouro = '';
    this.complemento = '';
    this.bairro = '';
    this.localidade = '';
    this.uf = '';
    this.ibge = '';
    this.gia = '';
    this.ddd = '';
    this.siafi = '';
  }
}

export default Cep;
