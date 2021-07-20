/**
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de
 *  juros e tempo de aplicação. A primeira função retornará o montante da 
 * aplicação financeira sob o regime de juros simples e a segunda retornará 
 * o valor da aplicação sob o regime de juros compostos.
 */

function jurosSimples(capital, juros, tempo) {
    //return `Juros simples de capital = ${capital} com a taxa de juros de ${juros.toFixed(2).toString().replace('.', ',')} no periodo de tempo em mes = ${tempo} sera = ${capital = (capital + (capital * juros)) * tempo}`
    return `${capital = capital + (capital * juros* tempo)}`
}
function jurosCompostos(capital, juros, tempo){
    return `${capital = capital * (1 + juros)** tempo}`
}

console.log(jurosSimples(100, 0.10, 10))
console.log(jurosCompostos(100, 0.10, 10))