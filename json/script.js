// Para buscar la respuesta
fetch('json.json')
.then(response => response.json())
.then(json => {document.getElementById('frase1').innerHTML=json.frase1;
    document.getElementById('frase2').innerHTML=json.frase2;
    document.getElementById('frase3').innerHTML=json.frase3;
    
    document.getElementById('gaby').innerHTML=json.fraseparag;
    console.log(json)})

