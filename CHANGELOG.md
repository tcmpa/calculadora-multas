## v0.4
- correções para os requisitos finais da Secretária
- exportar cálculo para PDF corrigido
- adicionado valor total da multa por extenso
- adicionado data de vigencia do ato
- adicionado validação de erros

## v0.3
- correção para upf-pa

## v0.2
- Foi colocada a dataTransitoEmJulgado como input, no lugar de dataMulta, portanto, removeu-se a tentativa de calcular a dataQuitacao abaixo explanada.

## v0.1
- Calculadora de multa seguindo o ato n18 do Regimento Interno.
- Tentou-se calcular a "data para quitacao" (dataQuitacao) que seria um calculo da data inicial (dataMulta) + 30 dias do transito em julgado, tento em vista as datas de não-funcionamento do Tribunal.