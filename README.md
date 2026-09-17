# Desafio Dev XMX — Tenurima

Página de vendas implementada a partir dos materiais fornecidos no desafio da XMX CORP.

## Como rodar

1. Baixe/clique no projeto.
2. Abra a pasta no VS Code.
3. Abra `index.html` no navegador ou use o Live Server.

Não é necessário instalar dependências ou executar `npm install`.

## Tecnologias

- HTML5 semântico
- CSS3
- JavaScript puro
- Git / GitHub

Não foram usados React, Vue, Bootstrap, Tailwind, jQuery ou outro framework de interface.

## Estrutura

```text
index.html
css/style.css
js/script.js
assets/
DIAGNOSTICO.md
README.md
```

## Responsividade

A página foi organizada para funcionar sem scroll horizontal nos tamanhos avaliados no desafio:

- 360px
- 414px
- 768px
- 1024px
- 1440px
- 1920px

Usei os tamanhos dos frames fornecidos como referência principal no desktop e media queries para reorganizar o conteúdo em telas menores.

## Interações

- Menu mobile abre e fecha.
- Links do menu levam para as seções da página.
- FAQ abre e fecha.
- Botões de compra abrem uma janela de pedido com o pacote selecionado.
- A janela de pedido pode ser fechada pelo botão, pelo fundo ou pela tecla `Esc`.
- Botões e links possuem estados de hover e foco visível.

### Decisão sobre checkout

O material do Figma não fornece uma URL real de checkout. Por isso, os botões `BUY NOW` usam um checkout demonstrativo dentro da própria página, em vez de apontar para uma URL inventada. Com uma URL real fornecida pela empresa, essa ação pode ser trocada diretamente no JavaScript/HTML.

### Decisão sobre conteúdo

Onde o Figma apresenta apenas elementos visuais ou não detalha um comportamento, mantive o conteúdo textual apresentado nos materiais do desafio e tomei decisões simples para tornar a página navegável e funcional.

## Imagens

Foram priorizados os assets entregues no desafio. Imagens que não precisam carregar imediatamente recebem `loading="lazy"`, como a imagem da tabela de informações no FAQ.

## Acessibilidade básica

- Estrutura com `header`, `nav`, `main`, `section`, `article` e `footer`.
- `alt` nas imagens com conteúdo.
- Elementos decorativos marcados como `aria-hidden`.
- Botões do menu e FAQ com `aria-expanded`.
- Modal com `role="dialog"` e `aria-modal`.
- Foco visível com `:focus-visible`.
- Navegação por teclado para fechar o modal com `Esc`.

## O que eu faria diferente com mais tempo

- Conferiria cada espaçamento diretamente no arquivo original do Figma, item por item.
- Faria testes visuais lado a lado em todos os breakpoints.
- Otimizaria ainda mais os assets convertendo imagens grandes para WebP/AVIF mantendo a qualidade visual.
- Integraria o botão de compra ao checkout real da empresa, caso a URL/API fosse disponibilizada.
- Faria testes adicionais de acessibilidade e navegação por teclado.

## Git

O trabalho deve manter commits separados para mostrar a evolução. Sugestão de histórico:

```text
chore: inicia estrutura do projeto
feat: cria estrutura da pagina de vendas
feat: adiciona responsividade e estilos
feat: adiciona interacoes e acessibilidade
docs: adiciona diagnostico e README
```

Última revisão: as imagens raster principais foram convertidas para WebP; os SVGs originais foram mantidos.
