// global
var textoAviso = "Cálculo de multa em UPFPA, com atualização monetária e conversão para Real, com base no <a href='http://www.tcm.pa.gov.br/doe/publicacoes/ri16consolateato20pdf11174520190624140442.pdf' target='_blank'>Ato nº 18, art. 303 do Regimento Interno do TCM-PA</a>, vigente desde 10/02/2017.",
    textoAto = "Art. 303. As multas previstas no art. 72, da Lei Complementar n.º 109/2016, e disciplinadas neste Regimento Interno, caso não procedida a tempestiva quitação, na forma e prazo fixados, estarão sujeitas aos acréscimos decorrentes da mora, nos seguintes termos:",
    textoMulta = "I - Multa de mora de 0,10% (dez centésimos por cento) do valor da multa, por dia de atraso, até o limite de 36% (trinta e seis por cento).",
    textoJuros = "III - Juros de mora de 1% (um por cento) ao mês, ou fração, desde a data que deveria ser pago, até a do efetivo pagamento.",
    textoCorrecao = 'II - Correcao monetaria do valor nominal da multa, calculada, desde a data em que deveria ser pago at\u00e9 a do efetivo pagamento, com base na varia\u00e7\u00e3o da Unidade Padr\u00e3o Fiscal do Estado do Par\u00e1 - UPFPA.',
    textoDataLimite = "Art. 280. O prazo para recolhimento da multa será de até 30 (trinta) dias corridos, após o trânsito em julgado da decisão, monocrática ou colegiada, que aplicou a sanção, ou, da decisão que julgou o recurso interposto. (Redação dada pelo Ato nº 20)",
    textoTotal = "Aplicação da correção monetária";

    upfpa = [
        {
        "ano": 2001,
        "valor": 1.1362,
        "valor_real": 1
        },
        {
        "ano": 2002,
        "valor": 1.2173,
        "valor_real": 1
        },
        {
        "ano": 2003,
        "valor": 1.3486,
        "valor_real": 1
        },
        {
        "ano": 2004,
        "valor": 1.4972,
        "valor_real": 1
        },
        {
        "ano": 2005,
        "valor": 1.6056,
        "valor_real": 1
        },
        {
        "ano": 2006,
        "valor": 1.7172,
        "valor_real": 1
        },
        {
        "ano": 2007,
        "valor": 1.769,
        "valor_real": 1
        },
        {
        "ano": 2008,
        "valor": 1.8431,
        "valor_real": 1
        },
        {
        "ano": 2009,
        "valor": 1.9608,
        "valor_real": 1
        },
        {
        "ano": 2010,
        "valor": 2.0435,
        "valor_real": 1
        },
        {
        "ano": 2011,
        "valor": 2.1587,
        "valor_real": 1
        },
        {
        "ano": 2012,
        "valor": 2.302,
        "valor_real": 1
        },
        {
        "ano": 2013,
        "valor": 2.4294,
        "valor_real": 1
        },
        {
        "ano": 2014,
        "valor": 2.5697,
        "valor_real": 1
        },
        {
        "ano": 2015,
        "valor": 2.7382,
        "valor_real": 1
        },
        {
        "ano": 2016,
        "valor": 3.0250,
        "valor_real": 1
        },
        {
        "ano": 2017,
        "valor": 3.2364,
        "valor_real": 1
        },
        {
        "ano": 2018,
        "valor": 3.3271,
        "valor_real": 1
        },
        {
        "ano": 2019,
        "valor": 3.4617,
        "valor_real": 1
        },
        {
        "ano": 2020,
        "valor": 3.5751,
        "valor_real": 1
        }
    ];

    Ato = {
        "dataPublicado" : '2017-02-10',
        "multaMoraLimite": 36,
        "multaMoraFatorReajuste": 0.10,
        "jurosMoraFatorReajuste": 1,
    };
    
for (i in upfpa) {
    console.log(upfpa[i].ano, upfpa[i].valor);
}

var logoTcmpa = "data:image/png;base64,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";
var i, taxaMulta, limiteMulta;
var validado = true;

// obter ano de data
function obterAno(data) {
    var ano = moment(data).year();
    return ano;
}

// formatar data (dd/mm/aaaa)
function formataData(data) {
    return moment(data).format('L');
}

// formatar valor monetário (00.000,00)
function formataValor(numero) {
    return accounting.formatMoney(numero, "", 2, ".", ",");
}

// diferença entre datas (b - a, tipo de comparação)
function diferencaData(a, b, comparacao) {

    var dif;

    switch (comparacao) {
        case 'D': // dias

            var a = new Date(a);
            var b = new Date(b);
        
            const MS_PER_DAY = 1000 * 60 * 60 * 24;
            const d1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
            const d2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
            
            dif = Math.floor((d2 - d1) / MS_PER_DAY);

          break;
        case 'M': // meses

            a = moment(a);
            b = moment(b);
            
            // aredonda para cima 
            dif = Math.ceil( a.diff(b, 'months', true) );
        
          break;
        default:
          alert('Erro na comparação de datas');
    }

    return dif;

}

// calcula a data limite (que a multa deveria ser paga): +30 dias da data início (dataTransitoEmJulgado) (obs.: -dias de inatividade do Tribunal???)
function obterDataLimite(a) {

    var data = new Date(a); // recebe como data
    data.setDate(data.getDate() + 30); // adiciona +30 dias

    return data;
}

// conversor de moeda: Real <-> UPFPA
function converteMoeda(moeda, valor, data) {

    var i;

    for (i in upfpa) {
        if (obterAno(data) == upfpa[i].ano) { // encontra o ano correspondente
            cotacao = upfpa[i].valor; // obtem cotação daquele ano
        }
    }
    if (moeda == 'real') {
        return valor / cotacao; // retorna valor em UPFPA
    }
    if (moeda == 'upfpa') {
        return valor * cotacao; // retorna valor em Real
    }
}

// copiar texto
function copiarTexto(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select() + "l";
    document.execCommand("copy");
    $temp.remove();

    alert("Copiado! Cole em seu documento.");
}

// exportar PDF
function gerarPdf(container) {
    
    var pdf = new jsPDF();

    pdf.lineHeightProportion = 2;

    pdf.setFont("times");
    pdf.setFontSize(12);

    pdf.addImage(logoTcmpa, 'PNG', 15, 15, 46, 14);
    pdf.text('Cálculo de multa - Ato 18', 15, 45);
    var splitTitle = pdf.splitTextToSize(textoAto, 180);
    pdf.text(15, 55, splitTitle);

    pdf.setLineHeightFactor(6);
    pdf.fromHTML($(container).html(), 15, 65, {
        'width': 170,
        'LineHeightFactor': 1
    });

    pdf.save('calculo-multa-' + moment().format("DD-MM-YYYY-HH-mm") + '.pdf');
    
}

/*
    I - MULTA DE MORA
    aplica taxa* sob o valor* e aplica multa de mora por dia* de atraso até o limite* definido
*/
function multaMora(taxa, valor, limite, dias) {
    
    // obtem a taxa de multa de mora
    var taxa = (dias * taxa);
    console.log('valor - taxa multa mora:', taxa);

    // obtem limite de aplicação da multa de mora
    if (taxa > limite) {
        limite = limite;
    } else {
        limite = taxa;
    }
    console.log('valor - limite multa mora:', limite);

    var multaMora = ( valor * (limite / 100) );
    console.log('valor - multa mora:', multaMora);
    
    taxaMulta = taxa;
    limiteMulta = limite;

    return multaMora;
}

/*
    II - CORREÇÃO MONETÁRIA
    atualiza valor da multa na cotação do UPFPA atual e converte em Real
*/

// obtem valor do UFPA na data informada
function cotacaoUpfpa(a) {
    
    var i, cotacao;
    var ano = obterAno(a); // pega somente o ano

    for (i in upfpa) { // pega valor da cotação no ano informado
        if (ano == upfpa[i].ano) {
            var cotacao = upfpa[i].valor; 
        }
    }

    return cotacao;
}

/*
    III - JUROS DE MORA
    calcula o juros de mora em UPFPA
*/
function jurosMora(percentual, valor, meses) {

    // aplica o percentual do juros sob o valor e multiplica pelos meses
    var juros = ( (percentual * valor) / 100 ) * meses;
    
    console.log('valor - juros ao mês:', juros);

    return juros;
}

// validação
function validaDados(valorMulta, dataInicio, dataFim) {

    validado = true;

    upfpaUltimo = upfpa[upfpa.length - 1];

    //  valida as datas e valores

    if (obterAno(dataFim) > upfpaUltimo.ano) { // ano inexiste em UFPA
        validado = false;
        alert("Erro: Ainda não existe cotação UPF-PA para data de pagamento informada.")
    }
    else
        if (Ato.dataPublicado > dataInicio) { // data anterior ao Ato
            validado = 'erroAto';
        }
        else
            if (dataInicio > dataFim) {  // data inicio maior que data fim
                validado = false;
                alert("Erro: A data para pagamento precisa ser posterior a data de trânsito em julgado.");
            }
            else
                if (dataInicio == dataFim) { // datas iguais
                    validado = false;
                    alert("Erro: As datas são iguais. Insira os dados corretamente.");
                }
                else
                    if (valorMulta == 0) { // valor nulo
                        validado = false;
                        alert("Erro: O valor da multa não pode ser nulo.");
                    }

}

// inicializar calculadora
$(function () {

    // define
    var formCalculadora = document.getElementById('calculadora');
        
    // ao clicar executa série de cálculos
    formCalculadora.addEventListener('submit', function(event) {

        // impede comportamento padrão (envio do formulário)
        event.preventDefault();

        // entrada
        var valorMulta = accounting.unformat(document.getElementById("valor_multa").value, ","),
            dataMulta = document.getElementById('dataDaMulta').value, // dataTransitoEmJulgado
            dataPagamento = document.getElementById('dataParaPagamento').value;

            // validação
            validaDados(valorMulta, dataMulta, dataPagamento);

        // calcular datas
        var dataLimiteRecolhimento = obterDataLimite(dataMulta),
            mesesAtraso = diferencaData(dataPagamento, dataMulta, 'M'),
            diasAtraso = diferencaData(dataMulta, dataPagamento, 'D');

            console.log('data - transito em julgado:', dataMulta);
            console.log('data - limite recolhimento:', dataLimiteRecolhimento);
            console.log('data - pagamento:', dataPagamento);
            console.log('data - dias de atraso:', diasAtraso);
            console.log('data - meses de atraso:', mesesAtraso);

        // garantir cálculos em UPFPA
        if ($("#real").prop("checked")) { // se Real
            var valorReal = valorMulta,
                valorUpfpa = converteMoeda('real', valorMulta, dataMulta);
        }
        if ($("#upfpa").prop("checked")) { // se UPFPA
            var valorUpfpa = valorMulta,
                valorReal = converteMoeda('upfpa', valorMulta, dataMulta);
        }

            console.log('valor em UPFPA:', valorUpfpa);
            console.log('valor em R$:', valorReal);

        // I - MULTA DE MORA
        var multa = multaMora(Ato.multaMoraFatorReajuste, valorUpfpa, Ato.multaMoraLimite, diasAtraso);

        // III - JUROS DE MORA
        var juros = jurosMora(Ato.jurosMoraFatorReajuste, valorUpfpa, mesesAtraso);

        // II - CORREÇÃO MONETÁRIA
        var upfpaHistorico = cotacaoUpfpa(dataMulta),
            upfpaAtual = cotacaoUpfpa(dataPagamento);

            console.log('valor - UPFPA histórico:', upfpaHistorico);
            console.log('valor - UPFPA atual:', upfpaAtual);

        // saída
        var total = (valorUpfpa + multa + juros) * upfpaAtual; // soma e converte/corrige valor de UPF para Real
        var totalExtenso = extenso(formataValor(total), {mode: 'currency'}); // valor total por extenso

            console.log('valor - total corrigido R$:', total);

        /*
            Resultado
        */
        var resultado = "<h4>VALORES DE ENTRADA</h4>" +
                        // "<p>UPF-PA (" + obterAno(dataMulta) + "): <strong>" + formataValor(upfpaHistorico) + "</strong></p>" +
                        "<p>Valor nominal da multa em UPF-PA (" + obterAno(dataMulta) + "): <strong>" + formataValor(valorUpfpa) + "</strong></p>" +
                        "<p>Data de trânsito em julgado: <strong>" + formataData(dataMulta) + "</strong></p>" +
                        "<p data-toggle='tooltip' data-placement='bottom' title='"+textoDataLimite+"'>Data prazo para recolhimento: <strong>" + formataData(dataLimiteRecolhimento) + "</strong></p>" +
                        "<p>Data para pagamento: <strong>" + formataData(dataPagamento) +"</strong></p><hr>" +

                        "<h4>MULTA DE MORA</h4>" +
                        "<p class='lei'>"+textoMulta+"</p><br>" +
                        "<p>Dias de atraso: <strong>" + diasAtraso + "</strong></p>" +
                        "<p>Percentual total de multa calculada: <strong>" + formataValor(taxaMulta) + "%</strong></p>" +
                        "<p>Percentual de multa efetivamente aplicado (limite): <strong>" + formataValor(limiteMulta) + "%</strong></p>" +
                        "<p>Multa aplicada em UPF-PA: <strong>" + accounting.formatMoney(multa, "", 3, ".", ",")  + "</strong></p><br>" +

                        "<h4>JUROS DE MORA</h4>" +
                        "<p class='lei'>"+textoJuros+"</p><br>" +
                        "<p>Meses de atraso: <strong>" + mesesAtraso + "</strong></p>" +
                        "<p>Percentual de juros efetivamente aplicado: <strong>" + (mesesAtraso * Ato.jurosMoraFatorReajuste) + "%</strong></p>" +
                        "<p>Juros aplicado em UPF-PA: <strong>" + formataValor(juros) + "</strong></p><br>" +

                        "<h4>CORREÇÃO MONETÁRIA</h4>" +
                        "<p class='lei'>"+textoCorrecao+"</p><br>" +
                        "<p>Valor nominal da multa em UPF-PA (" + obterAno(dataMulta) + "): <strong>" + formataValor(valorUpfpa) + "</strong></p>" +
                        "<p>Multa aplicada em UPF-PA: <strong>" + formataValor(multa) + "</strong></p>" +
                        "<p>Juros aplicado em UPF-PA: <strong>" + formataValor(juros) + "</strong></p>" +
                        "<p>UPF-PA ("+ obterAno(dataPagamento) +"): <strong>" + upfpaAtual + "</strong></p><br><hr>" +

                        "<h4>VALOR TOTAL DA MULTA</h4>" +
                        "<p class='lei'>"+textoTotal+" (" + formataValor(valorUpfpa)+ " + " + formataValor(multa) + " + " + formataValor(juros) + ") x " + upfpaAtual + ")</p><br>" +
                        "<p>Total: <strong><span> UPF-PA: " + formataValor(total / upfpaAtual) + "</span></strong></p><br>" +
                        "<p>Total: <strong><span> R$: " + formataValor(total) + "</span></strong></p>" +
                        "<div class='caixa-extenso' id='total_extenso'>"+totalExtenso+"</div><br>" +
                        "<p>"+textoAviso+"</p><br>"+
                        "<p>Cálculo realizado em "+moment().format("DD/MM/YYYY HH:mm")+"</p><br>";

        if (validado == true) {
            
            // resultado
            $("#resultado").empty().html(resultado);

            // tooltip
            $('[data-toggle="tooltip"]').tooltip();  

            // copiar valor
            $("#total_extenso").click(function() {
                copiarTexto('#total_extenso');
            });
            // pdf
            $('#calculo_pdf').css("display", "block").click(function () {  
                gerarPdf('#resultado');
            });

        } else if (validado == "erroAto") {
            $("#resultado").empty().html("<div class='alert alert-danger'>Erro: A data de trânsito em julgado deste ato executivo é anterior à data de publicação do Ato 18 do Regimento Interno do TCM-PA. Sendo assim, as regras de cálculo desta calculadora não se aplicam. Para efetuar o cálculo desejado, acesse: <a href='https://calculoexato.com.br' target='_blank'><i class='fa fa-external-link'></i> Cálculo Exato</a>.</div>");
        }
        else {
            $("#resultado").empty().html("<div class='alert alert-danger'>Erro: Insira os dados corretamente.</div>");
        }

    });

    // aviso: cáculo referente ao Ato 18
    $("#aviso").empty().append(textoAviso);

    // máscara: números em formato monetário no input
    $('#valor_multa').mask('#.##0,00', {reverse: true});

    // radio: ao mudar moeda altera placeholder do input
	$('.moeda').on('change',function () {
		if($(this).val() === 'upfpa'){
            $('#valor_multa').attr({placeholder:"UPFPA"});
            $('#valor_multa').focus();
		}
		if($(this).val() === 'real'){
            $('#valor_multa').attr({placeholder:"R$"});
            $('#valor_multa').focus();
		}
    });

    // foco no input
    $('#valor_multa').focus();

});