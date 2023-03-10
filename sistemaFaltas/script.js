
const alunos=  [{sfc:'Al Mil',nomeComp:'ANA LIVIA MATOS MUNIZ',nomeG:'Ana Livia',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020524.jpg'},
                {sfc:'Al Mil',nomeComp:'CARLOS HENRICCO RABELO DE QUEIROZ',nomeG:'Queiroz',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020475.jpg'},
                {sfc:'Al Mil',nomeComp:'DANIEL AMBROZIO BRETHERICK MARQUES',nomeG:'Bretherick',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020476.jpg'},
                {sfc:'Al Mil',nomeComp:'DANIEL BATISTA CUADROS',nomeG:'Cuadros',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020477.jpg'},
                {sfc:'Al Mil',nomeComp:'FELIPE LINS DOS SANTOS',nomeG:'Felipe Santos',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020530.jpg'},
                {sfc:'Al Mil',nomeComp:'GABRIEL DE OLIVEIRA VIEGAS',nomeG:'Viegas',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020531.jpg'},
                {sfc:'Al Mil',nomeComp:'GABRIEL NOBREGA DE BRITO RAMOS',nomeG:'Nobrega',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020506.jpg'},
                {sfc:'Al Mil',nomeComp:'GIULIO BRONSON SIQUEIRA DE OLIVEIRA',nomeG:'Bronson',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020507.jpg'},
                {sfc:'Al Mil',nomeComp:'JOSEPH INÁCIO VIEIRA OLIVEIRA GOMES',nomeG:'Joseph Vieira',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020486.jpg'},
                {sfc:'Al Mil',nomeComp:'LUCAS PINAFI CARVALHO',nomeG:'Pinafi',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020534.jpg'},
                {sfc:'Al Mil',nomeComp:'RAFAEL CAVALCANTE TIMBÓ',nomeG:'Timbo',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020537.jpg'},
                {sfc:'Al Mil',nomeComp:'RAFAEL PONTES TENÓRIO LIMA',nomeG:'Pontes',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020493.jpg'},
                {sfc:'Al Mil',nomeComp:'RENATO DA PAIXÃO ALVES',nomeG:'Paixao',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020538.jpg'},
                {sfc:'Al Mil',nomeComp:'RICHARD DE CARVALHO GONÇALVES MELLO',nomeG:'Richard',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020539.jpg'},
                {sfc:'Al Mil',nomeComp:'SAMUEL BARBOSA E SILVA',nomeG:'Barbosa',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020540.jpg'},
                {sfc:'Al Mil',nomeComp:'THIAGO OLIVEIRA JUCA VASCONCELOS',nomeG:'vasconcelos',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020541.jpg'},
                {sfc:'Al Mil',nomeComp:'VITOR EDUARDO PINHEIRO DO NASCIMENTO',nomeG:'Nascimento',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020497.jpg'},
                {sfc:'Al Civ',nomeComp:'BRUNO CAMACHO BURIN',nomeG:'Burin',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020545.jpg'},
                {sfc:'Al Civ',nomeComp:'FELIPE KNÖLLER NUNES',nomeG:'Knoller',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020549.jpg'},
                {sfc:'Al Civ',nomeComp:'FERNANDO VICTOR CORREA LIMA GOMES',nomeG:'Gomes',urlFoto:'	http://servsdsv1.ime.eb.br/fotospessoal/302020551.jpg'},
                {sfc:'Al Civ',nomeComp:'GUSTAVO EWBANK RODRIGUES DANON',nomeG:'Danon',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020556.jpg'},
                {sfc:'Al Civ',nomeComp:'JOÃO PEDRO FRANCISCO CARUSO PEDROSO',nomeG:'Caruso',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020559.jpg'},
                {sfc:'Al Civ',nomeComp:'MATEUS LIMA SILVEIRA',nomeG:'Mateus Lima',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302019428.jpg'},
                {sfc:'Al Civ',nomeComp:'MATHEUS ANDRADE BARRETO',nomeG:'Andrade',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020563.jpg'},
                {sfc:'Al Civ',nomeComp:'PAMELLA ATANES SILVA',nomeG:'Pamella',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020564.jpg'},
                {sfc:'Al Civ',nomeComp:'RAFAEL CANGUSSÚ FERREIRA',nomeG:'Cangussu',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/302020566.jpg'},
                {sfc:'1º Ten',nomeComp:'ALEXANDER DAMITZ PINHEIRO',nomeG:'Damitz',urlFoto:'http://servsdsv1.ime.eb.br/fotospessoal/102021613.jpg'}];

var presentList = new Array();
var currentOption = 'None';

$(document).ready(function() {
	$('#filtrar').click(function() {
        var option = document.querySelector('#filtrar')
        if(currentOption == option.value);
        else{
            $('.card').remove();
            let filtro = option.value
            currentOption = filtro;
            if(filtro!='None')
                gerarCards(filtro)
        }
	});
});


function alternaEstado(nomeGuerra){
    let id = '#'+nomeGuerra;
    console.log(id);
    nomeGuerra = nomeGuerra.replace("_"," ");
    if(presentList.includes(nomeGuerra)){
        let indice = presentList.indexOf(nomeGuerra);
        presentList.splice(indice,1);
        $(id).css("background-color","rgba(255, 255, 255, 0.8)");
    }
    else{
        presentList.push(nomeGuerra)
        $(id).css("background-color","red");
    }
}

function gerarCards(filtro){
    for(let integrantes of alunos){
       if(integrantes.sfc == filtro || filtro == "Todos"){
        var $container = $('.container');
        let nomeSemEspaço = integrantes.nomeG.replace(" ","_");
        var $card = $('<div class="card" id="'+nomeSemEspaço+'" onclick="alternaEstado(\''+nomeSemEspaço+'\')" >');
        var $img = $('<img src="'+integrantes.urlFoto+'" alt="Nova Imagem">');
        var $description = $('<div class="description">');
        var $NomeGuerra = $('<h2>'+integrantes.sfc+' '+ integrantes.nomeG+'</h2>');
        var $NomeCompleto = $('<h3>'+integrantes.nomeComp+'</h3>');
        $description.append($NomeGuerra);
        $description.append($NomeCompleto);
        $card.append($img);
        $card.append($description);
        $container.append($card);
       }
    }
}

function arrayToCsv(data) {
    const csvRows = [];
    for (let i = 0; i < data.length; i++) {
      const row = data[i].join(';');
      csvRows.push(row);
    }
    return csvRows.join('\n');
  }

function gerarFaltas(){
    const meuForm = document.getElementById('meuForm');
    var day = meuForm.elements.data.value; 
    var local = meuForm.elements.local.value;

    var presentes = new Array();
    var ausentes = new Array();

    for(let integrante of alunos){
        if(presentList.includes(integrante.nomeG))
            presentes.push(integrante.nomeG);
        else
            ausentes.push(integrante.nomeG);  
    }

    let i = 0;
    var data = new Array();
    data.push(['Presentes','Faltosos']);

    while((i<ausentes.length)||(i<presentes.length)){
        if(i>=ausentes.length) data.push([presentes[i],'']);
        else if(i>=presentes.length) data.push(['',ausentes[i]]);
        else data.push([presentes[i],ausentes[i]]);
        i+=1;
    }

    const csvContent = arrayToCsv(data);
    const blob = new Blob([csvContent], { type: "text/csv" });
    const link = document.createElement('a');
    
    link.href = URL.createObjectURL(blob);
    link.download = 'Presença-'+day+'-'+local+'.csv';

    document.body.appendChild(link);

    // Clique no link para iniciar o download do data
    link.click();

    document.body.removeChild(link);
}


