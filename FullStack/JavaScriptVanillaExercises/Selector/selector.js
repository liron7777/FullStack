/*!* ------------------------------------ get Element By (old) --------------------------------------------- *!*/
var get_element_by_id = document.getElementById('main_title')
console.log('get element by id:', get_element_by_id);

var get_element_by_class_name = document.getElementsByClassName('names')
console.log('get element by Class Name:', get_element_by_class_name);

var get_element_by_tag_name = document.getElementsByTagName('input')
console.log('get element by tag name:',get_element_by_tag_name);

var get_element_by_name = document.getElementsByName('names_title')
console.log('get element by tag name:',get_element_by_name);

/*!* ------------------------------------ query Selector (new) --------------------------------------------- *!*/
var selector_by_id = document.querySelector("#main_title")
console.log('query selector by id:', selector_by_id);

var selector_by_class = document.querySelector(".names")
console.log('query selector by class:', selector_by_class);

var selector_by_tag_name = document.querySelector("input")
console.log('query selector by tag name:', selector_by_tag_name);

var selectorall_by_tag_name = document.querySelectorAll("input")
console.log('query selector all by tag name:', selectorall_by_tag_name);

var selectores1 = document.querySelector(".names").querySelectorAll('div')
console.log('query selector selectores ex1:', selectores1);

var selecties2 = document.querySelector(".names > div:nth-child(3)")
console.log('query selector two selectores ex2:', selecties2);