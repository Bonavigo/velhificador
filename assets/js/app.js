/* (Re)feito por Bruno Bonavigo em dezembro de 2022. */

const VELHIFICADOR = {
	startup() {
		autosize(document.querySelectorAll('textarea'));
		this.geradorNomeIdoso();
		this.geradorRede();
		botao_velhificador = document.querySelector("#botao_velhificador");
		botao_velhificador.onclick = VELHIFICADOR.velhificar;
		Waves.attach('.wave');
		Waves.init();
	},
	geradorNomeIdoso() {
		velhos = ["pelo Seu Zé", "pelo Arnesto", "pelo Edivaldo", "pelo Geraldo", "pelo Evaristo", "pelo Ernesto", "pela Iracema", "pelo Oscar", "pelo Osmar"];
		velho = velhos[Math.floor( Math.random() * velhos.length )];
		document.querySelector("#nome_idoso").innerText = velho;
	},
	geradorRede() {
		redes_sociais = ['Orkut', 'Facebook', 'WhatsApp'];
		rede_social = redes_sociais[Math.floor( Math.random() * redes_sociais.length )];
		document.querySelector("#nome_rede").innerText = rede_social;
	},
	velhificar() {
		textarea = document.querySelector("#velhificador");
		texto = textarea.value;
		if (texto) {
			veio = VELHIFICADOR.gerarIdoso();
			if (veio.veioDosPontos) {
				texto = VELHIFICADOR.filtroPontos(texto);
			}
			if (veio.veioBerrao) {
				texto = VELHIFICADOR.filtroBerrao(texto);
			} else {
				texto = VELHIFICADOR.filtroFininho(texto);
			}
			if (veioDosEmoji) {
				texto = VELHIFICADOR.filtroEmojis(texto);
			}
			textarea.value = texto;
			VELHIFICADOR.alertaVeio(veio);
		} else {
			VELHIFICADOR.alertaVazio();
		}
	},
	gerarIdoso() {
		veioDosPontos = Math.random() >= 0.5;
		veioBerrao = Math.random() >= 0.5;
		if (veioBerrao) {
			veioFininho = false;
		} else {
			veioFininho = true;
		}
		veioDosEmoji = true;
		veioGerado = {"veioDosPontos": veioDosPontos, "veioBerrao": veioBerrao, "veioFininho": veioFininho, "veioDosEmoji": veioDosEmoji};
		return veioGerado;
	},
	filtroPontos(string) {
		string = string.replaceAll(" ", ". ");
		string = string.replaceAll(",", "");
		return string;
	},
	filtroBerrao(string) {
		return string.toUpperCase();
	},
	filtroFininho(string) {
		return string.toLowerCase();
	},
	filtroEmojis(string) {
		string = string.replaceAll("Parabéns", "Parabéns 👏.👏.👏.");
		string = string.replaceAll("parabéns", "parabéns 👏.👏.👏.");
		string = string.replaceAll("Parabéms", "Parabéms 👏.👏.👏.");
		string = string.replaceAll("parabéms", "parabéms 👏.👏.👏.");
		string = string.replaceAll("Netinho", "Netinho ❤️.❤️.❤️.");
		string = string.replaceAll("netinho", "netinho ❤️.❤️.❤️.");
		string = string.replaceAll("Te amo", "Te amo ❤️.❤️.❤️.");
		string = string.replaceAll("te amo", "te amo ❤️.❤️.❤️.");
		string = string.replaceAll("Feliz", "Feliz 😀.😀.😀.");
		string = string.replaceAll("feliz", "feliz 😀.😀.😀.");
		string = string.replaceAll("Aniversário", "Aniversário 🎉.🎉.🎉.");
		string = string.replaceAll("aniversário", "aniversário 🎉.🎉.🎉.");
		return string;
	},
	alertaVazio() {
		alerta = `
			<div class="toast-container position-fixed bottom-0 end-0 p-3">
				<div id="toast" class="toast text-bg-light" role="alert" aria-live="assertive" aria-atomic="true">
					<div class="toast-header text-bg-dark">
						<i class="bi bi-exclamation-diamond icon-aviso"></i>
						<strong class="me-auto">Erro!</strong>
						<button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
					</div>
					<div class="toast-body">
						Você precisa escrever algo para usar o velhificador!
					</div>
				</div>
			</div>
		`;
		container = document.querySelector(".toast-container");
		container.innerHTML = alerta;
		elementoToast = document.querySelector(`#toast`);
		toast = new bootstrap.Toast(elementoToast, {
			animation: true,
			autohide: false
		});
		toast.show();
	},
	alertaVeio(objeto) {
		string = "";
		
		if (objeto.veioDosPontos === true) {
			string += "usuário de pontos, ";
		} else {
			string += "";
		}

		if (objeto.veioBerrao === true) {
			string += "berrão";
		} else {
			string += "fininho";
		}

		if (objeto.veioDosEmoji === true) {
			string += " e usuário de emojis.";
		} else {
			string += ".";
		}

		alerta = `
			<div class="toast-container position-fixed bottom-0 end-0 p-3">
				<div id="toast" class="toast text-bg-light" role="alert" aria-live="assertive" aria-atomic="true">
					<div class="toast-header text-bg-dark">
						<i class="bi bi-info-circle icon-aviso"></i>
						<strong class="me-auto">Informações</strong>
						<button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
					</div>
					<div class="toast-body">
						Informações sobre o idoso:
						${string}
					</div>
				</div>
			</div>
		`;
		container = document.querySelector(".toast-container");
		container.innerHTML = alerta;
		elementoToast = document.querySelector(`#toast`);
		toast = new bootstrap.Toast(elementoToast, {
			animation: true,
			autohide: false
		});
		toast.show();
	}
}

VELHIFICADOR.startup();
