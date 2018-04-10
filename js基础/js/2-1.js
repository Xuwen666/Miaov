/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-11 10:40:50
 * @version $Id$
 */

window.onload=function()
{
	var btn=document.querySelector('input');
	var ul=document.querySelector('ul');
	var arrBg=['red','greenyellow','yellow'];
	var str='';

	btn.onclick=function()
	{
		for(var i=0;i<10;i++){
		str+='<li style="background-color: '+arrBg[i%arrBg.length]+'; ">'+i+'</li>';
		}
		ul.innerHTML=str;
	}
	
}