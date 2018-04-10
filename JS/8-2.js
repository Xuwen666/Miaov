/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-20 22:07:40
 * @version $Id$
 */

window.onload=function(){
	var nav=document.querySelectorAll('.list li');
	var aul=document.querySelectorAll('.tabc ul');
	var Index;
	var timer=null;
	for(var i=0;i<nav.length-1;i++){
		nav[i].index=i;
		nav[i].onmouseover=function(){
			Index=this.index;
			clearInterval(timer);
			clearul();
			aul[Index].style.display='block';
		}

		nav[i].onmouseout=function(){
			Index=this.index;
			timer=setInterval(function(){
				aul[Index].style.display='none';
				
			},1000);
		}
		aul[i].onmouseover=function(){
			clearInterval(timer);
		}
		aul[i].onmouseout=function(){
			var This=this;
			timer=setInterval(function(){
				This.style.display='none';
				
			},1000);
		}
		
	}

	// 封装 清除所有ul函数
	function clearul(){
		for(var i=0;i<aul.length;i++){
			aul[i].style.display='none';
		}
	}
}