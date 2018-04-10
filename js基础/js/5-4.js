/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-17 11:51:37
 * @version $Id$
 */

window.onload=function(){
	var Lnav=document.querySelectorAll('.Lnav li');
	var img=document.querySelector('img');
	var arrImg=[
		['img/pic1.jpg','img/pic2.jpg','img/pic3.jpg'],
		['img/pic1.jpg','img/pic2.jpg','img/pic3.jpg','img/pic4.jpg'],
		['img/pic1.jpg','img/pic2.jpg','img/pic3.jpg','img/pic4.jpg','img/pic5.jpg'],
		['img/pic1.jpg','img/pic2.jpg','img/pic3.jpg','img/pic4.jpg'],
	];
	var num=0;
	var flag;
	var Div=document.querySelectorAll('.content div');
	console.log(Div)
	// 清除Lnav样式
	function claerNav(){
		for(var i=0;i<Lnav.length;i++){
			Lnav[i].className='';
			Div[i].style.display='none';
		}

	}
	

	for(var i=0;i<Lnav.length;i++){
		Lnav[i].index=i;
		Lnav[i].onclick=function(){
			flag=this.index;
			claerNav();
			this.className='active';
			Div[flag].style.display='block';
			Bnav(flag);
		}
	}
	Bnav(num);
	function Bnav(num)
	{
		console.log(num)
		var Bli=Div[num].querySelectorAll('li');
		var contentImg=Div[num].querySelector('img');
		console.log(contentImg)
		for(var i=0;i<Bli.length;i++){
			Bli[i].index=i;
			Bli[i].onclick=function(){
				clearBnav(Bli);
				this.className='active';
				contentImg.src=arrImg[num][this.index];
			}
		}
	}	

	// 清除Bnanv 样式
	function clearBnav(Bli){
		for(var i=0;i<Bli.length;i++){
			Bli[i].className='';
		}
	}

}