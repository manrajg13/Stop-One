	window.onload=function(){
		var oDiv=document.getElementById('div1');
		var oUl=oDiv.getElementsByTagName('ul')[0];
		var aLi=oUl.getElementsByTagName('li');


		var timer=null;
		var iSpeed=10;
		oUl.innerHTML+=oUl.innerHTML;
		oUl.style.width=aLi.length*aLi[0].offsetWidth+'px';
		function fnMove(){
			if(oUl.offsetLeft<-oUl.offsetWidth/2){
				oUl.style.left=0;
			}else if(oUl.offsetLeft>0){
				oUl.style.left=-oUl.offsetWidth/2+'px';
			}
			oUl.style.left=oUl.offsetLeft+iSpeed+'px';
 
		}
		timer=setInterval(fnMove,300);

        //clear timer on mouseover
		oDiv.onmouseover=function(){
			clearInterval(timer);

		}
        //define timer  on mouse out
		oDiv.onmouseout=function(){
			timer=setInterval(fnMove,300);

		}

		var oDiv1=document.getElementById('div2');
		var oUl1=oDiv1.getElementsByTagName('ul')[0];
		var aLi1=oUl1.getElementsByTagName('li');


		var timer1=null;
		var iSpeed1=10;
		oUl1.innerHTML+=oUl1.innerHTML;
		oUl1.style.width=aLi1.length*aLi1[0].offsetWidth+'px';
		function fnMove1(){
			if(oUl1.offsetLeft<-oUl1.offsetWidth/2){
				oUl1.style.left=0;
			}else if(oUl1.offsetLeft>0){
				oUl1.style.left=-oUl1.offsetWidth/2+'px';
			}
			oUl1.style.left=oUl1.offsetLeft+iSpeed1+'px';
 
		}
		timer1=setInterval(fnMove1,300);

        //clear timer on mouseover
		oDiv1.onmouseover=function(){
			clearInterval(timer1);

		}
        //define timer  on mouse out
		oDiv1.onmouseout=function(){
			timer1=setInterval(fnMove1,300);

		}
	}