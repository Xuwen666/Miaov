/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-11 18:03:44
 * @version $Id$
 */

window.onload=function()
{
	var ul=document.querySelector('ul');
	var str='';

	for(var i=0;i<8;i++)
	{
		for(var j=0;j<22;j++)
		{
			str+='<li style="top:'+i*55+'px ;left:'+j*55+'px "></li>';
		}
	}
	ul.innerHTML=str;
}
