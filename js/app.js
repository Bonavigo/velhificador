function gera_caracteristicas() {
	const veio_berrao = Math.random() >= 0.5;
	if (veio_berrao === false) {
		const veio_fininho = Math.random() >= 0.5;
	} else {
		const veio_fininho = false;
	}
	const veio_fininho = Math.random() >= 0.5;
	const veio_dos_emoji = Math.random() >= 0.5;
	const veio_dos_ponto = true;
	var veio = {veio_fininho:veio_fininho, veio_berrao:veio_berrao, veio_dos_emoji:veio_dos_emoji, veio_dos_ponto:veio_dos_ponto};
	return veio;
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
	if (caracteristicas.veio_dos_emoji === true) {
		string = veio_dos_emoji(string);
	}
	if (caracteristicas.veio_dos_ponto === true) {
		string = veio_dos_ponto(string);
	}
	if (caracteristicas.veio_fininho === true) {
		string = veio_fala_fino(string);
	}
	if (caracteristicas.veio_berrao === true) {
		string = veio_gritao(string);
	}
	document.getElementById("texto").value = string;
	return string;
}