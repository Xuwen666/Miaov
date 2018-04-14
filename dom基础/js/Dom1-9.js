/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-12 15:42:20
 * @version $Id$
 */


/*
		看需求是否需要前后端进行分离  如果需要前后分离的话需要从后端拿到josn类型的字符生成html结构
		需求:点击a标签 出现对应的div 每一列a标签只能出现一个 并且按每行li的顺序
		出现div的li直接在html中写死
		
		通过找到每个li 封装一个函数 传入每个li的dom元素以及数值
		找到对应的a标签加点击事件 当前隐藏其他显示 设置一个变量存当前点击的adom元素 给下一次使用
		获取到span的内容，创建一个div赋值,那么重点来了因为之前在html写死了三个li放div
		所以只要通过传入li的数值找到,并且添加,每次添加之前要清空li里面的内容


	 */

window.onload=function(){

	var list=document.querySelectorAll('.list');

	for(var i=0;i<list.length;i++){
		
	
		List(list[i],i);
	}
	var selectli=document.querySelectorAll('#select li');
	console.log(selectli);
	function List(li,n){	
		var a=li.querySelectorAll('a');
		var A;/*存一个值用于下一次显示*/

		for(var i=0;i<a.length;i++){
			a[i].onclick=function(){
				
				if(A){
					A.parentNode.style.display='block';	
				}
				this.parentNode.style.display='none';
				A=this;

				/*方案1设置一个变量用于存放上一次点击的值 判断这个变量是否有值*/


				/*
				方案2设置一个变量并且赋值A=a[0] 
				这种方案就不用判断因为变量一开始就是有值的具体代码如下
				 A.parentNode.style.display='block';
				 this.parentNode.style.display='none';
				 A=this;

				*/
				var span=this.parentNode.parentNode.previousElementSibling;
				console.log(span);

				selectli[n].innerHTML='<div><span>'+span.innerHTML+'</span><em>'+this.innerText+'</em><a href="javascript:;">X</a></div>';

				
				console.log(n)
				var dele=selectli[n].querySelector('a');
				console.log(dele)

				dele.onclick=function(){
					dele.parentNode.parentNode.innerHTML='';
					console.log(A)
					A.parentNode.style.display = 'block';
				}
			}

		}

	}
}