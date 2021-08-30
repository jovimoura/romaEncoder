//Escrever o texto

let texto = document.getElementById('texto');

//Botao selecionar criptografia
let cesar = document.getElementById('cesar');
let base64 = document.getElementById('base64');

let codificar = document.getElementById('codificar');
let decodificar = document.getElementById('decodificar');

let codeBtn = document.getElementById('codificar-btn');
let decodBtn = document.getElementById('decodificar-btn');
codeBtn.classList.add('none');
decodBtn.classList.add('none');

//Depois de selecionar tipo de criptografia, escolher entre codificar ou decodificar


/* Entregar mensagem codificada/decodificada no textarea de leitura*/



                            //base64

codificar.addEventListener('change',()=>{
    if(codificar.checked === true){
    codeBtn.classList.remove();
}
});

decodificar.addEventListener('change',()=>{
    if(decodificar.checked === true){
    decodBtn.classList.remove();
}
});

codeBtn.addEventListener('click',()=>{
    
})






