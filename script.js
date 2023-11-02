/*
Livro: 
SOBRENOME, Nome Abreviado. Título: subtítulo (se houver). Edição (se houver). Local de publicação: Editora, ano de publicação.

Sites e artigos online:
SOBRENOME, Nome Abreviado. Título: subtítulo (se houver). Nome do site, ano. Disponível em: (link). Acesso em: (data).
*/

argumentList = [];

function onSelectType() {
	var type_ref = document.getElementById("tp_ref").value;

	switch(type_ref) {
		case "online":
			argumentList = [
				"sobrenome",
				"nome_abrevriado",
				"titulo",
				"subtitulo",
				"edicao",
				"local_da_publicacao",
				"editora",
				"ano_de_publicacao"
			]
			createForm(argumentList)
			break;
		case "livro":
			argumentList = [
				"sobrenome",
				"nome_abrevriado",
				"titulo",
				"subtitulo",
				"nome_do_site",
				"ano_de_publicacao",
				"link",
				"acesso_em",
			]
			createForm(argumentList)
			break;
		default:
			console.log("Tipo não encrontrado.");
	}
}
		
function createForm(argumentList) {
	var form_dynamic = document.querySelector(".form_dynamic");
	form_dynamic.innerHTML = "";
	form_dynamic.innerHTML = "<form>";

	argumentList.forEach(element => {
		let str_element = String(element).toUpperCase();
		let  selement = str_element.replace("_", " ");
		var htmlContent = "<br/><laabel>"+selement.replace("_", " ")+"</label><br/><input type='text' id="+element+" required><br/>";
		form_dynamic.innerHTML += htmlContent;
	});

	form_dynamic.innerHTML += "<br/><input type='submit' onclick='gerarRef()'><br/><br/>"
	
	form_dynamic.innerHTML += "</form>";
}

function gerarRef() {
	var ref_dynamic = document.getElementById("result_response");
	
	var frases_escolhidas = new Map();
	var values_result_map = new Map();

	argumentList.forEach(element => {
		var result_element = document.getElementById(element).value;

		if(!result_element)
			result_element = null;

		values_result_map.set(element, result_element);
	});

	forceString = "";
	argumentList.forEach(element => {
		if(element != "subtitulo" && element != "edicao") {
			if(values_result_map.get(element) == null) {
				forceString += element + " - "
			}
		}
	});

	

	console.log(values_result_map)

	console.log(values_result_map.get("edicao"));


	if(values_result_map.get("subtitulo") != null && values_result_map.get("edicao") != null) {
		ref_dynamic.innerHTML = values_result_map.get("sobrenome") + ", " + values_result_map.get("nome_abrevriado") + ". <strong>" + values_result_map.get("titulo") + "</strong>: " + values_result_map.get("subtitulo") + "." + values_result_map.get("edicao") + ". " + values_result_map.get("local_da_publicacao") + ": " + values_result_map.get("editora") + ", " + values_result_map.get("ano_de_publicacao") + ".";
	} else if (values_result_map.get("subtitulo") == null && values_result_map.get("edicao") != null) {
		ref_dynamic.innerHTML = values_result_map.get("sobrenome") + ", " + values_result_map.get("nome_abrevriado") + ". <strong>" + values_result_map.get("titulo") + "</strong>. " + values_result_map.get("edicao") + ". " + values_result_map.get("local_da_publicacao") + ": " + values_result_map.get("editora") + ", " + values_result_map.get("ano_de_publicacao") + ".";
	} else if (values_result_map.get("subtitulo") != null && values_result_map.get("edicao") == null) {
		ref_dynamic.innerHTML = values_result_map.get("sobrenome") + ", " + values_result_map.get("nome_abrevriado") + ". <strong>" + values_result_map.get("titulo") + "</strong>: " + values_result_map.get("subtitulo") + ". " + values_result_map.get("edicao") + ". " + values_result_map.get("local_da_publicacao") + ", " + values_result_map.get("ano_de_publicacao") + ".";
	} else {
		ref_dynamic.innerHTML = values_result_map.get("sobrenome") + ", " + values_result_map.get("nome_abrevriado") + ". <strong>" + values_result_map.get("titulo") + "</strong>. " + values_result_map.get("local_da_publicacao") + ": " + values_result_map.get("editora") + ", " + values_result_map.get("ano_de_publicacao") + ".";
	}
	
}