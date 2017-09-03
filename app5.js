const ol=document.querySelector(".list-name");
const btn=document.querySelector("#add1");
btn.addEventListener('submit',function(e){
    e.preventDefault();
    console.log("default behaviour prevented");
    var textvalue=document.querySelector("input[type='text']").value;
    //console.log(textvalue);
    
    //create element
    var li=document.createElement("li");
    var span=document.createElement("span");
    var button=document.createElement("button");
    
   //add text to li and delete
    li.textContent=textvalue;
    button.textContent="delete";
    
    //append ol with li and li with delete
   li.appendChild(span);
   li.appendChild(button);
   ol.appendChild(li);
    
})