/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-13 16:46:12
 * @version $Id$
 */

/*

	需求:
		 1.
		 根据京东后台来自动生成html结构
		 思路1：创建一个li 创建一个p 创建一个div 
		 创建一个input,div里面创建两个span
 */
window.onload=function(){
	var List=document.querySelector('.emailList .list');
	console.log(list)
	for(var i=0;i<list.length;i++){
		var li=document.createElement('li');
		var input=document.createElement('input');
		input.type='checkbox';

		var p=document.createElement('p');
		p.innerText=list[i].desc;
		var div=document.createElement('div');
		div.className='text';
		div.className='clear';
		console.log(div)
		var span1=document.createElement('span');
		var span2=document.createElement('span');
		span1.innerHTML=list[i].caption;
		span1.innerHTML=list[i].time;
		console.log(list[i].caption)
		div.appendChild(span1);
		div.appendChild(span2);
		li.appendChild(input);
		li.appendChild(div);
		li.appendChild(p);
		List.appendChild(li)
	}
}