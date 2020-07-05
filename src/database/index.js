import Contatos from '../app/models/Contatos';

class Database {
  constructor() {
    Contatos.init();
  }
}

export default new Database();
