/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-08 16:48:39
 * @version $Id$
 */

window.onload=function(){
	/*
		功能需求:  点击上移动当前的li往上移动一层
	    点击下移动当前的li往下移动一层
	   当点击第一个li上移的时候，当前li添加到li的最后面
	  当点击最后一个li下移的时候，当前li添加到li的最前面

         实现技能点(parnode.insertBefore()  /appenchlid)
	 */
	
	var li=document.querySelectorAll('li');

	for(var i=0;i<li.length;i++){
		var top=li[i].children[1].children[1];  /*获取的不是一个集合所有不用for来遍历这个数组*/
		var bottom=li[i].children[1].children[0];
		top.onclick=function(){
			console.log(this.parentNode.parentNode.previousElementSibling)
			this.parentNode.parentNode.parentNode.insertBefore(this.parentNode.parentNode,this.parentNode.parentNode.previousElementSibling);
		}
		bottom.onclick=function(){
			console.log(this.parentNode.parentNode.nextElementSibling)
			if(this.parentNode.parentNode.nextElementSibling){
				this.parentNode.parentNode.parentNode.insertBefore(this.parentNode.parentNode.nextElementSibling,this.parentNode.parentNode);
			}
			else{
				this.parentNode.parentNode.parentNode.insertBefore(this.parentNode.parentNode,this.parentNode.parentNode.parentNode.children[0])
			}
		}
	}

}