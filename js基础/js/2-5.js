/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-11 11:45:21
 * @version $Id$
 */

window.onload=function()
{
	var btn=document.querySelector('input');
	var ul=document.getElementsByTagName('ul')[0];
	var str='';
	var flag=0;
	var len=5;
	
	btn.onclick=function()
	{
		if(flag==0)
		{
			str='';
			for(var i=0;i<len;i++)
			{
				var left=i*55+'px';
				if(i<len/2)
				{
					var top=((len-1)/2-i)*55+'px';
				}
				else {
					var top=(i-((len-1)/2))*55+'px';
				}
				str+='<li style="left:'+left+' ;top: '+top+'">'+i+'</li>';
			}
			ul.innerHTML=str;
			flag=1;
		}
		else if (flag==1) {
			str='';
			for(var i=0;i<len;i++)
			{
				var top=i*55+'px';
				if(i<len/2)
				{
					var left = i*55+'px';
				}
				else{
					var left = ((len-1)-i)*55+'px';
				}
				str+='<li style="left:'+left+' ;top: '+top+'">'+i+'</li>';
			}
			ul.innerHTML=str;
			flag=2;

		}
		else if (flag==2) {
			str='';
			for(var i=0;i<len;i++)
			{
				var left=i*55+'px';
				if(i<3)
				{
					var top=i*55+'px';
				}
				else
				{
					var top=(4-i)*55+'px';
				}
				str+='<li style="top: '+top+' ;left:'+left+';">'+i+'</li>';
			}
			ul.innerHTML=str;
			flag=3;	
		}

		else if (flag==3) {
			str='';
			for(var i=0;i<len;i++)
			{
				var top=i*55+'px';
				if(i<3)
				{
					var left=((len-1)/2-i)*55+'px';
				}
				else{
					var left=(i-(len-1)/2)*55+'px';
				}
				str+='<li style="top: '+top+' ;left:'+left+';">'+i+'</li>';
			}
			ul.innerHTML=str;
			flag=0;	
		}
	}
}