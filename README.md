# PowerSupps - E-commerce de Suplementos

Uma aplicação React moderna e responsiva para exibição de produtos de suplementos alimentares, desenvolvida com Vite e CSS Modules.

## Características

- **Grid Responsivo**: Layout adaptável com 1 coluna (mobile), 2 colunas (tablet) e 3 colunas (desktop)
- **Cards de Produto**: Cada produto exibe imagem, nome, preço antigo (se aplicável), preço atual e selo de desconto
- **Identidade Visual**: Cores da marca - Preto (#000000), Vermelho (#D32F2F) e Branco
- **Efeitos Hover**: Animações suaves nos cards e botões para melhor UX
- **Links Externos**: Botões "COMPRAR" que redirecionam para URLs externas com segurança
- **Imagens de Stock**: Utiliza imagens do Pexels para demonstração

## Estrutura do Projeto

```
src/
├── components/
│   ├── ProductCard.jsx          # Componente de card individual
│   ├── ProductCard.module.css   # Estilos do card
│   ├── ProductList.jsx          # Lista de produtos
│   └── ProductList.module.css   # Estilos da lista
├── data/
│   └── products.js              # Dados dos produtos
├── App.jsx                      # Componente principal
├── App.css                      # Reset CSS
├── index.css                    # Estilos globais
└── main.jsx                     # Ponto de entrada
```

## Tecnologias

- React 18
- Vite
- CSS Modules
- Google Fonts (Montserrat)

## Funcionalidades

- 9 produtos de suplementos pré-cadastrados
- Badges de desconto dinâmicos
- Preços formatados em Real (R$)
- Responsividade completa
- Otimização de imagens com lazy loading
- Links seguros com `rel="noopener noreferrer"`

## Personalização

### Adicionar Produtos

Edite o arquivo `src/data/products.js` e adicione novos objetos ao array:

```javascript
{
  id: 10,
  name: "Nome do Produto",
  image: "url-da-imagem.jpg",
  oldPrice: 99.90,
  price: 79.90,
  discount: 20,
  url: "https://seusite.com/produto"
}
```

### Cores da Marca

As cores podem ser alteradas nos arquivos CSS Module:
- Primária (Preto): `#000000`
- Acento (Vermelho): `#D32F2F`
- Texto: `#fff` / `#888` / `#aaa`
