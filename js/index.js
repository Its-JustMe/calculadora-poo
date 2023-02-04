/* Para quem quiser entender como eu fiz a calculadora, eu deixei o código comentado explicando cada passo :)*/

// Importando as classes Calculadora e Área do module.js
import { Calculadora, Área, Fatorial } from "../modules/calculadora.js";

/* 
    Função que pega os dados dos inputs ao clicar no botão '=' 
    e retorna o cálculo
*/
document.getElementById('calcularOp').onclick = () => {
    // Armazendando a div 'resultado' na constante 'resultado'
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = null; // Esvaziando o conteúdo da div


    // Armazenando os dados dos inputs nas variáveis
    let n1 = parseFloat(calculadora.n1.value);
    let n2 = parseFloat(calculadora.n2.value);
    const op = String(calculadora.op.value);

    // Verificando se os valores de n1 e n2 são inválidos e configurando o valor para 0 caso sejam
    n1 = isNaN(n1) ? n1 = 0 : n1;
    n2 = isNaN(n2) ? n2 = 0 : n2;

    // Criando uma instância da classe calculadora com os dados fornecidos pelo usuário

    const res = new Calculadora(n1, n2, op);

    resultado.innerHTML += `<p class="res">${res.Cálculo()}</p>`;
};

/*  Função que pega os dados dos inputs e retorna o valor da área da figura escolhida */

document.getElementById('calcularArea').onclick = () => {
    // Armazenando a div de mensagens de erro na constante 'aviso'
    const aviso = document.getElementById('erro-container');

    // Armazenando a div de resultado na variável 'saída' e esvaziando-a
    const saída = document.getElementById('mostrarArea');
    saída.innerHTML = null;

    // Armazenando os valores dos inputs nas variáveis
    const figura = String(calcArea.figura.value).toLocaleLowerCase();
    const base = parseFloat(calcArea.base.value);
    const altura = parseFloat(calcArea.altura.value);

    // Validação simples para verificar se os valores são inválidos (NaN) ou negativos
    if (base <= 0 || isNaN(base)) {
        aviso.innerHTML = `<p>Por favor, preencha os campos corretamente.</p>`; // mensagem de erro
        document.getElementById('InptV1').style.borderBottomColor = '#ff0000'; // destacando o campo inválido

    } else if (altura <= 0 || isNaN(altura)) {
        aviso.innerHTML = `<p>Por favor, preencha os campos corretamente.</p>`;
        document.getElementById('InptV2').style.borderBottomColor = '#ff0000';

    } else {
        // Esvaziando a div de erros
        aviso.innerHTML = null;

        // Criando uma instância da classe Área com os valores fornecidos pelo usuário
        const resultado = new Área(figura, base, altura);

        // Retornando o resultado final
        saída.innerHTML += `<p class="res"> ${resultado.Área()}</p>`;
    }
};

document.getElementById('calcularFat').onclick = () => {
    const res = document.getElementById('mostrarFatorial');
    res.innerHTML = null;

    const num = Number(fatorial.numero.value);

    const fatNum = new Fatorial(num);

    res.innerHTML += `<p class="res">${fatNum.Resultado()}</p>`;
}
