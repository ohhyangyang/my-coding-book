//getStyle函数可获取元素的当前显示样式
function getStyle(obj, name) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    } else {
        return obj.currentStyle[name];
    }
}

/*
创建一个可以执行简单动画的函数
参数：
  obj 要执行动画的对象
  attr 要执行动画的样式，比如："left" "top" "width" "height"
  target 执行动画的目标位置
  speed 移动的速度（正值）
  callback 回调函数，在动画执行结束后执行
*/

function move(obj, attr, target, speed, callback) {
    clearInterval(obj.timer);
    //获取目前元素位置
    var currentValue = parseInt(getStyle(obj, attr));

    if (currentValue > target) {//speed为负
        speed = -speed;
    }
    /*
    判断speed的正负值
    如从左向右移动，currentValue<target，speed为正值，
    如从右向左移动，currentValue>target，speed为负值
    */

    obj.timer = setInterval(function () {
        /*
        ⚠️
        应向执行动画的对象中添加一个timer属性，用来保存它自己的定时器的标识，这样多个box动画的执行不会互相干扰
        而不是在函数外部声明一个timer变量，因为一个外部变量无法同时移动多个box，例如：开启timer移动box2，box1的timer就会停止
        */

        var oldValue = parseInt(getStyle(obj, attr));
        //取旧值，每30毫秒变一次

        var newValue = oldValue + speed;
        //取新值

        if (speed < 0 && newValue < target || speed > 0 && newValue > target) {
            newValue = target;
        }//判断新值与target关系，使其最终无偏差到达终点

        obj.style[attr] = newValue + "px";
        /*
        将新值赋予元素样式中
        ⚠️style["left"]等于style.left，但是[]中的参数可以被传递，而不是作为一个固定的变量属性被写死
        */
        //到达target后停止动画
        if (newValue == target) {
            clearInterval(obj.timer);
            callback && callback();
            /*
            动画执行完毕，调用回调函数，
            ⚠️使用&&，不会报错
            有callback则调用，没有则不调用
            */
        }
    }, 30);
};

/*
以下函数的参数：
     obj 要添加class属性的元素
    cn（classname） 要添加的class名的string
*/
/*
定义一个函数，判断一个元素中是否有指定的class属性值
 
*/
function hasClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b");
    // \b单词边界,在字符串中需要输入\\来代表 \
    return reg.test(obj.className);
}
/*
定义一个函数，用于向元素中添加指定的class属性值
 
*/
function addClass(obj, cn) {
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }//检查obj中是否有cn，没有cn则添加cn

}
/*
定义一个函数，删除元素中的指定class属性
 
*/
function removeClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b");
    obj.className = obj.className.replace(reg, "");
}
/*
定义一个函数，切换元素中的一个class（⚠️最好用，很智能）
如果元素中具有该class，则删除
如果元素中没有该class，则添加
*/
function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        removeClass(obj, cn);
    } else {
        addClass(obj, cn);
    }
}