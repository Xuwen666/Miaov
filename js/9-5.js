/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-26 16:26:11
 * @version $Id$
 */

window.onload=function(){
	var abutton=document.querySelectorAll('.header button');
	var amain=document.querySelectorAll('.main');
	var This;
	for(var i=0;i<abutton.length;i++){
		abutton[i].index=i;
		abutton[i].onmouseover=function(){
			This=this.index;
			clearbuton();
			NexPrev(This)
		}
	}


	// 封装清空所有button 当前添加 清空所有main 当前添加
	
	function clearbuton(){
		for(var i=0;i<abutton.length;i++){
			abutton[i].className='';
			amain[i].style.display='none';
		}
		abutton[This].className='active';
		amain[This].style.display='block';
	}

	// 封装 独立的next 以及 prev
	var num=0;
	NexPrev(0);
	function NexPrev(num){
		
		var prev=amain[num].querySelector('.btn .prev');
		var next=amain[num].querySelector('.btn .next');
		var List=amain[num].querySelector('.list');
		var aspan=amain[num].querySelectorAll('span');

		console.log(aspan.length)
		next.onclick=function(){
			num++;
			console.log(num)
			if(num==aspan.length){
				num=aspan.length-1;
			}
			doMove(List,'left',30,-num*540,function(){
				for(var i=0;i<aspan.length;i++){
					aspan[i].className='';
				}
				aspan[num].className='active';
			});
		}

		prev.onclick=function(){
			num--;
			if(num<0){
				num=0;
			}
			doMove(List,'left',30,-num*540,function(){
				for(var i=0;i<aspan.length;i++){
					aspan[i].className='';
				}
				aspan[num].className='active';
			});
		}
	}


}