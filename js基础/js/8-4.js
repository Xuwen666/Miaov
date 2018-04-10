/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-21 22:25:54
 * @version $Id$
 */

window.onload=function(){
	var num=0;
	var flag=0;
	var nav=document.querySelectorAll('.nav li');
	var list=document.querySelectorAll('.list');
	var arrIMg=[
			['img/6-5-1.jpg','img/6-5-2.jpg','img/6-5-3.jpg'],
			['img/6-5-4.jpg','img/6-5-5.jpg','img/6-5-6.jpg']
		];
	// 封装图片滚动 根据num值++ 来进行判断当num>3的时候num重置为0  flag=1
	function pic(){
		num++;
		if(num===3){
			
			num=0;
			flag=flag==0?1:0;
			console.log(flag)
		}
		for(var i=0;i<nav.length;i++){
			nav[i].className='';
			list[i].style.display='none';
		}
		nav[flag].className='active';
		list[flag].style.display='block';
		var img=list[flag].querySelector('img');
		var li=list[flag].querySelectorAll('li');
		for(var i=0;i<li.length;i++){
			li[i].className='';
		}
		li[num].className='active';
		img.src=arrIMg[flag][num];
	}

	setInterval(pic,1000);
}