var setaesquerda = window.document.getElementById("seta-esquerda")
var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var setadireita = window.document.getElementById("seta-direita")

function RolarParaEsquerda(){
setaesquerda.style = "display:flex"
bruna.style = "display:none"
samanta.style = "display:flex"
setadireita.style = "display:none"

}

function RolarParaDireita(){
setaesquerda.style = "display:none"
bruna.style = "display:flex"
samanta.style = "display:none"
setadireita.style = "display:flex"

    
}

