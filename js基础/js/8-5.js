/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-22 21:04:08
 * @version $Id$
 */

window.onload=function(){
	var prev=document.querySelector('.prev');
	var next=document.querySelector('.next');
	var aimg=document.querySelectorAll('.box img');
	var bg=document.querySelector('.bg');
	var text=document.querySelector('.text');
	var btn=document.querySelector('.text button');


	var num=0;
	var sgin=1;
	// 封装第一张图片到最上面
	function Imgone(){
		for(var i=0;i<aimg.length;i++){
			aimg[i].style.zIndex = aimg.length-i;
		}
	}
	Imgone();

	next.onclick=function(){
		
		sgin=1;
		Pic();		
	}
	prev.onclick=function(){
		sgin=-1;
		Pic();
	}
	btn.onclick=function(){
		bg.style.display=text.style.display='none';
		for(var i=0;i<aimg.length;i++){
			aimg[i].style.left=0;
			aimg[i].style.opacity='1';
		}
		num=0;
	}


	// 封装图片滑动  
	function Pic(){
		if(num<aimg.length-1){
			aimg[num].style.left=sgin*150+'px';
			aimg[num].style.opacity='0';
			num++;
		}
		else{
			fnReset();
		}
	}	

	// 封装显示弹窗
	
	function fnReset(){
		bg.style.display=text.style.display='block';
	}
	
}