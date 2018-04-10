/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-10 19:08:16
 * @version $Id$
 */

window.onload=function()
{
	var obtn=document.querySelector('.box input');
	var osquare=document.querySelector('.box .square');
	var omask=document.querySelector('.mask');

	obtn.onclick=function()
	{
		omask.style.display='block';
	}

	var abg=document.querySelectorAll('.bg span');
	var aWdi=document.querySelectorAll('.Wdi span');
	var aHe=document.querySelectorAll('.He span');


	// 封装变换颜色函数
	function Bg(bgcolor)
	{
		osquare.style.backgroundColor = bgcolor;
	}
	abg[0].onclick=function()
	{
		Bg('red');
	}
	abg[1].onclick=function()
	{
		Bg('yellow');
	}
	abg[2].onclick=function()
	{
		Bg('green');
	}

	//封装宽度高度变换
	function Wdd(whd,valu)
	{
		console.log(valu)
		osquare.style[whd]=valu+"px";
	}
	aWdi[0].onclick=function()
	{
		Wdd('width','200');
	}
	aWdi[1].onclick=function()
	{
		Wdd('width','300');
	}
	aWdi[2].onclick=function()
	{
		Wdd('width','400');
	}
	aHe[0].onclick=function()
	{
		Wdd('height','200');
	}
	aHe[1].onclick=function()
	{
		Wdd('height','300');
	}
	aHe[2].onclick=function()
	{
		Wdd('height','400');
	}


	var obtn=document.querySelectorAll('.btn input');

	obtn[0].onclick=function()
	{
		Wdd('width',100);
		Wdd('height',100);
		Bg('white');
	}
	obtn[1].onclick=function()
	{
		omask.style.display='none';
	}
}