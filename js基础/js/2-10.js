/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-11 23:55:57
 * @version $Id$
 */

window.onload=function()
{
	var btn=document.querySelectorAll('input');
	var box=document.querySelector('.box');
	var str='';
	var arrImg=['img/3-1.png','img/3-2.png','img/3-3.png','img/3-4.png','img/3-5.jpg'];
	var num=0;
	for(var i=0;i<18;i++)
	{
		str+='<img src="'+arrImg[i%5]+'" style="top: '+(Math.floor(i/7)*110)+'px;left:'+((i%7)*110)+'px ;">';

	}
	console.log(str)
	box.innerHTML=str;

	// 自动生成18个图片

	var aimg=document.getElementsByTagName('img');
	for(var i=0;i<aimg.length;i++)
	{
		aimg[i].onmouseover=function()
		{
			this.style.transform = 'scale(1.2)';
		}
		aimg[i].onmouseout=function()
		{
			this.style.transform = 'scale(1)';
		}
	}

	// 移入移出放大缩小效果

	btn[0].onclick=function()
	{
		clarImg();
		box.innerHTML+='<img src="'+arrImg[num%5]+'" style="top: '+(Math.floor(i/7)*110)+'px;left:'+((i%7)*110)+'px ;">';
		i++;
		num++;
	}
	// 创建一张图片
	// 
	
	function clarImg()
	{
		for(var i=0;i<aimg.length;i++)
		{
			aimg[i].className='';
		}
	}
	// 封装所有图片样式清空函数

	btn[1].onclick=function()	
	{
		clarImg();
		for(var i=0;i<aimg.length;i++)
		{
			if(i%2!=0)
			{
				aimg[i].className='active';
			}
			
		}
	}
	// 奇数 
	
	btn[2].onclick=function()
	{
		clarImg();
		for(var i=0;i<aimg.length;i++){
			if(i%2==0)
			{
				aimg[i].className='active';
			}
		}
	}
	// 偶数
	
	btn[3].onclick=function()
	{
		clarImg();
		for(var i=0;i<aimg.length;i++)
		{
			if(Math.floor(i/7)%2!=0){
				aimg[i].className='active';
			}
		}
	}


	btn[4].onclick=function()
	{
		clarImg();
		for(var i=0;i<aimg.length;i++)
		{
			if(Math.floor(i/7)%2==0){
				aimg[i].className='active';
			}
		}
	}

	btn[5].onclick=function(){
		clarImg();
		for(var i=0;i<aimg.length;i++){
			if(i%7%2!=0){
				aimg[i].className='active';
			}
		}
	}

	btn[6].onclick=function(){
		clarImg();
		for(var i=0;i<aimg.length;i++){
			if(i%7%2==0){
				aimg[i].className='active';
			}
		}
	}
}