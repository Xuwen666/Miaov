/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-19 22:15:35
 * @version $Id$
 */


// 技术摘要 给按钮div设置层级盖住ul
// 给ul设置内上填充 按钮pistion:absolut list列表relative
window.onload=function(){
	var btn=document.querySelectorAll('.btn');

	for(var i=0;i<btn.length;i++){
		btn[i].onmouseover=function(){
			this.style.backgroundColor = 'rgb(231,239,239)';
		}
		btn[i].onmouseout=function(){
			this.style.backgroundColor = '#EFEFE7';
		}
	}


	function getStyle(obj, attr){
				return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
			}
	var timer=null;
	var list=document.querySelector('.list');
	btn[0].onmousedown=function(){
		timer=setInterval(function(){
			if(parseFloat(getStyle(list,'top'))>-180){
				list.style.top=parseFloat(getStyle(list,'top'))-10+'px';
			}
			else{

				clearInterval(timer);
			}
		},100)
		
	}
	btn[0].onmouseup=function(){
		clearInterval(timer);
	}

	btn[1].onmousedown=function(){
		timer=setInterval(function(){
			if(parseFloat(getStyle(list,'top'))<0){
				list.style.top=parseFloat(getStyle(list,'top'))+10+'px';
			}
			else{
				clearInterval(timer);
			}
		},100)
	}

	btn[1].onmouseup=function(){
		clearInterval(timer);
	}
}	

