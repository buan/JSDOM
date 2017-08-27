var nodetype=document.querySelector(".name");
console.log("Nodetype is:"+nodetype.nodeType);
console.log("Node element is:"+nodetype.nodeName);
console.log("Node element has child nodes:"+nodetype.hasChildNodes());

var nodetype1=document.querySelector(".list-name");
const clonedelement=nodetype1.cloneNode(true);//false
console.log(clonedelement);