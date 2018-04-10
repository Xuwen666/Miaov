/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-11 10:57:22
 * @version $Id$
 */

window.onload=function()
{
	var btn=document.querySelector('input');
	var ul=document.querySelector('ul');
	var str='';
	var arrBg=['red','blue','green','greenyellow'];
	var num=0;


	btn.onclick=function()
	{
		for(var i=0;i<100;i++)
		{
			str+='<li style="background-color: '+arrBg[i%arrBg.length]+';left:'+(i%10*55)+'px;top: '+(Math.floor(i/10)*55)+'px">'+i+'</li>';
		}
		ul.innerHTML=str;
	}
	
}