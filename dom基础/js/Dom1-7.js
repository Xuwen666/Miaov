/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-11 15:22:02
 * @version $Id$
 */



/*
	需求:点击第一层菜单展开第一层菜单，
	再次点击第一层菜单收缩 解决方案:给每一个li标签设置自定义oonoff开关  
	
	点击其他兄弟节所有同父级的兄弟节点隐藏，
	当前显示   敲黑板关键点是从当前点击的元素去找父级 子级 兄弟节点关键
 	


 */

window.onload=function(){
	
	var p=document.querySelectorAll('.list1 p');  /*获取到所有的p*/
	
	for(var i=0;i<p.length;i++){
		
		p[i].parentNode.onoff=true;
		p[i].onclick=function(){
			if(this.parentNode.onoff){
				this.nextElementSibling.style.display='block';  /*通过点击的p来找到兄弟节点ul 让他显示出来*/
				this.children[0].innerHTML='-';    /* 通过点击的p来找到他的子节点 i*/
				list(this);
			}
			else {
				this.nextElementSibling.style.display='none';  /*通过点击的p来找到兄弟节点ul 让他显示出来*/
				this.children[0].innerHTML='+';    /* 通过点击的p来找到他的子节点 i*/
			}
			
			this.parentNode.onoff=!this.parentNode.onoff;
		}
	}


	function list(This){
		console.log(This)  /*获取当前的this*/
		var ul=This.parentNode.parentNode;  /*获取当前点击p元素的父级的父级 ul  通过ul找到所有li 嘻嘻*/
		console.log(ul)
		var ali=ul.children;
		console.log(ali)

		for(var i=0;i<ali.length;i++){

			console.log(ali[i].children[1])
			var oul=ali[i].children[1];
			if(oul){
				oul.style.display='none';
				ali[i].onoff=true;
				ali[i].children[0].children[0].innerHTML='+';

			}
			// console.log(ali[i]children[0].children[0])
		}
		This.nextElementSibling.style.display='block';
		This.onoff=false;
		This.children[0].innerHTML='-';

	}
}