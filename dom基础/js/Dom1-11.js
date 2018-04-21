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
		 这个做法代码优化不好,代码量太大
		 思路2: 用数组的map方法
		 个人理解传入的值，相当于是一个数组的长度，
		 他可以循环几次，同时也相当于是一个数组的变量名通过 
		  item.time 方法可以找到下面对象的value值
		2.点击全选按钮 所有input按钮checked为true,如果所有的input都为true则为true
		有一个不为tru则全部按钮为false

		3.选中input的时候出现弹窗,弹窗的位置跟着鼠标移动的位置获取
		阻止冒泡是什么事件触发他的就要用什么来阻止
		
		4.选中的input 点击删除全部删除dom元素删除同时数据中也要删除
		因为删除的dom元素会多次使用所以封装一个函数
		删除数据思路拿每个dom data自定义属性与数据中的key值对比如果相同就删除该条数据
		data 在html结构当中是这样直接设置的 data-id="1",而不是 style="data-id=1"

		5.碰撞检测 选中li拖动到删除图标后删除dom元素以及数据
		思路:使用碰撞检测,当弹窗碰到删除图标,松开鼠标删除dom元素以及数据
		封装一个碰撞检测的函数,传入两个值一个是拖动的对象,一个是被碰撞的对象
		首先获取到被碰撞对象的dom元素的getBoundingClientRect() 的top right bottom left 四个方向的值
		移动的时候获取到拖动对象dom元素的getBoundingClientRect() 的top right bottom left 四个方向的值 加上自身的宽度或者是高度
		判断 当拖动对象 left+W> 碰撞对象的 left 返回true

 */
window.onload=function(){
	var List=document.querySelector('.emailList .list');
	
	var html=list.map(function(item){
		return `<li data-id="${item.id}">
    					<input type="checkbox" name="">
    					<div class="text clear">
    						<span class="fl">${item.caption}</span>
    						<span class="rl">${item.time}</span>
    					</div>
    					<p>${item.desc}</p>
    				</li>`;
	}).join('');
	List.innerHTML=html;
	
	// 生成html结构
	
	
	var emailList=document.querySelector('.emailList');
	var Btn=emailList.querySelector('.emailHead input')
	var emaiInput=emailList.querySelector('.list').querySelectorAll('input');  /*所有input*/

	Btn.onclick=function(){
		for(var i=0;i<emaiInput.length;i++){
			emaiInput[i].checked=this.checked;

			if(this.checked){
				
				emaiInput[i].parentNode.className='bg';
			}
			if(!this.checked){
				emaiInput[i].parentNode.className='';
			}
		}
		
	} /*全选点击*/
	
	for(var i=0;i<emaiInput.length;i++){
			emaiInput[i].onclick=function(){
				
				if(!this.checked){
					Btn.checked=false;
					this.parentNode.className='';

					
				}
				if(this.checked){
				var num=0;
					for(var i=0;i<emaiInput.length;i++){
						if(emaiInput[i].checked==true){
							num++;
						}
					}
					console.log(num)
					if(num==emaiInput.length){
						Btn.checked=true;
					}
				this.parentNode.className='bg';
			
				
				}
			}
			emaiInput[i].onmousedown=function(ev){
				ev.stopPropagation();
			}

			/*阻止冒泡是什么事件触发他的就要用什么来阻止*/
	}
	/*每个input 点击*/

	var Li=List.querySelectorAll('li');
	var tanc=document.querySelector('.tanc');

	
	
		for(var i=0;i<Li.length;i++){
		Li[i].onmousedown=function(ev){
			if (!this.children[0].checked) {return}
			tanc.style.left=ev.clientX+4+'px';
			tanc.style.top=ev.clientY+'px';
			tanc.style.display='block';


			/*清楚默认行为*/
			ev.preventDefault();
			document.onmousemove=function(ev){
				tanc.style.left=ev.clientX+4+'px';
				tanc.style.top=ev.clientY+'px';
				console.log(tanc.getBoundingClientRect().left)
			}
			document.onmouseup=function(){
				tanc.style.display='none';
				document.onmousemove=document.onmouseup=null;
			}

		}
	}
	
	

	/*封装全部选中的li dom元素*/

	function CheckLi(){
		var Li=List.querySelectorAll('li');
		var arr=[];
	
		for(var i=0;i<Li.length;i++){
			if(Li[i].children[0].checked){
				console.log(Li[i])
				arr.push(Li[i])
			}
		}
		return arr;

	}
	

	var del=document.querySelector('.menu .del');
	
	del.onclick=function(){
		
		DelLI();
	}
	/*封装删除数据以及dom元素*/
	function DelLI(){
		var DelLi=CheckLi();
		
		for(var i=0;i<DelLi.length;i++){
			DelLi[i].remove();
			
			for(var j=0;j<list.length;j++){
				

				if(DelLi[i].dataset.id==list[j].id){
					list.splice(j,1);
				}	
			}
		}
	}

	/*封装碰撞检测*/
	function collision(drag,static){
		var static
	}
}