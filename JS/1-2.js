/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-11 10:13:08
 * @version $Id$
 */

window.onload=function()
{
	var dialogue=document.querySelector('.dialogue');
	var oImg=document.querySelector('.keyboard img');
	var input=document.querySelector('.keyboard input');
	var button=document.querySelector('.keyboard button');
	var arrImg=['img/expression2.png','img/expression1.png'];
	var flag=true;

	oImg.onclick=function()
	{
		if(flag)
		{
			oImg.src=arrImg[0];
		}
		else {
			oImg.src=arrImg[1];
		}
		flag=!flag;
	}
	// 图片来回切换实现
	// 
	
	console.log(flag)
	button.onclick=function()
	{
		if(!input.value)
		{
			alert('写点什么把兄弟');

			return;
		}
		if(flag)
		{
			dialogue.innerHTML+='<p class="right"><span>'+input.value+'</span><img src="img/expression1.png"></p>';
			input.value='';
		}
		else {
			dialogue.innerHTML+='<p class="left"><img src="img/expression2.png" alt=""><span>'+input.value+'</span></p>';
			input.value='';
		}
	}

}