# Diagnóstico — Etapa 1

Auditoria da página proposta na Etapa 1 do desafio.

## 1. Erro de JavaScript ao carregar os links dos kits

- **O que está errado:** o console apresenta `Uncaught TypeError: Cannot read properties of null (reading 'split')`.
- **Onde:** `main.js`, na função que trata os links dentro de `.area-kits`.
- **Causa provável/raiz:** um dos elementos `<a>` não possui `href`. `getAttribute("href")` retorna `null` e o código tenta executar `.split("?")` nesse valor.
- **Correção proposta:** validar o `href` antes de manipular a URL e garantir que todos os links de compra tenham destino válido.
- **Severidade:** **Critical**, porque gera erro de JavaScript e pode impedir o restante do processamento daquele bloco.

## 2. Botões de compra levam para página 404

- **O que está errado:** ao clicar nos botões de compra dos kits, a navegação retorna uma página `404 Not Found`.
- **Onde:** links dos cards de oferta na área de kits.
- **Causa provável/raiz:** os `href` observados no HTML apontam para destinos que não existem no ambiente testado, como `linkoffer` e `linkoffer3`.
- **Correção proposta:** substituir pelos URLs reais de checkout/oferta e validar todos os destinos.
- **Severidade:** **Critical**, porque impede a conclusão da ação principal da página de vendas.

## 3. Card do kit ultrapassa a largura da tela em 360px

- **O que está errado:** o card BASIC medido no navegador ficou aproximadamente com 393,8px de largura em uma viewport de 360px.
- **Onde:** área dos kits/ofertas.
- **Causa provável/raiz:** largura fixa do card/container maior que a viewport e falta de ajuste adequado no breakpoint mobile.
- **Correção proposta:** usar larguras relativas, `max-width: 100%`, `box-sizing: border-box` e regras específicas para telas pequenas.
- **Severidade:** **Critical**, porque causa conteúdo cortado/overflow horizontal em um breakpoint exigido no desafio.

## 4. Texto da seção Sobre apresenta contraste ruim

- **O que está errado:** parte do texto fica com baixa legibilidade sobre o fundo.
- **Onde:** seção “About Product / What Is Tenurima?”.
- **Causa provável/raiz:** combinação de cor de texto e fundo com contraste insuficiente.
- **Correção proposta:** ajustar a cor do texto e, se necessário, o fundo para aumentar o contraste sem perder o visual do layout.
- **Severidade:** **Medium**, porque prejudica a leitura, mas não impede a navegação.

## 5. Número da avaliação possui baixa legibilidade

- **O que está errado:** o número da avaliação aparece com pouca diferenciação do fundo em um dos tamanhos testados.
- **Onde:** área de rating.
- **Causa provável/raiz:** escolha de cor/contraste inadequada para o fundo da seção.
- **Correção proposta:** ajustar a cor para manter contraste suficiente com o fundo.
- **Severidade:** **Medium**, porque afeta a leitura de uma informação importante, mas não bloqueia a página.

## 6. Texto da seção de benefícios apresenta contraste ruim

- **O que está errado:** alguns textos dos benefícios ficam difíceis de ler.
- **Onde:** seção “Why Thousands Choose Tenurima™”.
- **Causa provável/raiz:** cor do texto próxima da cor do fundo.
- **Correção proposta:** usar uma cor com contraste maior e manter as cores de destaque apenas nos ícones/elementos que precisam de destaque.
- **Severidade:** **Medium**.

## 7. Link “Contact Page” possui contraste ruim

- **O que está errado:** o link da área de garantia fica pouco visível em relação ao fundo.
- **Onde:** seção de garantia da página analisada.
- **Causa provável/raiz:** cor do link não possui contraste suficiente com o fundo.
- **Correção proposta:** usar uma cor clara e manter o sublinhado para indicar que é um link.
- **Severidade:** **Medium**.

## Suspeita — rolagem automática ao alterar o tamanho da viewport

Durante os testes foi observado um comportamento de mudança/rolagem da página ao alterar a resolução. Não foi possível confirmar a causa diretamente no código analisado.

- **Severidade:** **Low** enquanto não houver reprodução consistente.
- **Próximo teste:** repetir em navegador limpo, com cache desativado e em diferentes larguras para verificar se o comportamento é reproduzível.

## Outras observações

- Alguns recursos externos podem ser bloqueados por extensões, políticas de privacidade ou pelo navegador. Isso não foi tratado como um dos sete erros principais sem confirmação de que o problema pertence ao site.
- O bloco de JavaScript do acordeão de FAQ observado na auditoria estava comentado. Isso foi registrado como observação e não como erro confirmado, pois seria necessário verificar o comportamento final da página.
