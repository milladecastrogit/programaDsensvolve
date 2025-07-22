// 1 - Usando map para formatar "Nome do produto - Categoria"
const products = [
  { name: 'Notebook', category: 'Eletrônicos', price: 3000 },
  { name: 'Camiseta', category: 'Vestuário', price: 50 },
  { name: 'Livro', category: 'Educação', price: 40 }
];

const productDescriptions = products.map(p => `${p.name} - ${p.category}`);
console.log(productDescriptions);

// 2 - Usando map para adicionar 15% de imposto aos preços
const pricesWithTax = products.map(p => p.price * 1.15);
console.log(pricesWithTax);

// 3 - Usando forEach com acumulador externo para somar os preços
let totalPrice = 0;
products.forEach(p => {
  totalPrice += p.price;
});
console.log(totalPrice);