var cont1 = 0
var cont2 = 0
var stats = false

window.localStorage.setItem("Turn", "X")
window.localStorage.setItem("TurnP", "P1")
window.localStorage.setItem("WinP1", cont1)
window.localStorage.setItem("WinP2", cont2)

var turn = window.localStorage.getItem("Turn")
var turnP = window.localStorage.getItem("TurnP")
var winp1 = window.localStorage.getItem("WinP1")
var winp2 = window.localStorage.getItem("WinP2")

var a1 = document.getElementById("a1")
var a2 = document.getElementById("a2")
var a3 = document.getElementById("a3")
var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var b3 = document.getElementById("b3")
var c1 = document.getElementById("c1")
var c2 = document.getElementById("c2")
var c3 = document.getElementById("c3")
var btres = document.getElementById("btrestart")

function fechar(){
    window.document.getElementById("alert").style.animation = "fechar 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)"
    window.document.getElementById("fundo").style.animation = "fechar 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)"
    window.document.getElementById("alert").style.visibility = "hidden"
    window.document.getElementById("fundo").style.visibility = "hidden"
}

function mostrarA(_self){
    window.document.getElementById("fundo").style.visibility = "visible"
    window.document.getElementById("alert").style.visibility = "visible"
    window.document.getElementById("alert").style.animation = "mostrar 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)"
    window.document.getElementById("fundo").style.animation = "mostrar 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)"
    window.document.getElementById("msgalert").innerHTML = `o player ${_self} ganhou o jogo`
}

function corBarR(){
    document.getElementById("bar1").style.backgroundColor = "red"
    document.getElementById("bar2").style.backgroundColor = "red"
    document.getElementById("bar3").style.backgroundColor = "red"
    document.getElementById("bar4").style.backgroundColor = "red"
}

function corBarW(){
    document.getElementById("bar1").style.backgroundColor = "#ccc"
    document.getElementById("bar2").style.backgroundColor = "#ccc"
    document.getElementById("bar3").style.backgroundColor = "#ccc"
    document.getElementById("bar4").style.backgroundColor = "#ccc"

    window.document.getElementById("WH1").style.visibility = "hidden"
    window.document.getElementById("WH2").style.visibility = "hidden"
    window.document.getElementById("WH3").style.visibility = "hidden"
    window.document.getElementById("WV1").style.visibility = "hidden"
    window.document.getElementById("WV2").style.visibility = "hidden"
    window.document.getElementById("WV3").style.visibility = "hidden"
    window.document.getElementById("WLR").style.visibility = "hidden"
    window.document.getElementById("WRL").style.visibility = "hidden"

}

function restart(){
    window.localStorage.setItem("Turn", "X")
    window.localStorage.setItem("TurnP", "P1")
    window.document.getElementById("turn").innerHTML = "P1 ⇨ X"
    btres.style.animation = "none"
    btres.style.border = "none"
    stats = false
    corBarW()
    a1.innerHTML = ""
    a2.innerHTML = ""
    a3.innerHTML = ""
    b1.innerHTML = ""
    b2.innerHTML = ""
    b3.innerHTML = ""
    c1.innerHTML = ""
    c2.innerHTML = ""
    c3.innerHTML = ""
}

function trocarPlayer(){
    turnP = window.localStorage.getItem("TurnP")
    if(turnP === "P1"){
        window.localStorage.setItem("TurnP", "P2")
        window.document.getElementById("turn").innerHTML = "P2 ⇨ O"
    }else{
        window.localStorage.setItem("TurnP", "P1")
        window.document.getElementById("turn").innerHTML = "P1 ⇨ X"
    }
}

function win1(){
    turnP = window.localStorage.getItem("TurnP")
    if(a1.textContent == a2.textContent && a2.textContent == a3.textContent && a3.textContent.length != 0){
        
        window.document.getElementById("WH1").style.visibility = "visible"
        
        if(turnP == "P1"){
            mostrarA(turnP)
            window.localStorage.setItem("WinP1", cont1+=1)
            winp1 = window.localStorage.getItem("WinP1")
            window.document.getElementById("res1").innerHTML = winp1
        }else{
            mostrarA(turnP)
            window.localStorage.setItem("WinP2", cont2+=1)
            winp2 = window.localStorage.getItem("WinP2")
            window.document.getElementById("res2").innerHTML = winp2
        }
            
        btres.style.border = "solid white"
        btres.style.animation = "piscar 1s both"

        stats = true

        return true

    }else if(b1.textContent == b2.textContent && b2.textContent == b3.textContent && b3.textContent.length != 0){
        
        window.document.getElementById("WH2").style.visibility = "visible"
        

        if(turnP == "P1"){
            mostrarA(turnP)
            window.localStorage.setItem("WinP1", cont1+=1)
            winp1 = window.localStorage.getItem("WinP1")
            window.document.getElementById("res1").innerHTML = winp1
        }else{
            mostrarA(turnP)
            window.localStorage.setItem("WinP2", cont2+=1)
            winp2 = window.localStorage.getItem("WinP2")
            window.document.getElementById("res2").innerHTML = winp2
        }
            
        btres.style.border = "solid white"
        btres.style.animation = "piscar 1s both"

        stats = true

        return true

    }else if(c1.textContent == c2.textContent && c2.textContent == c3.textContent && c3.textContent.length != 0){
        
        window.document.getElementById("WH3").style.visibility = "visible"
        
        if(turnP == "P1"){
            mostrarA(turnP)
            window.localStorage.setItem("WinP1", cont1+=1)
            winp1 = window.localStorage.getItem("WinP1")
            window.document.getElementById("res1").innerHTML = winp1
        }else{
            mostrarA(turnP)
            window.localStorage.setItem("WinP2", cont2+=1)
            winp2 = window.localStorage.getItem("WinP2")
            window.document.getElementById("res2").innerHTML = winp2
        }
            
        btres.style.border = "solid white"
        btres.style.animation = "piscar 1s both"

        stats = true

        return true

    }else if(a1.textContent == b1.textContent && b1.textContent == c1.textContent && c1.textContent.length != 0){
        
        window.document.getElementById("WV1").style.visibility = "visible"
        
        if(turnP == "P1"){
            mostrarA(turnP)
            window.localStorage.setItem("WinP1", cont1+=1)
            winp1 = window.localStorage.getItem("WinP1")
            window.document.getElementById("res1").innerHTML = winp1
        }else{
            mostrarA(turnP)
            window.localStorage.setItem("WinP2", cont2+=1)
            winp2 = window.localStorage.getItem("WinP2")
            window.document.getElementById("res2").innerHTML = winp2
        }
            
        btres.style.border = "solid white"
        btres.style.animation = "piscar 1s both"

        stats = true

        return true

    }else if(a2.textContent == b2.textContent && b2.textContent == c2.textContent && c2.textContent.length != 0){
        
        window.document.getElementById("WV2").style.visibility = "visible"
        
        if(turnP == "P1"){
            mostrarA(turnP)
            window.localStorage.setItem("WinP1", cont1+=1)
            winp1 = window.localStorage.getItem("WinP1")
            window.document.getElementById("res1").innerHTML = winp1
        }else{
            mostrarA(turnP)
            window.localStorage.setItem("WinP2", cont2+=1)
            winp2 = window.localStorage.getItem("WinP2")
            window.document.getElementById("res2").innerHTML = winp2
            
        }
            
        btres.style.border = "solid white"
        btres.style.animation = "piscar 1s both"

        stats = true

        return true
    }else if(a3.textContent == b3.textContent && b3.textContent == c3.textContent && c3.textContent.length != 0){
        
        window.document.getElementById("WV3").style.visibility = "visible"
        
        if(turnP == "P1"){
            mostrarA(turnP)
            window.localStorage.setItem("WinP1", cont1+=1)
            winp1 = window.localStorage.getItem("WinP1")
            window.document.getElementById("res1").innerHTML = winp1
        }else{
            mostrarA(turnP)
            window.localStorage.setItem("WinP2", cont2+=1)
            winp2 = window.localStorage.getItem("WinP2")
            window.document.getElementById("res2").innerHTML = winp2
        }
            
        btres.style.border = "solid white"
        btres.style.animation = "piscar 1s both"

        stats = true

        return true
    }else if(a1.textContent == b2.textContent && b2.textContent == c3.textContent && c3.textContent.length != 0){
        
        window.document.getElementById("WLR").style.visibility = "visible"

        if(turnP == "P1"){
            mostrarA(turnP)
            window.localStorage.setItem("WinP1", cont1+=1)
            winp1 = window.localStorage.getItem("WinP1")
            window.document.getElementById("res1").innerHTML = winp1
        }else{
            mostrarA(turnP)
            window.localStorage.setItem("WinP2", cont2+=1)
            winp2 = window.localStorage.getItem("WinP2")
            window.document.getElementById("res2").innerHTML = winp2
        }
            
        btres.style.border = "solid white"
        btres.style.animation = "piscar 1s both"

        stats = true

        return true
    }else if(a3.textContent == b2.textContent && b2.textContent == c1.textContent && c1.textContent.length != 0){
        
        window.document.getElementById("WRL").style.visibility = "visible"
        
        if(turnP == "P1"){
            mostrarA(turnP)
            window.localStorage.setItem("WinP1", cont1+=1)
            winp1 = window.localStorage.getItem("WinP1")
            window.document.getElementById("res1").innerHTML = winp1
        }else{
            mostrarA(turnP)
            window.localStorage.setItem("WinP2", cont2+=1)
            winp2 = window.localStorage.getItem("WinP2")
            window.document.getElementById("res2").innerHTML = winp2
        }
            
        btres.style.border = "solid white"
        btres.style.animation = "piscar 1s both"

        stats = true

        return true
    }else if(a1.textContent != 0 && a2.textContent != 0 && a3.textContent != 0 &&
        b1.textContent != 0 && b2.textContent != 0 && b3.textContent != 0 &&
        c1.textContent != 0 && c2.textContent != 0 && c3.textContent != 0){
            
            corBarR()

            mostrarA(turnP)

            window.document.getElementById("msgalert").style.color = "red"
            window.document.getElementById("msgalert").innerHTML = "Deu Velha!!"

            btres.style.border = "solid white"
            btres.style.animation = "piscar 1s both"

            stats = true

            return true
        }
}

function clicar(self){
    self.onclick = () => {
        turn = window.localStorage.getItem("Turn")
        if(!stats){
            if (self.textContent.length == 0) {
                if (turn === "X") {
                    self.innerHTML = "❌"
                    window.localStorage.setItem("Turn", "O")
                } else {
                    self.innerHTML = "⭕"
                    window.localStorage.setItem("Turn", "X")
                }
    
    
                if (win1()) {
                    console.log("O Jogo chegou ao fim")
                } else{
                    trocarPlayer()
                }
                
                
    
    
            } else {
                mostrarA()
    
                window.document.getElementById("msgalert").style.color = "red"
                window.document.getElementById("msgap").innerHTML = ""
                window.document.getElementById("msgalert").innerHTML = "ERRO = Já jogou nesta posição"
            }
        }
        
    } 
}

clicar(a1)
clicar(a2)
clicar(a3)
clicar(b1)
clicar(b2)
clicar(b3)
clicar(c1)
clicar(c2)
clicar(c3)