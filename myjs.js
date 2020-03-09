
function calcular() {
    var numdig = document.getElementById("numdig").value;
    var tabuada = document.getElementById("tabuada");
    tabuada.innerHTML = '';

    if(numdig <= 0 || numdig == ""){
        alert('Por gentileza, digite um número maior que 0.');
    }else{
        for ( var cont=1; cont<=10; cont++){
            tabuada.innerHTML += numdig + " x " + cont + " = " + numdig * cont + "<br>";
            }
    }      
} 

function limpar(){
    document.getElementById("numdig").value = "";
    document.getElementById("tabuada").innerHTML ="";    
}