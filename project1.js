var ulElement=document.querySelector("ul#items");
var formElement=document.querySelector("#addForm");
var deleteBtnElement=document.querySelector(".list-group");
var filterElement=document.querySelector("#filter");

//add elements function
function addelements(e){
    e.preventDefault();
     li=document.createElement("li");
    btn=document.createElement("button")
    
    //Add classes to li
    li.classList.add("list-group-item")
   
    //Add classes to button
    btn.classList.add("btn");
    btn.classList.add("btn-danger");
    btn.classList.add("btn-sm");
    btn.classList.add("float-right");
    btn.classList.add("delete");
    
    //add text to button and li
    btn.textContent="X";
    li.textContent=document.querySelector("#addForm input[type=text]").value+" ";
    
    //append child
    ulElement.appendChild(li);
    li.appendChild(btn);
}


formElement.addEventListener("submit",addelements);



//delete elements function

function deleteelements(e)
{
   if(e.target.className="btn")//checks if clasname is btn
       {
           li=e.target.parentElement;
           e.target.parentElement.parentElement.removeChild(li);
           
       }
}

deleteBtnElement.addEventListener("click",deleteelements);


//filter items
function filteritems()
{
    //take value of the search box
    filterElement.value.toLowerCase();
    
   Array.from(ulElement,function(items){
       console.log(items);
   })
    
}

filterElement.addEventListener("keyup",filteritems);

