var listname=document.querySelector(".list-name");
console.log("The parent node is"+listname.parentNode);//Shows parent node
console.log("The parent node is"+listname.parentElement);//shows parent Element
console.log("The parent node is"+listname.parentElement.parentElement);//shows parent Element of the Parent Element

console.log(listname.childNodes);//Returns child nodes from that element including line breaks

console.log(listname.children);//Returns all childnodes without text nodes


var listname=document.querySelector(".name");
console.log(listname.nextElementSibling)//Returns next element sibling

var listname=document.querySelector(".name:nth-child(2)");
console.log(listname.previousElementSibling);//Returns previous element sibling

listname.previousElementSibling.innerHTML+="<li class='name'>New Element</li>"