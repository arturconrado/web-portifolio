class Despesa {
	constructor(ano, mes, dia, tipo, descricao, valor){
		this.ano = ano
		this.mes = mes
		this.dia = dia
		this.tipo = tipo
		this.descricao = descricao
		this.valor = valor

	}

	validarDados(){
		for(let i in this){
			if(this[i] == undefined || this[i] == '' || this[i] == null){
					return false
				}


			}
			return true
		}

}

class Bd{

	constructor(){
		let id = localStorage.getItem('id') 

			if(id === null){
				localStorage.getItem('id', 0)
			}

	}

	getProximoId(){
		let proximoId = localStorage.getItem('id')
		return parseInt(proximoId) + 1
	}

	gravar(d){
		let id = this.getProximoId()
		localStorage.setItem(id, JSON.stringify(d))
		localStorage.setItem('id', id)
	}	
	recuperarTodosRegistros(){
		//nessessario array armazenar as despesas

		let despesas = Array()

		let id = localStorage.getItem('id')
		//recuperando as depesas para mostrar
		for(let i = 1; i<= id; i++){
			
			// recuperar a despesa
			let despesa = JSON.parse(localStorage.getItem(i))
			
			//verificar se existem indices null

			if(despesa == null){
				continue
			}

			despesas.push(despesa)
		}
		
		

		return despesas
	}

	pesquisar(despesa){
		let despesasFiltradas = array()
		despesasFiltradas = this.recuperarTodosRegistros()
		console.log(despesasFiltradas)

	}
}

let bd = new Bd()

function cadastraDespesa() {
	


	let ano = document.getElementById('ano')
	let mes = document.getElementById('mes')
	let dia = document.getElementById('dia')
	let tipo = document.getElementById('tipo')
	let descricao = document.getElementById('descricao')
	let valor = document.getElementById('valor')

	let despesa = new Despesa(
		ano.value,
		mes.value,
		dia.value,
		tipo.value,
		descricao.value,
		valor.value
	)

	if(despesa.validarDados()){
		//inclusao de dados
		bd.gravar(despesa)
		
		document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso'
		document.getElementById('modal_titulo_div').className = 'modal-header text-success'
		document.getElementById('modal_conteudo').innerHTML = 'Sucesso ao gravar dados!!'
		document.getElementById('botao_modal').innerHTML = 'OK'
		document.getElementById('botao_modal').className = 'btn btn-success'

		$('#registrodeDespesa').modal('show')

		ano.value = ''
		mes.value = ''
		dia.value = ''
		tipo.value = ''
		descricao.value = ''
		valor.value = ''


	} else {
		document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
		document.getElementById('modal_titulo').innerHTML = 'Erro na inclusao dos dados'
		document.getElementById('modal_conteudo').innerHTML = 'Verifique se todos os campos foram preechidos'
		document.getElementById('botao_modal').innerHTML = 'Voltar e corrigir'
		document.getElementById('botao_modal').className = 'btn btn-danger'

		//dialogo de erro
		$('#registrodeDespesa').modal('show')
	}
	

}

function carregarListaDespesa() {

	 let despesas = Array()

	 despesas = bd.recuperarTodosRegistros()

	 //referencia ao elemento html tbody da tabela
	 let listaDespesas = document.getElementById('listaDespesas')

	 //perconde o array de despesas gerado e listando as despesas 
	 despesas.forEach(function(d){

	 	//criando a linha da tabela(tr)
	 	let linha = listaDespesas.insertRow()

	 	//inserindo valores nas colunas(td)
	 	linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`
	 	 	
	 	//ajustar tipo
	 	switch(d.tipo){
	 		case '1': d.tipo = 'Alimentacacao'
	 			break
	 		case '2': d.tipo = 'educacao'
	 			break
	 		case '3': d.tipo = 'lazer'
	 			break
	 		case '4': d.tipo = 'saude'
	 			break
	 		case '5': d.tipo = 'transporte'
	 			break
	 	}
	 	linha.insertCell(1).innerHTML = d.tipo


	 	linha.insertCell(2).innerHTML = d.descricao
	 	linha.insertCell(3).innerHTML = d.valor



})

	 }


function pesquisarDespesa(){
	let ano = document.getElementById('ano').value
	let mes = document.getElementById('mes').value
	let dia = document.getElementById('dia').value
	let tipo = document.getElementById('tipo').value
	let descricao = document.getElementById('descricao').value
	let valor = document.getElementById('valor').value

	let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

	bd.pesquisar(despesa)
}





