function copiar() {
let idade =parseInt(document.getElementById("texto").value);

if (idade > 18) {
    alert('Você é Maior');
} else if (idade === 18) {
    alert('Legal , você tem 18 anos');
}
   else {
       alert('Você é menor de idade')
   }
}