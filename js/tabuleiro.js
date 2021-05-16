var canvasTabuleiro = document.getElementById("tabuleiro"),
ctxTabuleiro = canvasTabuleiro.getContext("2d")

canvasTabuleiro.width = window.innerWidth-200
canvasTabuleiro.height = window.innerHeight

ctxTabuleiro.beginPath()
for(i = 0; i <= window.innerHeight; i=i+20)
{
    ctxTabuleiro.moveTo(i,0)
    ctxTabuleiro.lineTo(i,window.innerHeight)    
}
ctxTabuleiro.closePath()
ctxTabuleiro.stroke()


ctxTabuleiro.beginPath()
for(i = 0; i <= window.innerWidth-200; i=i+20)
{
    ctxTabuleiro.moveTo(0, i)
    ctxTabuleiro.lineTo( window.innerWidth, i)    
}
ctxTabuleiro.closePath()
ctxTabuleiro.stroke()