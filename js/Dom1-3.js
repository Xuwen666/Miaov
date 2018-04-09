/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-08 17:58:04
 * @version $Id$
 */


/*
	
	需求: 一.点击上移 
	当前li往上移动，上一个兄弟节点li往下移动(上移动-70px 下移动 70px 注意运动函数执行完成之后要把top值赋值为0)
	并且执行完成之后还要注意dom元素节点的变化

	

 */

window.onload=function(){

	var ali=document.querySelectorAll('ul li');


	for(var i=0;i<ali.length;i++){
		var top=ali[i].children[1].children[1];  /*获取到所有的上移按钮*/
		var bottom=ali[i].children[1].children[0];  /*获取到所有的下移按钮*/
		/*因为获取到的top 以及 botoom 不是复合数组所以不用for来遍历所有*/	

		top.onclick=function(){
			
			var moveLi=this.parentNode.parentNode;
			var prev=moveLi.previousElementSibling;
			console.log(moveLi.parentNode)
			/*判断当前li有上一个兄弟节点*/
			if(prev){
				doMove(moveLi,'top',5,-(moveLi.clientHeight+10),function(){
				moveLi.style.top='0';
				moveLi.parentNode.insertBefore(moveLi,prev);
				})  /*向上移动*/
				doMove(prev,'top',5,(prev.clientHeight+10),function(){
					prev.style.top='0';
				});   /*向下移动*/ 
			}
			else{  /*当前li没有上一个兄弟节点   当前li向下移动280px,最后一个li向上移动-280px*/  
				doMove(moveLi,'top',10,280,function(){
					moveLi.parentNode.appendChild(moveLi);
					moveLi.style.top='0';
					console.log(moveLi.parentNode)
					
				}); /*向下移动*/
				var lasli=moveLi.parentNode.lastElementChild;  /*预先存储最后一个li*/
				doMove(lasli,'top',10,-280,function(){
					moveLi.parentNode.insertBefore(lasli,moveLi.parentNode.firstElementChild); /*最后一个li添加到第一个li*/
					lasli.style.top='0';


				});  /*最后一个li向上移动*/


			}

		} /*向上移动*/


		bottom.onclick=function(){

			var thismove=this.parentNode.parentNode;  /*当前li*/
			var next=thismove.nextElementSibling;  /*当前li的下一个li*/
			var first=thismove.parentNode.firstElementChild;  /*第一个li*/
			if(next){
				doMove(thismove,'top',5,thismove.clientHeight+10,function(){
				thismove.parentNode.insertBefore(next,thismove);  /*回调函数 dom元素的位置应该变化*/
				thismove.style.top='0';
				}); /*下移*/
				doMove(next,'top',5,-(next.clientHeight+10),function(){
					next.style.top='0';
				});    /*上移*/
			}
			else{
				doMove(thismove,'top',10,-280,function(){
					thismove.parentNode.appendChild(first);   /*第一个li添加的最后*/
					thismove.style.top='0';
				});
				doMove(first,'top',10,280,function(){
					first.style.top='0';
				});
			}
			

		}
		/*向下移动 */

	}
}