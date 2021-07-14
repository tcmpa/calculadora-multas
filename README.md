# Calculadora de Multa em UPFPA - Ato 18

Calculadora para realizar multas utilizando a Unidade Padrão Fiscal do Estado do Pará (UPFPA), com a atualização monetária e conversão para Real, seguindo os termos (multa de mora, juros de mora e correção monetária) do [Regimento Interno do TCM-PA, Ato nº 18, art. 303 e incisos](http://www.tcm.pa.gov.br/doe/publicacoes/ri16consolateato20pdf11174520190624140442.pdf), vigente desde 10/02/2017.

Incorporada no sistema LINCE.

#### executando

Pronta pra uso, rode um `http-server` na raiz do projeto ou coloque em um servidor http da vida.

#### dependências

O ambiente de produção precisa dos arquivos:

- `dist/calculadora.min.css`
- `dist/calculadora.min.js`
- `index.html` (usando CDNs do jquery (js) e bootstrap (css e js). se seu projeto já tiver essas dependências, altere o index.html)