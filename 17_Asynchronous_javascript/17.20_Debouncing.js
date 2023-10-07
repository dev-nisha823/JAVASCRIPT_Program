/*
Debounce is useful when you want to ensure that 
a function is only executed once after a series of inputs.
This ia particularly helpful when dealing with user input events 
that may trigger multiple times in a short period 
such as a search bar or a button click.
Debouncing can help prevent unnecessary or redundant processing of these events or we can say that 
unnecessary network calls


whenever we are firing the function then the moment we stop at that time debouncing function will be called
debouncing used in when we search anything on any ecommerce website where until and unless we don't stop typing the debounce function will not be triggered


debounce method takes two parameter first is the function 
and doesn't make the function unecessary call again and again and will only make the call
when difference between two timing function call is greter than delay which is the 2nd parameter of debounce method


lazy loading, api call on scrolling, etc,.
*/ 