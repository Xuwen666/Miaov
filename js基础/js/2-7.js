/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-11 17:11:32
 * @version $Id$
 */

window.onload=function()
{
	var li=document.querySelectorAll('li');

	for(var i=0;i<li.length;i++)
	{
		li[i].onmouseover=function()
		{
			this.querySelector('div').style.display='block';
		}
		li[i].onmouseout=function(){
			this.querySelector('div').style.display='none';
		}
	}
}