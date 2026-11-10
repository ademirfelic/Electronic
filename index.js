import Endereco from "./endereco.js";
import PessoaFisica from "./pessoaFisica.js";
import PessoaJuridica from "./pessoaJuridica.js";

const endereco = new Endereco("Rua Caminho das Rocas","67","Parnamirim","RN");
const clientes = [];
const cadastros = [
    {nome:"Ademir Feliciano",cpf:"124.153.077-37",nacimento:"05/07/1987"},
    {nome:"Axion Plus",cnpj:"03.302.669/0001-26",razao:"Axion Plus LTDA"},
    {nome:"gislayne Moreira",cpf:"124",nacimento:"02/10/1998"},//invalido
    {nome:"Axion Plus",cnpj:"12.345.678/0009-10",razao:""}//invalido
];

cadastros.forEach((cadastro)=>{
    try{

        if("cpf" in cadastro){
            clientes.push(new PessoaFisica(cadastro.nome,endereco,cadastro.cpf,cadastro.nacimento));
        }else{
            clientes.push(new PessoaJuridica(cadastro.nome,endereco,cadastro.cnpj,cadastro.razao));
        }
    }catch(erro){
        console.error(`Erro: ${erro.message}`);
    }
});

clientes.forEach((cliente)=>console.log(String(cliente)));