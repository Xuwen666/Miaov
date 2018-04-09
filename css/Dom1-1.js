/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-07 17:26:34
 * @version $Id$
 */
window.onload=function(){
	/*
	
	 需求 一.点击发送input里面的内容加到list里去
		  (p标签消失掉有两种实现方案
			1.p隐藏
			2.通过removeChild删除p标签
		  )
		二.li里面的em数值更li的值是对等的



	*/
alert(1)
	var btn=document.querySelector('.btn a');
	var input=document.querySelector('.input input');
	var list=document.querySelector('.list');
	console.log(btn)
	btn.onclick=function(){

		var text=input.value;
		if(!text){
			alert('您还没有输入内容，请输入您的留言~~~');
			return;
		}
	}
	
		
}