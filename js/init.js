/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2017-11-07 20:34:19 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2017-11-07 21:09:30
 *
 */
(function(){
    const DATA = {
        R_ASIDE:[
            {title:'檽米',img:'./images/icon1.png'},
            {title:'音乐',img:'./images/icon2.png'},
            {title:'图片',img:'./images/icon3.png'},
            {title:'知道',img:'./images/icon6.png'},
            {title:'文库',img:'./images/icon5.png'},
            {title:'百度推广',img:'./images/icon4.png'}
        ]
    }
    /**
     * 渲染侧栏与实时热点
     */
    var oRaside = document.getElementById('r-aside'),
        r_aside_html = '';
        console.log(oRaside);
        DATA.R_ASIDE.forEach(function(val,index,arr){
            r_aside_html += "<li><a href='#'><img src='"+val.img+"'></a><p><a href='#'>"+val.title+"</a></p></li>";
        });
        oRaside.innerHTML = r_aside_html;
    /**
     * 事件监听
     * 
     */
    var oMore = document.getElementsByClassName('more')[0];
        oMore.addEventListener('mouseover',function(){
            oRaside.style.display = 'block';
            this.classList.add('moreActive');
        },false);
        oMore.addEventListener('mouseleave',function(){
            oRaside.style.display = 'none';
            this.classList.remove('moreActive');
        },false);
})();