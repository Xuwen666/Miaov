/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-13 16:46:12
 * @version $Id$
 */

/*
 	京东在布局上面这个需求上面的布局嵌套的很多层 例如条件选项区域代码如下
 	div>div>ul>li>a  大体结构是这样的,除此之外京东用了多个div,目的应该是为了兼容低版本的ie
	
	从json中拿到数据 先遍历这个数组在html中创建结构

	一开始有一种思路就是在用遍历生成html结构的同时绑定点击事件,这样可以节省代码,
	但是写到给a标签的父级添加自定义索引值的时候不好实现

	第二种思路就是用for循环li 给li设置一个变量用于存a标签的dom元素 在传参到一个函数中 找到li下的a标签添点击事件
	因为要每一行只能存在一个所以只能通过给点击事情的父级设置变量来存,判断这个变量是否有值,有的话就清空
	接下来就是要将点击的a标签的元素存入对象当中,然后遍历里面的数据添加到对应的html结构中
	因为1-9的思路是点击的时候直接找到对应li添加内容,而这种思路是存入数组后,在遍历出所有的内容
	对象有可能不是按循序来遍历的 所以在处理key为数值的时候我们可以用for来遍历

 */


window.onload=function(){
	var crumbData=[
		{
				"title": "品牌",
				"data": [ "苹果","小米","锤子","魅族","华为","三星","OPPO","vivo","乐视"]
			},
			{
				"title": "尺寸",
				"data": ["4.0-4.5英寸","4.6-4.9英寸","5.0-5.5英寸","6.0英寸以上"]
			},
			{
				"title": "系统",
				"data": ["android","ios","window phone","无","其他"]
			},
			{
				"title": "网络",
				"data": ["联通3G","双卡单4G","双卡双4G","联通4G"]
			}
	];

	var datelen=crumbData.length;  /*数据的长度*/
	var ul=document.querySelector('.screenArea');
	for(var i=0;i<datelen;i++){
		var li=document.createElement('li');
		var span=document.createElement('span');
		span.innerHTML=crumbData[i].title+':';
		// console.log(span.innerHTML)
		li.appendChild(span);
		for(var j=0;j<crumbData[i].data.length;j++){
			var a=document.createElement('a');
			a.innerText=crumbData[i].data[j];
			// console.log(a.innerText)
			a.href="javascript:;"

		/*	a.onclick=screenA; */  
			li.appendChild(a);
		}
		ul.appendChild(li);
	}


	// function screenA(){
	// 	console.log(this)
	// 	var li=this.parentNode;  

	// 	this.className='active';
	// }
	
	var li=document.querySelectorAll('.screenArea li');
	for(var i=0;i<li.length;i++){
		li[i].Acolor;     //*在循环的时候给li设置变量*/
		screenA(li[i],i);
	}
	var shuju={};
	function screenA(li,n){
		console.log(li.Acolor)
		var a=li.querySelectorAll('a');
		for(var i=0;i<a.length;i++){
			a[i].onclick=function(){
				var fLi=this.parentNode; /*找到父级li*/
				if(fLi.Acolor){
					fLi.Acolor.className='';
				}
				this.className='active';
				fLi.Acolor=this;
				shuju[n]=this.innerText;   /*点击的值存入对象当中*/
				
				objshuju();
			}
		}
	}

	/* 生成对象数据*/
	function objshuju(){	
		/*对象有可能不是按循序来遍历的 所以在处理key为数值的时候我们可以用for来遍历*/
		
		for(var attr in shuju){
			console.log(attr)
		}
	}
}