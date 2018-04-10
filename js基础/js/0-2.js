/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-10 23:33:33
 * @version $Id$
 */

/*
	需求:默认是循环播放
		 1.点击右边按钮图片下一张(当没有下一张的时候返回第一张),左边按钮图片上一张(当没有上一张的时候返回最后一张)
		 2.点击顺序播放
		 3.点击右边按钮图片一下张(当没有下一张的时候弹出提示框),左边按钮图片上一张(当没有上一张的时候弹出提示框)


	解决方案: 设置一个开关为true 默认为true
			  1.封装一个函数,设置一个变量num 随着num值的变换改变对应的图片等(图片等存入数组当中) 
			  2开关设置为false
			  3 判断当前的开关是true 还是false(只有当num>数组的长度-1的是才进行判断)   具体差异可看 59行  78行

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
	

			if(num>arrImg.length-1)
			{
				if(flg==true){
					num=0;
				}
				else{
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
