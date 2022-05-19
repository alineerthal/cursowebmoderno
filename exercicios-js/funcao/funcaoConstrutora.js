// o delta serve para informar q o carro vai acelerar de 5 em 5
function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado:
    let velocidadeAtual = 0

    // método público:
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público:
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

const audi = new Carro(350, 50)
audi.acelerar()
audi.acelerar()
console.log(audi.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)

// função construtora é uma visão de JS orientada a objeto