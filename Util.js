export const apenasDigitos = (valor) => String(valor).replace(/\D/g,"");

export function validarTamanho(valor,tamanho,rotulo){
    const digitos = apenasDigitos(valor);
    if(digitos.length !== tamanho){
        throw new Error (`${rotulo} deve ter ${tamanho} digitos`);
    }
    return digitos;
}

export function validarTexto(texto){
        if(typeof texto !== "string" || texto.trim() === ""){
            throw new Error("Campo deve ser preenchido");
        }
        return texto.trim().toUpperCase();
    }