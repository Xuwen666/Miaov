/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-10 23:33:33
 * @version $Id$
 */

window.onload=function()
{
	var abtn=document.querySelectorAll('button');
	var oimg=document.querySelector('.content img');
	var arrImg=['img/3-1.png','img/3-2.png','img/3-3.png','img/3-4.png'];
	var arrText=['图片一','图片二','图片三','图片四'];
	var text=document.querySelector('.text');
	var img=document.querySelector('.img');
	var prev=document.querySelector('.prev');
	var next=document.querySelector('.next');
	var num=0;
	var flg=true;

	 picImg();
	 // 封装图片方法 num每点击依次++
	function picImg()
	{
		oimg.src=arrImg[num];
		text.innerHTML=num+1+'/'+arrImg.length;
		img.innerHTML=arrText[num];
	}

	abtn[0].onclick=function()
	{
		flg=true;
	}
	abtn[1].onclick=function()
	{
		flg=false;

	}
	next.onclick=function()
	{
		num++;
		if(flg==true)
		{
			if(num>arrImg.length-1)
			{
				num=0;
			}
		}
		else
		{
			if(num>arrImg.length-1)
			{
				alert('最后一张了');
				num=arrImg.length-1;
			}
		}
		picImg();
	}

	prev.onclick=function()
	{
		num--;
		if(flg==true)
		{
			if(num<0)
			{
				num=arrImg.length-1;
			}
		}
		else
		{
			if(num<0)
			{
				alert('第一张了');
				num=0;
			}
		}
		picImg();
	}
}
