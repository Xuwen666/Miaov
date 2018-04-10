/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-10 16:57:16
 * @version $Id$
 */

/*
	老规矩引入封装好的运动函数
	需求:
		自动生成10个div
		点击当前的div往下掉,他的上一个兄弟节点,下一个兄弟节点也往下掉
		那么下一次执行该怎么办?
		上一次的兄弟节点等于当前这个兄弟节点

		当没有兄弟节点return出去
		下一次执行该怎么班呢

 */


window.onload=function(){

	var str='';
	var len=10;
	var box=document.getElementById('box');
	for(var i=0;i<len;i++){
		str+='<div style="left:'+i*55+'px">'+i+'</div>';
	}
	box.innerHTML=str;

	var div=box.getElementsByTagName('div');
	for(var i=0;i<div.length;i++){
		div[i].onclick=function(){
			doMove(this,'top',8,400);
			var This=this;
			var prev=This.previousElementSibling;
			var next=This.nextElementSibling;
			
			setInterval(function(){

				doMove(prev,'top',8,400);
				prev=prev.previousElementSibling;
				doMove(next,'top',8,400);
				next=next.nextElementSibling;	
			},100)

			
		}
	}
}