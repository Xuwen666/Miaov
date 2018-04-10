/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-12 16:11:02
 * @version $Id$
 */

window.onload=function()
{
	var ali=document.querySelectorAll('.box>li');

	for(var i=0;i<ali.length;i++)
	{
		Arrli(ali[i]);
	}
	// 循环每个h2
	
	function Arrli(li)
	{
		console.log(li)
		var h2=li.querySelector('h2');
		var ul=li.querySelector('ul');
		h2.onclick=function(){
			clearH2();
			ul.style.display='block';
			h2.className='active';
		}
		var ali=li.querySelectorAll('li');

		for(var i=0;i<ali.length;i++)
		{
			var flag=0;
			ali[i].index=i;
			ali[i].onclick=function()
			{
				if(this!=ali[flag])
				{
					ali[flag].className='';
				}
				if(this.className)
				{
					this.className='';
				}
				else {
					this.className='active';
				}
				flag=this.index;
			}
		}
	}

	function clearH2()
	{
		var ul=document.querySelectorAll('.box ul');
		var h2=document.querySelectorAll('h2');
		var aali=document.querySelectorAll('.box ul li');
		for(var i=0;i<ul.length;i++)
		{
			ul[i].style.display='none';
		}
		for(var i=0;i<h2.length;i++){
			h2[i].className='';
		}
		for(var i=0;i<aali.length;i++){
			aali[i].className='';
		}

	}
	// 清空h2样式以及ul样式函数封装


}