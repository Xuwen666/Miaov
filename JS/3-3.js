/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-12 18:06:49
 * @version $Id$
 */

window.onload=function(){
	var btn=document.querySelectorAll('input');
	var left=document.querySelector('.box .left');
	var right=document.querySelector('.right');
	var Limg=document.querySelector('.left img');
	var Rimg=document.querySelector('.right img');
	var LarrImg=['img/pic1.jpg','img/pic2.jpg','img/pic3.jpg','img/pic4.jpg','img/pic5.jpg'];
	var RarrImg=['img/pic1.jpg','img/pic2.jpg','img/pic3.jpg'];
	var Lnum=0;
	var Rnum=0;
	console.log(left)
	LpicImg();
	RpicImg();
	// 左侧图片组封装函数
	function LpicImg()
	{
		Limg.src=LarrImg[Lnum];
		left.getElementsByTagName('p')[1].getElementsByTagName('span')[0].innerHTML=left.getElementsByTagName('p')[0].getElementsByTagName('span')[0].innerHTML=Lnum+1;
		left.getElementsByTagName('p')[1].getElementsByTagName('span')[1].innerHTML=LarrImg.length;
	}

	// 右侧图片组封装函数
	function RpicImg(){
		Rimg.src=LarrImg[Rnum];
		right.getElementsByTagName('p')[1].getElementsByTagName('span')[0].innerHTML=left.getElementsByTagName('p')[0].getElementsByTagName('span')[0].innerHTML=Rnum+1;
		right.getElementsByTagName('p')[1].getElementsByTagName('span')[1].innerHTML=RarrImg.length;
	}

	Limg.onclick=function(){
		Lnum++;
		if(Lnum>LarrImg.length-1){
			Lnum=0;
		}
		LpicImg();
	}
	Rimg.onclick=function(){
		Rnum++;
		if(Rnum>RarrImg.length-1){
			Rnum=0;
		}
		RpicImg();
	}

	btn[0].onclick=function()
	{
		Lnum--;
		Rnum--;
		if(Lnum<0)
		{
			Lnum=LarrImg.length-1;
		}
		if(Rnum<0)
		{
			Rnum=RarrImg.length-1
		}
		LpicImg();
		RpicImg();
	}
	btn[1].onclick=function()
	{
		Lnum++;
		Rnum++;
		if(Lnum>LarrImg.length-1)
		{
			Lnum=0;
		}
		if(Rnum>RarrImg.length-1)
		{
			Rnum=0;
		}
		LpicImg();
		RpicImg();
	}
}