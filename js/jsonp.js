/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2017-6-06 19:21:55 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2017-11-07 21:42:16
 * 随便写写，没作任何优化与兼容
 */
var oSea = document.getElementById('search'),
    oList = document.getElementById('list'),
    oLi = oList.getElementsByTagName('li'),
    oSearchBtn = document.getElementsByClassName('searchBtn')[0];
    flag = false,
    nowTag = 0,
    cBorderTop = function(){
        if(!oSea.value){
            oList.style.border = 'none';
        }else{
            oList.style.border = '1px solid #ccc';
            oList.style.borderTop = 'none';
        }
    };
oSea.onkeydown = function(e){
    var e = event ||window.event,len = oList.childNodes.length;
    for(var i=0;i<len;i++)
            oList.childNodes[i].classList.remove('active');
        if(flag&&e.keyCode==40){ //down
            oList.childNodes[nowTag].classList.add('active');
            oSea.value = oList.childNodes[nowTag].innerText;
            (nowTag<len-1)?nowTag+=1:nowTag=0;
            console.log(oList.childNodes[nowTag]);
            console.log(nowTag);
        }else if(flag&&e.keyCode==38){ //up
            (nowTag>=1)?nowTag-=1:nowTag=len-1;
            console.log(oList.childNodes[nowTag]);
            oList.childNodes[nowTag].classList.add('active');
            oSea.value = oList.childNodes[nowTag].innerText;
        }else if(flag&&e.keyCode==13){//enter
            window.location.href="https://www.baidu.com/s?wd="+this.value;
        }else{
            var data = this.value,
            sc = document.createElement('script');
            sc.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+data+"&cb=myJsonp";  //这里不能用字符拼接callback函数
            document.head.appendChild(sc);
            document.head.removeChild(sc);
            nowTag = 0;
        }
        cBorderTop();
    }
    oSea.onblur = function(){
        oList.innerHTML = '';
    }
    oList.onmouseover = function(e){
        for(var i=0,len = oList.childNodes.length;i<len;i++){
            oLi[i].classList.remove('active');
            oLi[i].index = i;                                 //手动赋予索引值
        }
            
        if(/li/i.test(e.target))
            nowTag = e.target.index;
        }
    oList.onclick = function(e){   //事件委托
        if(/li/i.test(e.target)){
            window.location.href="https://www.baidu.com/s?wd="+e.target.innerText;  //这里不能用this   因为this是指向ul
        }
    }
    oSearchBtn.onclick=function(){

        window.location.href="https://www.baidu.com/s?wd="+this.value;

    }.bind(oSea);

function myJsonp(){
    var dataArr = arguments[0].s,html='';  //如果这个html=''要先赋值  否侧下面+=会出现undefined
    (dataArr.length)?flag = true:flag = false;
    for(var i=0,len=dataArr.length-6;i<len;i++){
        html += "<li>"+dataArr[i]+"</li>";  //把返回的数据遍历出来  全部塞进 html这个变量里面
    }
    oList.innerHTML = html;
}