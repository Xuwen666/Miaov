/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-12 17:06:05
 * @version $Id$
 */

window.onload=function(){
	var oimg=document.querySelector('img');
	var aA=document.querySelectorAll('a');
	var arrImg=['img/3-1.png','img/3-2.png','img/3-3.png','img/3-4.png'];
	var num=0;
	var flag=true;
	var ali=document.querySelectorAll('li');


	// 图片切换 所有li样式清空 函数封装
	function picImg()
	{
		oimg.src=arrImg[num];
		for(var i=0;i<ali.length;i++)
		{
			ali[i].className='';
		}
		ali[num].className='active';
	}
	aA[0].onclick=function(){
		num--;
		if(num<0){
			num=arrImg.length-1;
		}
		picImg();
	}
	aA[1].onclick=function()
	{
		num++;
		if(num>arrImg.length-1){
			num=0;
		}
		picImg();

	}

	for(var i=0;i<ali.length;i++)
	{
		ali[i].index=i;
		ali[i].onclick=function(){
			num=this.index;
			picImg();
		}
		ali[i].onmouseover=function(){
			num=this.index;
			this.innerHTML='<img src="'+arrImg[num]+'" alt="">';
		}
		ali[i].onmouseout=function(){
			this.innerHTML='';
		}
	}
}