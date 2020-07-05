class Contatos {

  static init() {
    this.arrayContatos = [];
    
    this.findAll = async function findAll() {
      return this.arrayContatos;
    };

    this.findById = async function findById(id) {
      let indexArray = this.arrayContatos.findIndex(e => e.id == id);
      if (indexArray === -1) {
        return false;
      }
      return this.arrayContatos[indexArray];
    };

    this.create = async function create(dados) {
      dados.id = this.arrayContatos.length + 1;
      this.arrayContatos.push(dados);
      this.arrayContatos.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      return this.arrayContatos;
    };

    this.update = async function update(dadosAtualiza, id) {
      let indexArray = this.arrayContatos.findIndex(e => e.id == id);
      if (indexArray === -1) {
        return false;
      }
      this.arrayContatos[indexArray] = dadosAtualiza;
      this.arrayContatos[indexArray].id = id;
      this.arrayContatos.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      return true;
    };

    this.deletar = async function deletar(id) {
      let indexArray = this.arrayContatos.findIndex(e => e.id == id);
      if (indexArray === -1) {
        return false;
      }
      this.arrayContatos.splice(indexArray, 1);
      return true;
    }

    return this;
  }

}

export default Contatos;
