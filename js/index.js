var nav_text = $(".xsh_nav_text");
var nav_hot = $(".xsh_nav_hot");
nav_text.on("click","a>li",function(){
    var left = $(this).position().left;
    nav_hot.css({"left":left});
})
var home = $("#home");
var divs = $("body>div");
var height = $(window).height();
window.onscroll = function(){
    divs.each(function(){
        var that = $(this);
        var top = that.offset().top;
        var scrolltop = $(window).scrollTop();
        var offsettop = top-scrolltop;
        if( offsettop>0 && offsettop <=height/3){
            var id = that.attr("id");
            var nava = nav_text.children("a[href*="+id+"]");
            var left = nava.children("li").position().left;
            nav_hot.css({"left":left});
        }
    })
}
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: 5000,
    paginationClickable :true,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
})
var glyphicon = $(".glyphicon-align-justify");
var nav_hidden = $(".xsh_nav_hidden");
glyphicon.on("click",function(){
    nav_hidden.toggleClass("hidden-xs hidden-sm").toggleClass("col-xs-12").css({padding:"0","box-shadow":"0 5px 5px #999999"});
    nav_text.css({"line-height":"45px"});
    nav_hot.css({top:"45px"});
    nav_text.on("click","a>li",function(){
        var top = $(this).position().top;
        nav_hot.css({"top":top+40});
    })
})
function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}
$(function(){
    if(!placeholderSupport()){   // 判断浏览器是否支持 placeholder
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
    };
})
var form_box = $(".xsh_form_box");
var submit = $(".submit");
var names = $(".name");
var email = $(".email");
var tel = $(".tel");
var gsname = $(".gsname");
var type = $(".type");
var money= $(".money");
var jianjie = $(".jianjie");
submit.on("click",function(){
    form_box.submit(function(){
        return false;
    })
    var nameval = names.val();
    var emailval = email.val();
    var telval = tel.val();
    var gsnameval = gsname.val();
    var typeval = type.val();
    var moneyval = money.val();
    var jianjieval = jianjie.val();
    if(nameval && emailval && telval && gsnameval && typeval && moneyval && jianjieval){
        $.ajax({
            url:"/feedback.php",
            data:{name:nameval,email:emailval,tel:telval,gsname:gsnameval,type:typeval,money:moneyval,jianjie:jianjieval},
            type:"post",
            success:function(result){
                var result = eval(result);
                if(result.code == 10000){
                    alert(result.msg);
                }else{
                    alert(result.msg);
                }
            }
        })
    }else{
        alert("有选项未填写！");
    }
})