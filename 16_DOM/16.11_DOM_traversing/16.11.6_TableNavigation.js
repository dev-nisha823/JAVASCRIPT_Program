// Table Links
// certain DOM elements may provide additional properties specific to their type for convenience. 
// Table element support the following properties:

/*
table.rows  ->  collection oftr elements
table.caption  ->  reference to caption <caption></caption>
table.tHead -> reference to <thead></thead>
table.tFoot -> reference to <tfoot>
table.tBodies -> collection of <tbody> elements
tbody.rows -> collection of <tr> inside

tr.cells  -> collection of td and th
tr.sectionRowIndex -> index of tr inside enclosing element
tr.rowIndex -> row number starting from 0

td.cellIndex -> number of cells inside enclosing <tr>
*/ 

// Quick Quiz : 


const table = document.body.firstElementChild;
console.log(table.rows);  // return all the rows of table -> HTMLCollection(9) [tr, tr, tr, tr, tr, tr, tr, tr, tr]
console.log(table.caption); // <caption>Table of seminar</caption>
console.log(table.tHead.firstElementChild); // return the firstelement child of thead tag
console.log(table.tFoot); // null bcz there is no tfoot in the table
console.log(table.tBodies);
console.log(table.rows.cells);
 
