/* Para quem quiser entender como eu fiz a calculadora, eu deixei o código comentado explicando cada passo :)*/

// Criando a classe Calculadora
class Calculadora {
    // Consctructor
    constructor (valor1, valor2, operação) {
        this.n1 = valor1;
        this.n2 = valor2;
        this.op = operação;
    }

    // Getters e Setters

    get n1 () {
        return this._n1;
    }
    get n2 () {
        return this._n2;
    }
    get op () {
        return this._op;
    }

    set n1 (valor) {
        if (valor === null) {
            this._n2 = 0;
        } else {
            this._n1 = valor;
        }
    }
    set n2 (valor) {
        if (valor === null) {
            this._n2 = 0;
        } else {
            this._n2 = valor;
        }
    }
    set op (operação) {
        this._op = operação;
    }

    // Métodos

    /** A função cálculo irá analisar a propriedade 'op' e retornará a função de cálculo
     * correspondente ao símbolo fornecido
    */
    Cálculo () {
        const operações = {
            '+': this.Adição(),
            '-': this.Subtração(),
            '*': this.Multiplicação(),
            '/': this.Divisão(),
            '%': this.Porcentagem()
        };

        return operações[this.op];
    }

    // Não tem muito o que dizer aqui... Os métodos abaixo realizam basicamente os cálculos das operações básicas :'D
    
    Adição() {
        return this.n1 + this.n2;
    }

    Subtração () {
        return this.n1 - this.n2;
    }

    Multiplicação () {
        return this.n1 * this.n2;
    }

    Divisão () {
        // Caso o n2 (vulgo denominador) for 0, a função retornará este aviso
        if (this.n2 === 0) {
            return 'Impos. dividir por 0';
        }
        // Caso contrário, ela retornará o cálculo normalmente
        return this.n1 / this.n2;
    }

    Porcentagem () {
        return (this.n1 * this.n2) / 100;
    }
}

// Criando a classe Área
class Área {
    // Constructor
    constructor (formaGeométrica, base, altura) {
        this.figura = formaGeométrica;
        this.v1 = base;
        this.v2 = altura;
    }

    // Getters e Setters

    get figura () {
        return this._figura;
    }
    get v1 () {
        return this._v1;
    }
    get v2 () {
        return this._v2;
    }

    // Para deixar as coisas mais simples, eu decidi abreviar os nomes das figuras
    set figura (forma) {
        const figuras = {
            triângulo: 'T',
            quadrado: 'Q',
            retângulo: 'R'
        };
        /* 
            A variável 'forma' irá pegar o valor do objeto 'figuras' pelo nome da propriedade
            por exemplo: 
            forma = figuras['triângulo'] ---> 'T'
        */
        forma = figuras[forma];

        this._figura = forma;
    }

    set v1 (base) {
        this._v1 = base;
    }
    set v2 (altura) {
        this._v2 = altura;
    }

    // Métodos

    /** O método status irá retornar o tipo de figura e as medidas da base e altura, respectivamente */
    Status () {
        switch (this.figura) {
            case 'Q':
                return `Um Quadrado de lados medindo ${this.v1}m`;
            case 'R':
                return `Um Retângulo de base igual à ${this.v1}m e altura igual à ${this.v2}m`;
            case 'T':
                return `Um Triângulo de base igual à ${this.v1}m e altura igual à ${this.v2}m`;
        }
    }

    /** Nada de muito complexo aqui, o método Área realiza e retorna o cálculo da área de acordo com o tipo de figura */
    Área () {
        // Criando uma varável para armazenar o valor da área
        let res;
        // Se a figura for 'T' (triângulo), ela usará a fórmula da Área do triângulo
        if (this.figura === 'T') {
            res = this.v1 * this.v2 / 2;
        } else {
            // Caso contrário, ela usará a fórmula da Área do Retângulo / Quadrado
            res = this.v1 * this.v2;
        }
        // E por fim, o método retorna o valor da área, chamando o método Status para mostrar as informações da figura
        return `${this.Status()} possui área igual à ${res}`;
    }
}

// Criando a classe Fatorial
class Fatorial {
    constructor (num) {
        this.n = num;
        this.fat = this.Fatorial(num);
    }

    get n () {
        return this._n;
    }
    
    set n (num) {
        this._n = num;
    }

    Fatorial (num) {
        if (num >= 0 && num <= 1) {
            return 1;
        } else if (num < 0) {
            return false;
        } 
        else {
            return num *= this.Fatorial(num - 1);
        }
    }

    Resultado () {
        if (!this.fat) {
            return `Imposs. calcular o fatorial de um número negativo.`;
        }
        return `O fatorial de ${this.n} é ${this.fat}`;
    }
}

export { Calculadora, Área, Fatorial }; // Exportando as classes
