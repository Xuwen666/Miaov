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
	p标签赋值  给class样式
	判断如果 有chiild说明有下一级
		如果有下一级就创建ul 给ul样式 将他添加到li当中
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
function createHtml(data,elem){
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
			li.appendChild(ul);
			console.log(data[i].child)
			createHtml(data[i].child,ul);
		}
		elem.appendChild(li);
		
	}

}
	
createHtml(dataArr,list1);



}