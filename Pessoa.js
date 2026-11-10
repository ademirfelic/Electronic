
class Pessoa {
    #nome;
    endereco;

    constructor(nome,endereco){
        this.#nome = this._validarNome(nome);
        this.endereco = endereco;
    }

    get nome(){return this.#nome};
    get endereco(){return this.endereco}

    set nome(nome){this.#nome = this._validarNome(nome)};
    set endereco(endereco){this.endereco = endereco};

     _validarNome(texto){
        if(typeof texto !== "string" || texto.trim() === ""){
            console.log(texto);
            throw new Error("Campo deve ser preenchido");
        }
        if(texto.trim().length < 3){
            throw new Error("Nome deve ter ao menos 3 caracter");
        }
        return texto.trim().toUpperCase();
    }

    toString() { return `${this.nome} | ${this.endereco}`; }

}

export default Pessoa;
