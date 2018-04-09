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
      			这个方案的弊端就是假如我要给li添加背景色实现不了
      解决方案2:用先for遍历1-6的值然后在开一个for找每个li里面的内容 判断这两个for当中是否存在相等的值，如果有的话就appcnchild到ul
      			(for遍历有两种情况一种是从1到6  另外一种情况是从6到1)

      解决方案3:

	 */
	
	var arr=[]; /*存放所有li的值*/
	var btn=document.querySelector('button');
	var ali=document.querySelectorAll('li');
	var ul=document.querySelector('ul');
	var onoff=true;  /*开关*/
	for(var i=0;i<ali.length;i++){
		arr.push(Number(ali[i].innerHTML));  /*innerhtml获取的是字符串类型*/
		
	}

	console.log(arr)

	btn.onclick=function(){
		var str='';
			if(onoff){
				arr.sort(function(a,b){
				return a-b;  /*升序*/
			})
			/*重新生成排完序的li*/
			for(var i=0;i<arr.length;i++){
				str+='<li>'+arr[i]+'</li>';

			}
			ul.innerHTML=str;
			btn.innerHTML='降序';
		}
		else{
			arr.sort(function(a,b){
				return b-a;
			})
			for(var i=0;i<arr.length;i++){
				str+='<li>'+arr[i]+'</li>';

			}
			ul.innerHTML=str;
			btn.innerHTML='升序';
		}
		onoff=!onoff;
		/*需求实现*/
	}
}