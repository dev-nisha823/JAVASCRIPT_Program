// element.attribute method to get the collection of all attributes

let div = document.querySelector("#element");
console.log(div.attributes); // NamedNodeMap {0: id, 1: hidden, id: id, hidden: hidden, length: 2}

// data- *attributes 
// we can always create custom attributes but the ones starting with "data-" are reserved for programmers use.
// they are available in a property named dataset
// if an element has an attribute name "data-one", its avaialable as element.dataset.one

const elementdiv = document.querySelector("#elementdiv");
console.log(elementdiv.dataset); // DOMStringMap {game: 'mario', player: 'nisha'}
console.log(elementdiv.dataset.game);
console.log(elementdiv.dataset.player);

