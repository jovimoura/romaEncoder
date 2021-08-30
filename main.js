//Escrever o texto

let textoEntrada = document.getElementById('texto-entrada');
let textoSaida = document.getElementById('texto-saida')

//Botao selecionar criptografia
let cesar = document.getElementById('cesar');
let base64 = document.getElementById('base64');

let codificar = document.getElementById('codificar');
let decodificar = document.getElementById('decodificar');

let codeBtn = document.getElementById('codificar-btn');
let decodBtn = document.getElementById('decodificar-btn');
codeBtn.classList.add('none');
decodBtn.classList.add('none');

let botaoApagar = document.getElementById('btn-apagar');

                            //base64

codificar.addEventListener('change',()=>{
    decodBtn.classList.add('none');
    if(codificar.checked === true){
        codeBtn.classList.remove('none');
    }
});

decodificar.addEventListener('change',()=>{
    codeBtn.classList.add('none');
    if(decodificar.checked === true){
        decodBtn.classList.remove('none');
    }
});

codeBtn.addEventListener('click',()=>{
    if(selecao.value === 'base64'){
        textoSaida.value = btoa(textoEntrada.value);
    }else{
        console.log('cesarC');
    }
        
});

decodBtn.addEventListener('click',()=>{
    if(selecao.value === 'base64'){
        textoSaida.value = atob(textoEntrada.value)
    }else{
        console.log('cesarD');
    }
        
});

botaoApagar.addEventListener('click',()=>{
    textoSaida.value = '';
})











