/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-11 16:18:18
 * @version $Id$
 */

window.onload=function()
{
	var len=90;
	var box=document.querySelector('.box');
	var str='';
	for(var i=0;i<len;i++)
	{
		var left=(i%10)*55+'px';
		var top=Math.floor(i/10)*55+'px';
		var Bgleft=-(i%10)*50+'px';
		var Bgtop=-Math.floor(i/10)*50+'px';
		str+='<div style="background:url(img/3-5.jpg)'+(Bgleft)+' '+(Bgtop)+' ; ;left: '+left+';top: '+top+'"></div>';
	}
	box.innerHTML=str;
	
	var div=document.querySelectorAll('.box div') ;
	for(var i=0;i<div.length;i++)
	{	
		div[i].onmouseover=function()
		{
			this.style.opacity='1';
			this.style.transform = 'scale(1.4)';
		}
		div[i].onmouseout=function()
		{
			
			this.style.transform = 'scale(1)';
		}
	}
}