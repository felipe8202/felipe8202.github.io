# Projeto Recriação Responsiva

## Autor
Felipe Fernando Alcântara Silva de Oliveira

## Site Escolhido
Airbnb

## Link do Site
https://www.airbnb.com.br/

## Objetivo
Criar uma versão responsiva e de alta fidelidade inspirada na homepage do Airbnb, focando na semântica do HTML e na estruturação visual via CSS.

## Estratégia Responsiva
Mobile-first utilizando Flexbox e CSS Grid para garantir fluidez entre diferentes tamanhos de tela.

## Breakpoints
- **768px** (Tablets / iPad Mini)
- **1024px** (Desktops menores)
- **1440px** (Telas grandes / Ultra-wide)

## Recursos Utilizados
- CSS Grid (para a malha de cards) e Flexbox (para cabeçalho e alinhamentos).
- Variáveis CSS (`:root`) para padronização de cores e espaçamentos.
- Imagens Responsivas utilizando `aspect-ratio` e `object-fit`.
- Media Queries (`min-width`) para controle de layout em diferentes dispositivos.
- Pseudo-elementos (`::after`) para recriar detalhes visuais da interface (como os indicadores de carrossel).
- Header fixo (Sticky) com controle de indexação (`z-index`).

## Adaptações Realizadas
- A barra de categorias (`categories-bar`) recebeu um ajuste de `justify-content: center` a partir da versão de tablets (768px) para não ficar isolada à esquerda.
- Adição de estilo dedicado (azul clássico) ao link do rodapé para dar destaque de interatividade.

## Dificuldades
- Sincronizar perfeitamente o alinhamento e o espaçamento (padding/gap) entre os elementos do Header e da Barra de Categorias durante a transição do mobile para o tablet.
- Recriar o visual limpo dos botões de interação flutuantes (como o de favoritar as propriedades) e o efeito das bolinhas de paginação nas imagens usando apenas CSS sem poluir o HTML.