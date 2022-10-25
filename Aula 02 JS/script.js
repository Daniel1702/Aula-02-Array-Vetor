// o que são vetores ou arrays 

// como declarar um array 
let array = ['string', 1, true];
// deve ser declarado entre colchetes "[]"
console.log(array);

// como um array pode guardar diferentes valores inclusive
// outros arrays 
// ex: let array = ['string', 1, true, ['array1'],['array2']];
// como acessar o índice de um array 
console.log(array[0]);

// manipulando um array 

// forEach - realize uma função para item do array 
array.forEach(function(item,index){console.log(item, index);});

// push - add item no final da array 
array.push('novo item');
console.log(array);

// pop - remove o último item do array  
array.pop();
console.log(array);

// shift - remove o primeiro item do array 
array.shift()
console.log(array); 

// unshift - add item no inicio do array 
array.unshift('novo item');
console.log(array);

// indexOF - retorna o índice de um item do array
console.log(array.indexOf(true));

// splice - remove ou substitui um item por índice 
//array.splice(0, 2);
//console.log(array);

// slice - retorna parte de um array existente 
let novoArray = array.slice(0, 2);
console.log(novoArray);