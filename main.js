
let textoEntrada = document.getElementById('texto-entrada');
let textoSaida = document.getElementById('texto-saida')

//Botões de criptografia
let cesar = document.getElementById('cesar');
let base64 = document.getElementById('base64');
let select = document.getElementById('selecao');

let chave = document.getElementById('chave');
let caixaChave = document.getElementById('caixa-chave');

let codified = document.getElementById('codified');
let decodified = document.getElementById('decodified');

let codeBtn = document.getElementById('codificar-btn');
let decodBtn = document.getElementById('decodificar-btn');
codeBtn.classList.add('none');
decodBtn.classList.add('none');


let botaoApagar = document.getElementById('btn-apagar');

select.addEventListener('change',()=>{
    if(select.value != 'cesar'){
    caixaChave.classList.add('none');
    }
    if(select.value == 'cesar'){
        caixaChave.classList.remove('none')
    }
});

                        //Cifra de Cesar

function codificar(texto,key){
    texto = texto.split("");
    let codifiedText = "";

    for(let i = 0; i < texto.length; i++){
        let codigo = texto[i].charCodeAt();

        if(codigo >= 97 && codigo <= 122){
            let letra = String.fromCharCode((codigo - 97 + key) % 26 + 97);
            codifiedText += letra
        }else if(codigo >= 65 && codigo <= 90){
            let letra = String.fromCharCode((codigo - 65 + key) % 26 + 65);
            codifiedText += letra;
        }else {
            codifiedText += texto[i];
        }
    
    }
    return codifiedText;
}


function decodificar(texto,key){
    texto = texto.split("");
    let codifiedText = "";

    for(let i = 0; i < texto.length; i++){
        let codigo = texto[i].charCodeAt();

        if(codigo >= 97 && codigo <= 122){
            let letra = String.fromCharCode((codigo - 122 - key) % 26 + 122);
            codifiedText += letra
        }else if(codigo >= 65 && codigo <= 90){
            let letra = String.fromCharCode((codigo - 90 - key) % 26 + 90);
            codifiedText += letra;
        }else {
            codifiedText += texto[i];
        }
    
    }
    return codifiedText;
}

                            //base64

codified.addEventListener('change',()=>{
    decodBtn.classList.add('none');
    if(codified.checked === true){
        codeBtn.classList.remove('none');
    }
});

decodified.addEventListener('change',()=>{
    codeBtn.classList.add('none');
    if(decodified.checked === true){
        decodBtn.classList.remove('none');
    }
});

codeBtn.addEventListener('click',()=>{
    console.log('funciona2')
    if(select.value == 'cesar'){
        textoSaida.value = codificar(textoEntrada.value,parseInt(chave.value));
    }else if(select.value != 'cesar'){
        textoSaida.value = btoa(textoEntrada.value);
    }
        
});

decodBtn.addEventListener('click',()=>{
    console.log('funciona1')
    if(select.value != 'cesar'){
        textoSaida.value = atob(textoEntrada.value);
    }else{
        textoSaida.value = decodificar(textoEntrada.value,parseInt(chave.value));
    }
        
});

botaoApagar.addEventListener('click',()=>{
    textoSaida.value = '';
})
