Velho = {
	veio_dos_emoji(string) {
		string = string.replaceAll("Parabéns", "Parabéns 👏.👏.👏.");
		string = string.replaceAll("parabéns", "parabéns 👏.👏.👏.");
		string = string.replaceAll("Parabéms", "Parabéms 👏.👏.👏.");
		string = string.replaceAll("parabéms", "parabéms 👏.👏.👏.");
		string = string.replaceAll("Netinho", "Netinho ❤️.❤️.❤️.");
		string = string.replaceAll("netinho", "netinho ❤️.❤️.❤️.");
		string = string.replaceAll("Amo", "Amo ❤️.❤️.❤️.");
		string = string.replaceAll("amo", "amo ❤️.❤️.❤️.");
		string = string.replaceAll("Feliz", "Feliz 😀.😀.😀.");
		string = string.replaceAll("feliz", "feliz 😀.😀.😀.");
		string = string.replaceAll("Aniversário", "Aniversário 🎉.🎉.🎉.");
		string = string.replaceAll("aniversário", "aniversário 🎉.🎉.🎉.");
		return string;
	},
	veio_dos_ponto(string) {
		string = string.replaceAll(",", " ");
		string = string.replaceAll(" ", ". ");
		return string;
	},
	veio_gritao(string) {
		var gritao = string.toUpperCase();
		return gritao;
	},
	velhificar(texto) {
		let string = this.veio_dos_emoji(texto);
		string = this.veio_dos_ponto(string);
		string = this.veio_gritao(string);
		console.log("Velhificado com sucesso!");
		document.getElementById("texto").value = string;
	}
}
const velhos = ["pelo Seu Zé", "pelo Manoel", "pelo Edivaldo", "pelo Geraldo", "pelo Evaristo", "pelo Arnaldo Messias", "pela Tereza", "pelo João Costa", "pela Dircea", "pelo Ezequiel", "pelo Emanoel", "pelo Edivaldo", "pela Alzira", "pela Aparecida", "pela Fátima", "pela Adelaide", "pelo Casemiro", "pelo Jair", "pelo Aristênio", "pelo Balbino", "pelo Baltazar", "pelo Astolfo", "pelo Rodolfo", "pelo Adolfo", "pela Cleide", "pela Marlene", "pela Veranice", "pelo Cleber", "pela Mariângela", "pela Josefa", "pelo Raimundo", "pela Terezinha", "pelo Márcio"];
var velho = velhos[Math.floor( Math.random() * velhos.length )];
document.getElementById("nome_idoso").innerHTML = velho;
document.getElementById("year").innerHTML = new Date().getFullYear();