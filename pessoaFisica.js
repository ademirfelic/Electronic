import Pessoa from "./pessoa.js";
import Endereco from "./endereco.js";
import { validarTamanho } from "./Util.js";


class PessoaFisica extends Pessoa{
    #cpf;
    #dataNascimento;
    
    constructor(nome, endereco, cpf, dataNascimento){
        super(nome,endereco);
        this.#cpf = validarTamanho(cpf,11,'CPF');
        this.#dataNascimento = dataNascimento; 
    }

    get cpf(){return this.#cpf;}
    get dataNascimento(){return this.#dataNascimento;}

    set cpf(cpf){this.#cpf = Util.validarTamanho(cpf,11,'CPF');}
    set dataNascimento(dataNascimento){
        const data = new Date(dataNascimento);
        if(Number.isNaN(data.getTime()) || data > new Date()){
            throw new Error ("Data de nascimento inválida");
        }    
        this.#dataNascimento = dataNascimento;
    }

    toString(){return `${super.toString()} | CPF: ${this.#cpf}`}

}
