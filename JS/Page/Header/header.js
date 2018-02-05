import {div} from "../../index.js";
var header;
export default header =() =>
{
let divh=document.createElement(`DIV`);
let h1=document.createElement(`h1`);
//h1.append(document.createTextNode(`To Do App`));
h1.textContent=`To Do App`;
divh.appendChild(h1);
div.appendChild(divh);
}