const criptografar = document.getElementById("button__criptografar");
const descriptografar = document.getElementById("button__descriptografar");
const copy = document.getElementById("button__copiar");
const textoInicial = document.getElementById("textoInput");
const textFinal = document.getElementById("textoFinal");
const boneca = document.getElementById("boneca");
const textInfo = document.getElementById("textoInfo");
const rigth = document.getElementById("rigth")
	
const substituir = (newvalue) => {
	textFinal.innerHTML = newvalue;
	textFinal.classList.add("ajustar");
	rigth.classList.add("ajuste")
	textoInicial.value = "";
	textoInicial.style.height = "auto"
	textoInicial.placeholder = "Digite seu texto";
	boneca.classList.add("ocultar");
	textInfo.classList.add("ocultar");
	copy.classList.remove("bn_ocultar");
}

const reset = () => {
	textoInicial.value = "";
    textoInicial.style.height = "auto";
	textFinal.innerHTML = "";
	rigth.classList.remove("ajuste")
	textFinal.classList.remove("ajustar");
	boneca.classList.remove("ocultar");
	textFinal.placeholder = "Nenhuma mensagem encontrada";
	textInfo.classList.remove("ocultar")
	copy.classList.add("bn_ocultar");
	textoInicial.focus();
};

let converter = [
	["e", "enter"],
	["o", "ober"],
	["i", "imes"],
	["a", "ai"],
	["u", "ufat"]
];

criptografar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function encript(newtext) {
			for (let i = 0; i < converter.length; i++) {
				if (newtext.includes(converter[i][0])) {
					newtext = newtext.replaceAll(converter[i][0], converter[i][1]);
				};
			};
			return newtext;
		};
		substituir(encript(texto));
	} else {
		alert("Digite o texto para criptografar");
		reset();
	};
});

descriptografar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function descript(newtext) {
			for (let i = 0; i < converter.length; i++) {
				if (newtext.includes(converter[i][1])) {
					newtext = newtext.replaceAll(converter[i][1], converter[i][0]);
				};
			};
			return newtext;
		};
		substituir(descript(texto));
	} else {
		alert("Digite o texto para descriptografar");
		reset();
	};
});

copy.addEventListener("click", () => {
	let texto = textFinal;
	texto.select();
	document.execCommand('copy');
	alert("Texto Copiado");
	reset();
});

textoInicial.addEventListener("change", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});
textoInicial.addEventListener("keyup", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});
