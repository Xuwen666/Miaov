/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-23 11:24:54
 * @version $Id$
 */

/*
	功能点:自动展开所有li  点击最后一个li所有li的rotate(0)
	给所有li绑定索引值,点击当前的lirotate(270deg), 
	判断当前this的前面的兄弟节点进行位置调整,
	判断当前this后面的兄弟节点进行位置调整
	有两种思路第一种是根据当前的索引值判断所有的i比他小的就是前面的兄弟节点
	判断所有的i值比他大的就是后面的兄弟节点
	第二种思路用当前节点的dom元素与父级下所有的dom元素做比较
	不相等的话就是前面的兄弟节点,相等的话就return出来
	如果要找到当前节点的后面兄弟节点就要设置一个变量一开始为false
	当for找到this,就将变量设置为true,下面就判断如果变量为true的话
	就是后面的兄弟节点
	
	当前this.index 位置为270tdeg
	算出他的差值.用当前270位置减去 this.index原本的位置
	然后用for循环在每个div原本的位置上加上差值






 */
window.onload=function(){


	var ali=document.querySelectorAll('.rotate li');
	var onoff=true; /*设置开关*/
	setTimeout(go,500);

	ali[ali.length-1].onclick=function(){
		if(onoff){
			start();
		}
		else {
			go();
		}
		onoff=!onoff; 
	}

	/*
		207 270 63
		241 270 29
		258 270 12
		
	 */
	for(var i=0;i<ali.length-1;i++){
		ali[i].index=i;
		ali[i].onclick=function(){
			this.style.transform='rotate(270deg)';
			var py=270-(360-(this.index*17));
			console.log(py)
			for(var i=0;i<ali.length;i++){
				var now=(360-i*17)+py;
			
				if(i<this.index){
					ali[i].style.transform="rotate("+(now+8)+"deg)";
				}
				if(i>this.index){
					ali[i].style.transform="rotate("+(now-8)+"deg)";
				}
			}
			
		}
	}




	
	/* 封装展开函数*/
	function go(){
		for(var i=0;i<ali.length;i++){
			ali[i].style.transform="rotate("+(360-i*17)+"deg)";
		}
	}

	/*封装闭合函数*/
	function start(){
		for(var i=0;i<ali.length;i++){
			ali[i].style.transform="rotate(0deg)";
		}
	}
}
