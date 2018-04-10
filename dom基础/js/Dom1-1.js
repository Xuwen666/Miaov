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

	
		第二种实现方式:每次生成li的同时向一个数组添加，删除的同时删除掉次数组中的数据(拓展会比较好一些)
						1.

	*/

	var btn=document.querySelector('.btn a');
	var input=document.querySelector('.input input');
	var list=document.querySelector('.list');
	
	console.log(btn)
	var num=1;
	
	btn.onclick=function(){
		var str=input.value
		if(!str){
			alert('您还没有输入内容，请输入您的留言~~~');
			return;
		}
		input.value=''; 
		
		list.innerHTML='<li class="clear"><em class="left">'+num+'</em><p class="left">'+str+'</p><div class="right"><a href="#">确定</a><a href="#">删除</a><span>第'+num+'条</span></div></li>'+list.innerHTML;
		var ali=document.querySelectorAll('.list li');
		var em=document.querySelectorAll('.list em');
		var p=document.querySelector('.list>p');
		console.log(p)
		var span=document.querySelectorAll('.right span');
		console.log(ali.length)
		if(ali.length>0){
			p.style.display='none';
		}
		for(var i=0;i<ali.length;i++){
			em[i].innerHTML=ali.length-i;
			var Num=ali.length-i;
			span[i].innerHTML='第'+Num.toString()+'条';    /*根据li的值增加而增加 减少而减少*/

			ali[i].onmouseover=function(){
				this.style.backgroundColor = '#ffaaaa';
				this.children[2].style.display='block';
				 removeLi(this);
				
			}
			ali[i].onmouseout=function(){
				this.style.backgroundColor = '';
				this.children[2].style.display='none';
			}

		}
	}
	
	function removeLi(li){
		var right=li.querySelector('.right');
		var removE=right.children[1];
		
		removE.onclick=function(){
			this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
			var ali=document.querySelectorAll('.list li');
			var em=document.querySelectorAll('.list em');
			var span=document.querySelectorAll('.right span');
			var p=document.querySelector('.list>p');
				if(ali.length===0){
	
					p.style.display='block';  
					return;
				}
			for(var i=0;i<ali.length;i++){
				console.log(ali.length-1)
			
			em[i].innerHTML=ali.length-i;
			var Num=ali.length-i;
			span[i].innerHTML='第'+Num.toString()+'条';    /*根据li的值增加而增加 减少而减少*/

			}

		}
	}
		
}