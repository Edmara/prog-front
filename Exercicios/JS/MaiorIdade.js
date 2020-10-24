function verificaSexoEIdade(sexo, idade) {
    var podeEntrar = false;
    podeEntrar = idade >= 18 ? true : false;

    if (!podeEntrar) {
        console.log("Não é permitida entrada")
    }
    if (sexo === "Masculino" && podeEntrar) {
        console.log("Permitida entrada com pagamento de taxa")
    } else {
        console.log("Permitida entrada sem pagamento de taxa")
    }
}