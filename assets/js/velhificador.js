autosize(document.querySelectorAll('textarea'));

var veio_toggle = document.querySelector('#veio_aleatorio');
veio_toggle.onclick = toggle_custom_veio;

function toggle_custom_veio() {
	var veio_toggle = document.querySelector('#veio_aleatorio');
	var div_custom = document.querySelector('.custom_veio');
	if (veio_toggle.checked == 1) {
		div_custom.style.display = 'none';
		div_custom.dataset.custom = 'false';
	} else {
		div_custom.dataset.custom = 'true';
		div_custom.style.display = 'block';
	}
}

const VELHIFICADOR = {
	velho_gerado: null,
	randomize() {
		let veio_dos_ponto = Math.random() >= 0.5;
		let veio_berrao = Math.random() >= 0.5;
		if (veio_berrao === false) {
			veio_fininho = true;
		} else {
			veio_fininho = false;
		}
		let veio_dos_emoji = Math.random() >= 0.5;
		this.velho_gerado = {"veio_dos_ponto": veio_dos_ponto, "veio_berrao": veio_berrao, "veio_fininho": veio_fininho, "veio_dos_emoji": veio_dos_emoji};
	},
	getCustomVeio() {
		let veio_dos_ponto = document.querySelector('#veio_dos_ponto').checked == 1 ? true : false;
		let veio_berrao = document.querySelector('#veio_berrao').checked == 1 ? true : false;
		let veio_fininho = document.querySelector('#veio_fininho').checked == 1 ? true : false;
		let veio_dos_emoji = document.querySelector('#veio_dos_emoji').checked == 1 ? true : false;
		this.velho_gerado = {"veio_dos_ponto": veio_dos_ponto, "veio_berrao": veio_berrao, "veio_fininho": veio_fininho, "veio_dos_emoji": veio_dos_emoji};
	},
	veio_dos_ponto(string) {
		string = string.replaceAll(" ", ". ");
		string = string.replaceAll(",", "");
		return string;
	},
	veio_berrao(string) {
		return string.toUpperCase();
	},
	veio_fininho(string) {
		return string.toLowerCase();
	},
	veio_dos_emoji(string) {
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
	},
	velhificar() {
		let div_custom = document.querySelector('.custom_veio');
		let textarea = document.querySelector('#velhificador');
		let string = textarea.value;

		if (string == '') {
			Swal.fire(
				'Erro!',
				'Você precisa escrever algo antes de velhificar o texto!',
				'error'
			);
		} else {
			if (div_custom.dataset.custom == 'true') {
				VELHIFICADOR.getCustomVeio();
			} else {
				VELHIFICADOR.randomize();
			}
	
			if (VELHIFICADOR.velho_gerado.veio_dos_ponto === true) {
				string = VELHIFICADOR.veio_dos_ponto(string);
			}
			if (VELHIFICADOR.velho_gerado.veio_berrao === true) {
				string = VELHIFICADOR.veio_berrao(string);
			} else {
				string = VELHIFICADOR.veio_fininho(string);
			}
			if (VELHIFICADOR.velho_gerado.veio_dos_emoji === true) {
				string = VELHIFICADOR.veio_dos_emoji(string);
			}
	
			textarea.value = string;
			SITE.param(VELHIFICADOR.velho_gerado);
		}
	}
}
const SITE = {
	generate() {
		let elementIdoso = document.querySelector('#js_idoso');
		let elementRede = document.querySelector('#js_rede_social');
		let buttonV = document.querySelector('[data-velhificar="true"]');

		buttonV.onclick = VELHIFICADOR.velhificar;

		let velhos = ["pelo Seu Zé", "pelo Manoel", "pelo Edivaldo", "pelo Geraldo", "pelo Evaristo", "pelo Arnaldo Messias", "pela Tereza", "pelo João Costa", "pela Dircea", "pelo Ezequiel", "pelo Emanoel", "pelo Edivaldo", "pela Alzira", "pela Aparecida", "pela Fátima", "pela Adelaide", "pelo Casemiro", "pelo Jair", "pelo Aristênio", "pelo Balbino", "pelo Baltazar", "pelo Astolfo", "pelo Rodolfo", "pelo Adolfo", "pela Cleide", "pela Marlene", "pela Veranice", "pelo Cleber", "pela Mariângela", "pela Josefa", "pelo Raimundo", "pela Terezinha", "pelo Márcio"];
		let velho = velhos[Math.floor( Math.random() * velhos.length )];

		let redes_sociais = ['Orkut', 'Facebook'];
		let rede_social = redes_sociais[Math.floor( Math.random() * redes_sociais.length )];

		elementIdoso.innerText = velho;
		elementRede.innerText = rede_social;
	},
	param(object) {
		let param = object;
		let string = '';

		if (param.veio_dos_ponto === true) {
			string += "Veio dos ponto: Sim";
		} else {
			string += "Veio dos ponto: Não";
		}

		if (param.veio_berrao === true) {
			string += "<br>Veio berrão: Sim";
			string += "<br>Veio fininho: Não";
		} else {
			string += "<br>Veio berrão: Não";
			string += "<br>Veio fininho: Sim";
		}

		if (param.veio_dos_emoji === true) {
			string += "<br>Veio dos emoji: Sim";
		} else {
			string += "<br>Veio dos emoji: Não";
		}

		document.querySelector('.param').innerHTML = string;
	}
}
SITE.generate();