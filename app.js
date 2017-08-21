var names=document.getElementsByTagName("li");
var list=Array.from(names);
list.forEach(function(items){
  console.log(items);
});

/*Array.from(document.querySelectorAll(".name")).forEach(function(item){
    console.log(item);
});*/

/*loop through*/
/*document.querySelectorAll(".name").forEach(function(item){
	console.log(item);
});*/

/*get text content */

/*
document.querySelectorAll(".name").forEach(function(item){
	console.log(item.textContent);
});
*/

/*change text content*/

/*document.querySelectorAll(".name").forEach(function(item){
	item.textContent="test";
});*/

/*append textcontent*/

/*document.querySelectorAll(".name").forEach(function(item){
	item.textContent=item.textContent+"test";
});*/

/*change html+append html */
const data=document.querySelector('.name')
data.innerHTML="<h2>Soumya</h2>"
data.innerHTML+="<h2>Suman</h2>"
