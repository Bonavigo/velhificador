function gera_caracteristicas() {
	let veio_berrao = Math.random() >= 0.5;
	let veio_fininho = null;
	if (veio_berrao === false) {
		veio_fininho = true;
	} else {
		veio_fininho = false;
	}
	let veio_dos_emoji = true;
	let veio_dos_ponto = true;
	var veio = {veio_fininho:veio_fininho, veio_berrao:veio_berrao, veio_dos_emoji:veio_dos_emoji, veio_dos_ponto:veio_dos_ponto};
	return veio;
}
function retornar_parametros(objeto) {
	var gritao = caracteristicas.veio_berrao === true ? 'Sim' : 'Não';
	var fala_fino = caracteristicas.veio_fininho === true ? 'Sim' : 'Não';
	var pontuador = caracteristicas.veio_dos_ponto === true ? 'Sim' : 'Não';
	var emojeiro = caracteristicas.veio_dos_emoji === true ? 'Sim' : 'Não';
	const texto = "<strong>Parâmetros:</strong><br>Velho berrão: "+gritao+"<br>Velho fala fino: "+fala_fino+"<br>Velho que usa pontos: "+pontuador+"<br>Velho dos Emojis: "+emojeiro;
	const alerta_parametros = document.getElementById("parametros");
	alerta_parametros.style.display = 'block';
	document.getElementById("txt_parametros").innerHTML = texto;
}
document.addEventListener('DOMContentLoaded', function() {
	var velhos = ["pelo Seu Zé", "pelo Manoel", "pelo Edivaldo", "pelo Geraldo", "pelo Evaristo", "pelo Arnaldo Messias", "pela Tereza", "pelo João Costa", "pela Dircea", "pelo Ezequiel", "pelo Emanoel", "pelo Edivaldo", "pela Alzira", "pela Aparecida", "pela Fátima", "pela Adelaide", "pelo Casemiro", "pelo Jair", "pelo Aristênio", "pelo Balbino", "pelo Baltazar", "pelo Astolfo", "pelo Rodolfo", "pelo Adolfo", "pela Cleide", "pela Marlene", "pela Veranice", "pelo Cleber", "pela Mariângela", "pela Josefa", "pelo Raimundo", "pela Terezinha", "pelo Márcio"];
	var velho = velhos[Math.floor( Math.random() * velhos.length )];
	document.getElementById("nome_idoso").innerHTML = velho;
});
function veio_dos_emoji(string) {
	string = string.replaceAll("Parabéns", "Parabéns 👏.👏.👏.");
	string = string.replaceAll("parabéns", "parabéns 👏.👏.👏.");
	string = string.replaceAll("Parabéms", "Parabéms 👏.👏.👏.");
	string = string.replaceAll("parabéms", "parabéms 👏.👏.👏.");
	string = string.replaceAll("Netinho", "Netinho ❤️.❤️.❤️.");
	string = string.replaceAll("netinho", "netinho ❤️.❤️.❤️.");
	string = string.replaceAll("Feliz", "Feliz 😀.😀.😀.");
	string = string.replaceAll("feliz", "feliz 😀.😀.😀.");
	string = string.replaceAll("Aniversário", "Aniversário 🎉.🎉.🎉.");
	string = string.replaceAll("aniversário", "aniversário 🎉.🎉.🎉.");
	return string;
}
function veio_dos_ponto(string) {
	string = string.replaceAll(" ", ". ");
	string = string.replaceAll(",", "");
	return string;
}
function veio_gritao(string) {
	var gritao = string.toUpperCase();
	return gritao;
}
function veio_fala_fino(string) {
	var fala_fino = string.toLowerCase();
	return fala_fino;
}
function velhificar() {
	caracteristicas = gera_caracteristicas();
	var string = document.getElementById("texto").value;
	string = veio_dos_emoji(string);
	if (caracteristicas.veio_dos_ponto === true) {
		string = veio_dos_ponto(string);
	}
	if (caracteristicas.veio_fininho === true && caracteristicas.veio_berrao === false) {
		string = veio_fala_fino(string);
	} 
	if (caracteristicas.veio_berrao === true && caracteristicas.veio_fininho === false) {
		string = veio_gritao(string);
	}
	document.getElementById("texto").value = string;
	retornar_parametros(caracteristicas);
	return string;
}