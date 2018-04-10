/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-20 23:07:30
 * @version $Id$
 */

window.onload=function(){
	var ali=document.querySelectorAll('.box li');
	var oimg=document.querySelector('.box img');
	var aA=document.querySelectorAll('.box a');
	var arrimg=['img/6-3-1.png',
				'img/6-3-2.png',
				'img/6-3-3.png',
				'img/6-3-4.png',
				'img/6-3-5.png',
				'img/6-3-6.png',
				'img/6-3-7.png',
				'img/6-3-8.png',
				'img/6-3-9.png',
				'img/6-3-10.png',
				'img/6-3-11.png',
				'img/6-3-12.png',
				'img/6-3-13.png',
				'img/6-3-14.png'
				];
	var num=0;
	var timer=null;

	timer=setInterval(Pic,1000);

	// 封装切换图片函数
	function Pic(){
		
		if(num<ali.length/2){
			num++;
			if(num==ali.length/2){
				num = ali.length - 1;
			}
		}
		else{
			num--;
			if(num==ali.length/2-1){
				num=0;
			}
		}
		clearLi();
		oimg.src=arrimg[num];
	}


	// 循环所有box 下的li
	for(var i=0;i<ali.length;i++){
		ali[i].index=i;
		ali[i].onmouseover=function(){
			clearInterval(timer);
			num=this.index;
			clearLi();



			// num的值为鼠标移入时候的值
		/*	for(var i=0;i<ali.length;i++){
				ali[i].className='';
				aA[i].className='';
			}
			aA[this.index].className='active';
			ali[this.index].className='active';*/
		}
		ali[i].onmouseout=function(){

			timer=setInterval(Pic,1000);
			
		}
	}
	// 封装清除所有li样式 当前添加
	function clearLi(){
		for(var i=0;i<ali.length;i++){
			ali[i].className='';
			aA[i].className='';
		}
		aA[num].className='active';
		ali[num].className='active';
	}
}