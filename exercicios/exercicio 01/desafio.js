// 1 - Função que adiciona a propriedade isAdult
function addIsAdult(person) {
  return {
    ...person,
    isAdult: person.age >= 18
  };
}

// Exemplo de uso:
const person = { name: 'João', age: 20 };
const updatedPerson = addIsAdult(person);
console.log(updatedPerson); // { name: 'João', age: 20, isAdult: true }

// 2 - Função que combina múltiplos arrays usando rest e spread
function combineArrays(...arrays) {
  return [].concat(...arrays);
}

// Exemplo de uso:
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const combined = combineArrays(arr1, arr2, arr3);
console.log(combined); // [1, 2, 3, 4, 5, 6]