import Pessoa from "./pessoa.js";
import Endereco from "./endereco.js";
import { validarTamanho,validarTexto } from "./Util.js";

class PessoaJuridica extends Pessoa {
    #cnpj;
    #razaoSocial;

    constructor(nome,endereco,cnpj,razaoSocial){
        super(nome,endereco);
        this.#cnpj = validarTamanho(cnpj,14,'CNPJ');
        this.#razaoSocial = validarTexto(razaoSocial);
    }

    get cnpj(){return this.#cnpj}
    get razaoSocial(){return this.#razaoSocial}

    set cnpj(cnpj){this.#cnpj = validarTamanho(cnpj,14,'CNPJ')}
    set razaoSocial(razaoSocial){this.#razaoSocial = validarTexto(razaoSocial);}

    toString(){return `${super.toString()} |Razão: ${this.#razaoSocial} |CNPJ: ${this.#cnpj}`}

}

export default PessoaJuridica