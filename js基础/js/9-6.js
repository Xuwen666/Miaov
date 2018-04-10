
window.onload=function(){
	var prev=document.querySelector('.prev');
	var next=document.querySelector('.next');
	var aimg=document.querySelectorAll('.img img');
	var img=document.querySelector('.pic .img');
	var ali=document.querySelectorAll('.list li');
	var arrImg=['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg'];
	var num=0;
	var index=0;
	
	next.onclick=function(){
		index++;
		if(index>arrImg.length-1){
			index=0;
		}
		Pic(1,index);
	}
	prev.onclick=function(){
		index--;
		if(index<0){
			index=arrImg.length-1;
		}
		Pic(-1,index);
	}
	var Thids;
	for(var i=0;i<ali.length;i++){
		ali[i].index=i;
		ali[i].onclick=function(){
			This=this.index;
			if(This>num){
				Pic(1,This);
			}
			else if (This<num) {
				Pic(-1,This);
			}
		}
	}
	// 封装 图片轮播 用两个图片来实现  关键是num的变化
	//  右点击一张图片为0 第二张图片为 1 并且像左移动-400px 移动一张图片的位置
	//  左点击第一张图片为要替换的图片num只值 第二张图片为0 并且像 并且像左移动400px
	function Pic(Num,index){
		for(var i=0;i<ali.length;i++){
			ali[i].className='';
		}
		ali[index].className='active';

		// 判断是右滑动还是左滑动
		if(Num>0){

			aimg[0].src=arrImg[num];
			aimg[1].src=arrImg[index];
			img.style.left='0px';
			doMove(img,'left',30,-400);
		}
		if(Num<0){

			aimg[0].src=arrImg[index];
			aimg[1].src=arrImg[num];
			img.style.left='-400px';
			doMove(img,'left',30,0);

		}
		num=index;
	}

}