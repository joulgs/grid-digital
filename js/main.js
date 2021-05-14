const telaAltura = window.innerHeight
const telaLargura = window.innerWidth

var altura = document.getElementById('mesaAltura')
var largura = document.getElementById('mesaAltura')
var quadrado = document.getElementById('mesaQuadrado')

// var btn = document.getElementById('printNovaMesa')

tableWidth = (telaLargura*0.85)
tableHeight = telaAltura
tableSquare = parseInt(quadrado.value)

var canvasFundo = document.getElementById("fundo"),
    ctxFundo = canvasFundo.getContext("2d")


canvasFundo.width = tableWidth
canvasFundo.height = tableHeight

const fundoSelect = document.getElementById('fundos')


/******************************** */

var teste = document.getElementById('teste')
teste.innerHTML = (fundoSelect.value)

/******************************** */


var background = new Image()
background.src = fundoSelect.value

printFundo()


btn.addEventListener("click", function(event) {
    /*event.preventDefault()

    tableSquare = parseInt(quadrado.value)

    printTable()*/
    alert('vrau')
})

fundoSelect.addEventListener("select", function(event) {
    alert('ululu')
})

function printFundo(){
    background.onload = function(){
        ctxFundo.drawImage(background,0,0)
    }
}

/*var canvasGrid = document.getElementById("grid"),
    ctxGrid = canvasGrid.getContext("2d")

canvasGrid.width = tableWidth
canvasGrid.height = tableHeight*/

/*function printGrid(){
    ctxGrid.beginPath()
    for(i = 0; i <= tableHeight; i=i+tableSquare)
    {
        ctxGrid.moveTo(i,0)
        ctxGrid.lineTo(i,tableHeight)    
    }
    ctxGrid.closePath()
    ctxGrid.stroke()


    ctxGrid.beginPath()
    for(i = 0; i <= tableWidth; i=i+tableSquare)
    {
        ctxGrid.moveTo(0, i)
        ctxGrid.lineTo(tableWidth, i)    
    }
    ctxGrid.closePath()
    ctxGrid.stroke()
}*/