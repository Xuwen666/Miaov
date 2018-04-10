/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-11 11:20:20
 * @version $Id$
 */

window.onload=function()
{
	var btn=document.querySelector('input');
	var ul=document.querySelector('ul');
	var str='';

	for(var i=0;i<5;i++)
	{
		var left=i*55+'px';
		if(i<3)
		{
			var top=i*55+'px';
		}
		else
		{
			var top=(4-i)*55+'px';
		}
		str+='<li style="top: '+top+' ;left:'+left+';">'+i+'</li>';
	}
	ul.innerHTML=str;
	
}