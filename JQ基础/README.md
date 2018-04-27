# jq介绍
  Jq的底层就是Js
#   选择元素
#### - 模拟css选择元素

	$(obj) 跟原生的js有一个很明显的区别就是省略了循环,通过这种方法获取到的是一组这样的元素
	
	
#### - 独有表达式选择
    	$('li:first').css('background','red')  获取到的是li下面的第一个
		$('li:last').css('background','red')  获取到的是li下面的最后一个
		$('li:eq(2)').css('background','red')  获取到的是li下面的第二个
		js当中想做隔行换色,需要判断取模,而jq却可以很简单的找到奇 偶数行
		$('li:even').css('background','red')  获取到的是li下面的even 偶数行
   


#   JQ写法
#### - 方法函数化
	jq当中基本上可以忽略掉等号,原生当中我们很多都是赋值,但是在jq当中呢而是通过传参的形式来完成
	我们调用的时候一定要带上括号
	jq当中所有的方法都是封装起来的,所以必须通过调用,或者传参的形式去获取
	
#### - jq与js能共存但是不能混用
```javascript
  $(function(){
    	$('#div').click(function(){
    	$(this).html() ;  //纯jq写法 可行
    	this.innerHTML;   //纯js写法 可行
        $(this).innerHTML;   //不可行
    })
    })
```

#### - 链式操作

#### - 取值赋值合体
```javascript
 $('#div').html();   //取值
    $('#div').html('俺是赋值嘻嘻');   //赋值

    css()  //也是取值赋值合体的这样一个行为
    css('width','140px')  //赋值
    css('width')   //取值

    //取值赋值有一个细节需要注意,就是对一组元素操作是怎么样的
    alert($('li').html());  //只弹出第一个li的内容,所以说当一组元素的时候，取值是一组中的第一个,如果想取所有的话我们就可以利用循环来做
    $('li').html('hello')  //当一组元素的时候，赋值是所有的元素
```
 ```html
   <ul>
    	<li>aaa</li>
    	<li>bbb</li>
    	<li>ccc</li>
    	</ul>
```
#   JQ常用方法
#### - attr()
	attr()相当于是js当中的getAttribute(key) 获取元素的行间属性
```javascript
$('div').attr('id')  //获取div对象 id的行间属性
$('div').attr('id','666')  //设置div对象 id的行间属性
```
#### - filter()
	对一组元素进行筛选 ,在js当中filter是数组下面的方法:筛选出对应的值
```javascript
$(div).flter('.box').css('background','red')    //只会筛选出来div class带box的
```

#### - not()
	与filter的作用是相反的

#### - has()
	作用是用于包含

#### - next()
	next()跟我们原生js当中的nextElementSibling是一样,原生没有括号哦

#### - prev()
 	prev()跟我们原生js当中的prevElementSibling是一样,原生没有括号哦

#### - find()
	他是查找的意思

#### - eq()
	类似我们原生当中的下标

#### - index()
	类似我们原生当中的索引
```javascript
$(function(){
	alert($('#h2').index())    //索引就是当前元素在所有兄弟节点中的位置
})
``````html
<div>
	<h3>11</h3>
	<h3>22</h3>
	<h2 id='h2'>33</h2>
	<h3>44</h3>
</div>
```
#   JQ事件
#### - 鼠标事件()
- ##### click()
		当单击元素时，发生 click 事件。

- ##### dblclick()
		当双击元素时，触发 dblclick 事件。
		提示：dblclick 事件也会产生 click 事件。如果这两个事件都被应用于同一个元素，则会产生问题
	
- ##### mouseenter()
		当鼠标指针穿过（进入）被选元素时，会发生 mouseenter 事件。
		注意：与 mouseover 事件不同，mouseenter 事件只有在鼠标指针进入被选元素时被触发，mouseover 事件在鼠标指针进入任意子元素时也会被触发。
	
- ##### mouseleave()
		当鼠标指针离开被选元素时，会发生 mouseleave 事件。
		注意：与 mouseout 事件不同，mouseleave 事件只有在鼠标指针离开被选元素时被触发，mouseout 事件在鼠标指针离开任意子元素时也会被触发。
	
	
#### - 键盘事件
	
- ##### keypress()
		keypress 事件与 keydown 事件类似。当按钮被按下时发生该事件。
		然而，keypress 事件不会触发所有的键（比如 ALT、CTRL、SHIFT、ESC）

- #####  keydown()

- #####keyup()
	
#### - 表单事件
- ##### keyup()
		当提交表单时，会发生 submit 事件。
		该事件只适用于 form 元素

- ##### change()
		当元素的值改变时发生 change 事件（仅适用于表单字段）
		注意：当用于 select 元素时，change 事件会在选择某个选项时发生。
		当用于 text field 或 text area 时，change 事件会在元素失去焦点时发生。
- ##### focus()
		当元素获得焦点时

- ##### blur()
		当元素失去焦点时

#### -文档/窗口事件()

- ##### resize()
	当调整浏览器窗口大小时，发生 resize 事件。

- ##### scroll()
	当用户滚动指定的元素时，会发生 scroll 事件

#   JQ效果
#### -  显示隐藏
- ##### hide() show()
		这个方法在原生来做的话style.display=block/none,
		如果想要有过度的话还需要在css中添加transition
语法:
  `  $(selector).hide(speed,callback);`
   ` $(selector).show(speed,callback);`
可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。
可选的 callback 参数是隐藏或显示完成后所执行的函数名称。

- ##### toggle()
		通过 jQuery，您可以使用 toggle() 方法来切换 hide() 和 show() 方法
		这个方法可以在js原生当中来实现的话就必须要设置一个开关来进行判断了
语法:
  `  $(selector).toggle(speed,callback);`
可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。
可选的 callback 参数是隐藏或显示完成后所执行的函数名称。
		$(selector) 选中的元素的个数为 n 个，则 callback 函数会执行 n 次。
		对于这里，当 callback 函数加上括号时，函数立即执行，只会调用一次， 
		如果不加括号，元素显示或隐藏后调用函数，才会调用多次

#### -  淡入淡出
- #####  fadeIn()
 用于淡入已隐藏的元素
 语法:
 `$(selector).fadeIn(speed,callback);`
