/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-17 17:25:43
 * @version $Id$
 */

window.onload=function(){
	var aimg=document.querySelectorAll('.left img');
	var arrImg=['img/nst.gif','img/nsg.gif','img/sth.gif','img/st.gif'];
	var num=0;
	var Index;
	var text=document.querySelector('.text');
	var arrSrc=[];
	var str='';
	for(var i=0;i<aimg.length;i++){
		aimg[i].index=i;
		aimg[i].onmouseover=function(){
			arrSrc=[];
			for(var i=0;i<aimg.length;i++){
				console.log(aimg[i].src)
				arrSrc.push(aimg[i].src);
			}
			Index=this.index;
			picImg((aimg.length-1),arrImg[0]);
			if(Index<2){
				picImg(Index,arrImg[1]);
			}
			else{
				picImg(Index,arrImg[2]);
			}

			
		}

		aimg[i].onmouseout=function(){
			for(var i=0;i<arrSrc.length;i++){
				aimg[i].src=arrSrc[i];
			}
			text.innerHTML=str;
		}
		aimg[i].onclick=function(){
			arrSrc=[];
			Index=this.index;
			picImg((aimg.length-1),arrImg[0]);
			if(Index<2){
				picImg(Index,arrImg[1]);
			}
			else{
				picImg(Index,arrImg[3]);
			}
			for(var i=0;i<aimg.length;i++){
				console.log(aimg[i].src)
				arrSrc.push(aimg[i].src);
			}
			str=text.innerHTML;
		}
	}
	// 封装图标转换函数 根据index变化不同图片
	function picImg(index,img){
		for(var i=0;i<=index;i++){
			aimg[i].src=img;
		}
		switch (index) {
			case 0:
				text.innerHTML='极差';
				break;
			case 1:
				text.innerHTML='很差';
				break;
			case 2:
				text.innerHTML='还行';
				break;
			case 3:
				text.innerHTML='不错';
				break;
			case 4:
				text.innerHTML='推荐';
				break;

		}
	}
}