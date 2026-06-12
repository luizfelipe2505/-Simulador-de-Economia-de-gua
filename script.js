document
.getElementById("calcular")
.addEventListener("click", calcular);

function calcular(){

let consumo =
Number(
document.getElementById("consumo").value
);

let pratica =
Number(
document.getElementById("pratica").value
);

if(consumo <= 0 || pratica === 0){

document.getElementById("resultado")
.innerHTML =
"⚠️ Preencha todos os campos.";

return;

}

let economiaMensal =
(consumo * pratica) / 100;

let economiaAnual =
economiaMensal * 12;

let classificacao = "";

if(economiaAnual < 10000){

classificacao =
"🌱 Economia Básica";

}

else if(economiaAnual < 50000){

classificacao =
"💧 Economia Sustentável";

}

else{

classificacao =
"🏆 Guardião da Água";

}

document.getElementById("resultado")
.innerHTML =

`
<h2>${classificacao}</h2>

<p>
Economia mensal:
<strong>
${economiaMensal.toFixed(0)} litros
</strong>
</p>

<p>
Economia anual:
<strong>
${economiaAnual.toFixed(0)} litros
</strong>
</p>

<p>
Cada gota economizada ajuda a preservar
os recursos naturais para as futuras gerações.
</p>
`;

}