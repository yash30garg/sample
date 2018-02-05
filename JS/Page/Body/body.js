import {div} from '../../index.js';
var body;
export default body =()=>
{
    var divb=document.createElement(`DIV`);
    var divbut=document.createElement("DIV");
    divbut.innerHTML="<button id=add onclick=addNewElement()> ADD</button>";
    divb.appendChild(divbut);
    
    div.appendChild(divb);
    
      
    
}