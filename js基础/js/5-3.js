/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-17 09:39:26
 * @version $Id$
 */

window.onload=function(){
	var nav=document.querySelectorAll('.nav li');
	var num;
	var aul=document.querySelectorAll('.list')
	for(var i=0;i<nav.length;i++){
		nav[i].index=i;
		nav[i].onclick=function(){
			num=this.index;
			clearnav();
			this.className='active';
			aul[num].style.display='block';
			picList(num);
		}
	}
	// 清除所有的nav li
	function clearnav(){
		for(var i=0;i<nav.length;i++){
			nav[i].className='';
			aul[i].style.display='none';
		}
	}
	picList(0)
	function picList(num){
		console.log(num)
		var li=aul[num].querySelectorAll('li');

		for(var i=0;i<li.length-1;i++){
			li[i].onmouseover=function(){
				console.log(this.children[1])
				this.children[1].style.display='none';
				this.children[2].style.display='block';
			}
				li[i].onmouseout=function(){
				console.log(this.children[1])
				this.children[1].style.display='block';
				this.children[2].style.display='none';
			}
		}
	}

}