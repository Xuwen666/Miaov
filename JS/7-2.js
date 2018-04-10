/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-17 23:09:33
 * @version $Id$
 */

window.onload=function(){
	var ali=document.querySelectorAll('.box li');
	var Index;
	var bgColor;
	var Bgcolor=[];
	var input;
	var arrInput=[];
	var nuber=0;
	// 隔行变色 li移入移出变色 当inpput的checked为true的时候li不变色
	for(var i=0;i<ali.length;i++){
		if(i%2==0){
			ali[i].style.background='rgb(247, 255, 255)';
		}
		else{
			ali[i].style.background='rgb(255, 255, 255)';
		}
		Bgcolor.push(ali[i].style.background);
		console.log(Bgcolor)
		ali[i].index=i;
		ali[i].onmouseover=function(){
			
			if(this.children[0].checked===false){
				this.style.background='#eee';
			}
			
		}
		ali[i].onmouseout=function(){
		
			if(this.children[0].checked===true){
				this.style.background='#eee';
			}
			else{
				this.style.background=Bgcolor[this.index];
			}
		}
		input=ali[i].querySelector('input');
		
		arrInput.push(ali[i].children[0])

	}
	
	var Btn=document.querySelector('.left input')
	var Input=document.querySelectorAll('li input');

	for(var i=0;i<arrInput.length;i++){
		arrInput[i].index=i;

		
		arrInput[i].onclick=function(){
			nuber=0;
			if(this.checked){
				ali[this.index].style.background='#eee';
			}
			else{
				ali[this.index].style.background=Bgcolor[this.index];
			}

				
			for(var i=0;i<Input.length;i++){
				nuber+=Number(Input[i].checked);

			}
			console.log(nuber)
			if(nuber==6){
				Btn.checked=true;
			}
			else {
				Btn.checked=false;
			}
			if(nuber>0){
				Anniu('1');
			}
			else {
				Anniu('0.3');
			}
		}
	}

	// 全选
	var aniu=document.querySelectorAll('.right button');
	Btn.onclick=function(){
		for(var i=0;i<Input.length;i++){
			
			if(this.checked){
				Input[i].checked=true;
				ali[i].style.background='#eee';
				Anniu('1');
			}
			else{
				Input[i].checked=false;
				ali[i].style.background=Bgcolor[i];
				Anniu('0.3');
			}
		}
	}
	
	// 收藏 添加 删除 需求
	function Anniu(num){
		for(var i=0;i<aniu.length;i++){
			aniu[i].style.opacity=num;
		}
	}

}