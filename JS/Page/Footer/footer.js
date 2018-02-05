import {div} from '../../index.js';
var footer;
export default footer =()=>
{

let divf=document.createElement(`DIV`);
let f1=document.createElement(`footer`);
//f1.append(document.createTextNode(`CopyRights 2017`));
f1.textContent=`CopyRights 2017`;

divf.appendChild(f1);
div.appendChild(divf);
}