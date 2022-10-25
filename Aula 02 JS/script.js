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

console.log('----------------------------------------------------')
// o que são objetos 
// como declara um objeto 
let object = {propriedade1: 'valor1', propriedade2: 'valor2'};
// deve ser declarado entre chaves {} 
console.log(object);

// assim como arrays as propriedades de objetos também podem guardar quaisquer valores
let object2 = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ['array'],
    objectInterno: {objetoInterno: 'objetoInterno'}};

//como acessar propriedades de objetos 
//usando o ponto "."
console.log(object2.objectInterno);

// desestruturando objeto
let string = object2.string;
let number = object2.number; 
let boolean = object2.boolean;
console.log(string, number, boolean);