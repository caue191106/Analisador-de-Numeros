var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []
var tot = 0

function verificar() {
    if (Number(num.value) >= 1 && Number(num.value) <= 100) {
        return true
    } else {
        return false
    }    
}

function inLista() {
    if (valores.indexOf(Number(num.value)) != -1) {
        return false
    } else {
        return true
    }
}

console.log(valores)

function adicionar() {
    var verificado = this.verificar();
    var nalista = this.inLista();
    if (verificado && nalista == true) {
        valores.push(Number(num.value))
        var item = document.createElement('option');
        item.text = `O valor ${num.value} foi adicionado!`
        document.getElementById('flista').appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Seu número é inválido!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }

            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        media = soma / valores.length

        res.innerHTML += (`<p>Ao todo, temos ${tot} números cadastrados.</p>`)
        res.innerHTML += (`<p>O maior valor informado foi ${maior}</p>`) 
        res.innerHTML += (`<p>O menor valor informado foi ${menor}</p>`)
        res.innerHTML += (`<p>Somando todos os valores, temos ${soma}</p>`)
        res.innerHTML += (`<p>A média de todos os valores digitados é ${media}</p>`)
    }
}