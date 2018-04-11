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
		
		第一次执行自身往下掉,当前div的上一个兄弟节点 或者下一个兄弟节点要赋值给当前这个变量用于下一次判断是否有dom元素


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
	var flag=true;   /*控制方向*/
	var onoff=true;  /*控制执行完成以后在触发*/
	for(var i=0;i<div.length;i++){
		div[i].onclick=function(){
			if(!onoff){ return;};
			onoff=false;
			console.log(onoff)
			var num=0;
			var This=this;
			var prev=This;
			var next=This;
			
			timer=setInterval(function(){
				console.log(onoff)
				if(prev){
					doMove(prev,'top',8,flag?400:0);
					prev=prev.nextElementSibling;
									
				}
				if (next) {
					doMove(next,'top',8,flag?400:0);
					next=next.previousElementSibling;
				}
				if (!prev&&!next) {			
					flag=!flag;
					onoff=true;
					console.log(onoff)
					clearInterval(timer);

				}
				
						
			},100)
				

			
		}
	}
}