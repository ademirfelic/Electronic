class Pessoa extends Endereco{
    #nome;

    constructor(logradouro,numero,cidade,uf,nome){
        super(logradouro,numero,cidade,uf);
        this.#nome = this._validarTexto(nome);
    }

    get nome(){return this.#nome};
    set nome(nome){this.#nome = this._validarTexto(nome)};

     _validarTexto(texto){
        if(typeof texto !== "string" || texto.trim() === ""){
            throw new Error("Campo deve ser preenchido");
        }
        if(texto.trim().length < 3){
            throw new Error("Nome deve ter ao menos 3 caracter");
        }
        return texto.trim().toUpperCase();
    }

}

const pessoa = new Pessoa("rua","67","parnamirm","rn","Ademir");

console.log(pessoa);