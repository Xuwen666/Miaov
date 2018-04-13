/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-12 11:41:20
 * @version $Id$
 */



/*

	用json方法将数据写入html中
	数据结构差不多 从外到内结构相同 可使用递归每次执行调用自身
	(因为规则相同,所以可以使用递归)
	封装一个递归函数 第一次传入默认值
	首先创建p i li标签
	 i标签赋值
	p标签赋值  
	判断如果 有chiild说明有下一级
		如果有下一级就创建ul 将他添加到li当中
		并且调用封装好的函数实现递归

 */

window.onload=function(){


		var dataArr=[
		{
			'title':'第一级菜单',
			'child':[
				{
					'title':'第二级菜单',
					'child':[
						{
							'title':'第三级菜单',
							'child':[
								{
									'title':'第四级菜单',
									'child':[
										{'title':'第五级菜单'},
										{'title':'第五级菜单'},
										{'title':'第五级菜单'},
										{'title':'第五级菜单'}
									]
								}
							]
						},
						{'title':'第三级菜单'},
						{'title':'第三级菜单'}
					]
				},
				{
					'title':'第二级菜单',
					'child':[
						{'title':'第三级菜单'},
						{'title':'第三级菜单'}
					]
				},
				{
					'title':'第二级菜单',
					'child':[
						{'title':'第三级菜单'},
						{'title':'第三级菜单'},
						{'title':'第三级菜单'}
					]
				}
			]
		},
		{
			'title':'第一级菜单',
			'child':[
				{
					'title':'第二级菜单',
					'child':[
						{'title':'第三级菜单'},
						{'title':'第三级菜单'},
						{'title':'第三级菜单'}
					]
				},
				{
					'title':'第二级菜单',
					'child':[
						{'title':'第三级菜单'},
						{'title':'第三级菜单'}
					]
				},
				{
					'title':'第二级菜单',
					'child':[
						{'title':'第三级菜单'},
						{'title':'第三级菜单'},
						{
							'title':'第三级菜单',
							'child':[
								{'title':'第四级菜单'}
							]
						}
					]
				}
			]
		},
		{
			'title':'第一级菜单',
			'child':[
				{
					'title':'第二级菜单',
					'child':[
						{'title':'第三级菜单'},
						{'title':'第三级菜单'},
						{'title':'第三级菜单'}
					]
				},
				{'title':'第二级菜单'},
				{
					'title':'第二级菜单',
					'child':[
						{'title':'第三级菜单'},
						{'title':'第三级菜单'},
						{'title':'第三级菜单'}
					]
				}
			]
		},
		{
			'title':'第一级菜单'
		}
	];
	/*生成数据*/
	var list1=document.querySelector('.list1');


/* 封装一个递归函数*/
function createHtml(data,elem,clas){
	for(var i=0;i<data.length;i++){

		var li=document.createElement('li');
		var p=document.createElement('p');
		var I=document.createElement('i');  /*注意设置变量名 之前设置变量名为i会出现BUG*/
		I.innerHTML='+';
		
		li.appendChild(p);
		p.innerHTML+=data[i].title;
		if(data[i].child){
			p.appendChild(I);
			var ul=document.createElement('ul');
			ul.className='list'+clas;
			li.appendChild(ul);
			console.log(data[i].child)
			createHtml(data[i].child,ul,clas+1);
		}
		elem.appendChild(li);
		
	}

}
	
createHtml(dataArr,list1,2);
var p=document.querySelectorAll('.list1 p');

/* 获取到所有的p标签 点击获取p的兄弟节点显示*/
for(var i=0;i<p.length;i++){

 p[i].parentNode.onoff=true;
 p[i].onclick=function(){
 	if(this.parentNode.onoff){
 		if(this.nextElementSibling){  /*判断当前的p是否有下一个ul的兄弟节点*/
 			this.nextElementSibling.style.display='block';
 		this.children[0].innerHTML='-';
 		list(this);
 		}
 		
 	}
 	else{
 		this.nextElementSibling.style.display='none';
 		this.children[0].innerHTML='+';
 	}
 	this.parentNode.onoff=!this.parentNode.onoff;
 	
 }
}


/*点击其他兄弟节点隐藏  p标签的父级父级ul 找到所有li他下面的所以ul隐藏*/

function list(This){
	console.log(This) /*获取到当前的p标签*/
	var ul=This.parentNode.parentNode; /*获取当前p标签 上级上级 ul*/
	console.log(ul);
	var li=ul.children;  /*获取ul下的所有li*/

	for(var i=0;i<li.length;i++){
		if(li[i].children[1]){  /*判断这个li下有没有ul标签*/
			li[i].children[1].style.display='none';
			li[i].onoff=true;
			li[i].children[0].children[0].innerHTML='+';
		}
	}
	This.nextElementSibling.style.display='block';
	This.onoff=false;
		This.children[0].innerHTML='-';
}
}