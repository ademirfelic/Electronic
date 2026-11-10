class Endereco {

    #logradouro;
    #numero;
    #cidade;
    #uf;

    constructor(logradouro,numero,cidade,uf) {
        this.#logradouro =this._validarTexto(logradouro);
        this.#numero = this._validarTexto(numero);
        this.#cidade = this._validarTexto(cidade);
        this.#uf = this._validarTexto(uf);
    }

    get logradouro(){return this.#logradouro};
    get numero(){return this.#numero};
    get cidade(){return this.#cidade};
    get uf(){return this.#uf};

    set logradouro(logradouro){this.#logradouro = this._validarTexto(logradouro)};
    set numero(numero){this.#numero = this._validarTexto(numero)};
    set cidade(cidade){this.#cidade = this._validarTexto(cidade)};
    set uf(uf){this.#uf = this._validarTexto(uf)};

    _validarTexto(texto){
        if(typeof texto !== "string" || texto.trim() === ""){
            throw new Error("Campo deve ser preenchido");
        }
        return texto.trim().toUpperCase();
    }

}
export


const endereco = new Endereco("cajupiranga","67","Parnamirim","RN")

endereco.logradouro = "Rua Caminho da roca";
endereco.uf = "RJ";
console.log(endereco.logradouro);
console.log(endereco.numero);
console.log(endereco.cidade);
console.log(endereco.uf);


