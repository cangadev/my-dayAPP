


var butn = document.querySelector("#btnCriar")
var inpt = document.querySelector("#title")
var desc = document.querySelector("#descricao")



var Lista = document.querySelector("ul")

var Arr = [
    {
        titulo:"Esse é o titutlo",
        desc:"Essa é a descricao"
}
];

butn.onclick = ()=>{
    let a = inpt.value;
    let b = desc.value;
    Arr.push(a)
    Arr.push(b)
    console.log(Arr)
 };



for(i=0; i<=Arr.length; i++){
    //console.log(Arr[i])
}

function Listar(){
    for(todo of Arr){
        let textoLi = document.createTextNode(todo)

        listElement.appendChild(textoLi)
    }
}
