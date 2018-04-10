/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-09 14:20:17
 * @version $Id$
 */

window.onload=function(){
	/*
		需求:点击升序按钮 所有的li从小到大排序
      解决方案1:(不推荐拓展极差)把所有li的值push到一个数组中利用数组的排序(sort(function(a,b){return a-b})) 然后重新渲染在ul上渲染出来重新排过序的值 
      			这个方案的弊端就是假如我要给li添加背景色实现不了(因为他每次都要重新渲染ul)
      解决方案2:用先for遍历1-6的值然后在开一个for找每个li里面的内容 判断这两个for当中是否存在相等的值，如果有的话就appcnchild到ul
      			(for遍历有两种情况一种是从1到6  另外一种情况是从6到1)

      解决方案3:用for遍历1-6的数值然后再开一个for找到每个li里面的数值，进行判断如果相同直接在判断试一次是true还是false 如果是true就用appenchild 如果是flase就用insertbefore

	 */
	

	var btn=document.querySelector('button');
	var ali=document.querySelectorAll('li');
	var ul=document.querySelector('ul');
	var bgcolor=['red','blue','greenyellow','green'];
	var onoff=true;  /*开关*/
	for(var i=0;i<ali.length;i++){
		ali[i].style.backgroundColor = bgcolor[i%bgcolor.length];
		
	}

	btn.onclick=function(){
		for(var i=1;i<ali.length+1;i++){
			for(var j=0;j<ali.length;j++){
				if(i==Number(ali[j].innerHTML)){   /*其实这里转不转换li的值都行*/
					onoff?ul.appendChild(ali[j]):ul.insertBefore(ali[j],ul.children[0]);
				}
			}
		}
		onoff=!onoff;
		onoff?btn.innerHTML='升序':btn.innerHTML='降序';
	}

	
	
}