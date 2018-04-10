/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-11 22:58:25
 * @version $Id$
 */

window.onload=function()
{
	var abtn=document.querySelectorAll('button');
	var oImg=document.querySelector('img');
	var ali=document.querySelectorAll('li');
	var arrImg=['img/r1.jpg','img/r2.jpg','img/r3.jpg'];
	var num=3;
	var flag=true;

	// 封装清空所有li的class样式
	function removeLi()
	{
		for(var i=0;i<ali.length;i++)
		{
			ali[i].className='';
		}
	}
	// 清除buuton样式
	function butooncl()
	{
		for(var i=0;i<abtn.length;i++)
		{
			abtn[i].className='';
		}
	}

	// 封装交叉走函数
	function jiaocha()
	{

		ali[num].className='active';
		ali[ali.length-1-num].className='active';
		
		if(num<3)
		{
			oImg.src=arrImg[num];
		}
		else
		{
			oImg.src=arrImg[ali.length-1-num];
		}
		
	}
	//封装同步走函数
	function tongbu()
	{
		if(num<3)
		{
			ali[num].className='active';
			ali[num+3].className='active';
		}
		else{
			ali[num].className='active';
			ali[num-3].className='active';
		}
		oImg.src=arrImg[num%3];
	}


	abtn[0].onclick=function()
	{
		
		if(flag)
		{
			removeLi();
			num++;
			num%=3;
			jiaocha();
		}
		else
		{
			removeLi();

			num++;
			num%=3;
			tongbu();
		}

	}
	abtn[1].onclick=function()
	{
		flag=true;
		butooncl();
		this.className='active';


	}
	abtn[2].onclick=function()
	{
		flag=false;
		removeLi();
		tongbu();
		butooncl();
		this.className='active';


	}

	for(var i=0;i<ali.length;i++)
	{
		ali[i].index=i;
		ali[i].onclick=function(){
			if(flag)
			{
				num=this.index;
				removeLi();
				jiaocha();
			}
			else
			{
				num=this.index;
				removeLi();
				tongbu();
			}
		}
	}
}