var names=document.getElementsByTagName("li");
var list=Array.from(names);
list.forEach(function(items){
  console.log(items);
});

Array.from(document.querySelectorAll(".name")).forEach(function(item){
    console.log(item);
});