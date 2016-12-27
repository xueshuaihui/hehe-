var nav_text = $(".xsh_nav_text");
nav_text.on("click","a>li",function(){
    nav_text.children("a").removeClass("xsh_nav_hot_color");
    $(".xsh_nav_hot").css({display:"none"});
    $(this).parents("a").addClass("xsh_nav_hot_color");
    $(this).children(".xsh_nav_hot").css({display:"block"});
})
var divs = $("body>div");
var height = $(window).height();
var nav_hot=$(".xsh_nav_hot");
window.onscroll = function(){
    divs.each(function(index){
        var that = $(this);
        var top = that.offset().top;
        var scrolltop = $(window).scrollTop();
        var offsettop = top-scrolltop;
        if( offsettop>0 && offsettop <=250){
            var id = that.attr("id");
            var nava = nav_text.children("a[href*="+id+"]");
            nav_text.children("a").removeClass("xsh_nav_hot_color");
            nava.addClass("xsh_nav_hot_color");
            nav_hot.css({display:"none"});
            nav_hot.eq(index).css({display:"block"});
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
var glyphicon = $(".navbar-toggle");
var nav_hidden = $(".xsh_nav_hidden");
glyphicon.on("click",function(){
    nav_hidden.toggleClass("hidden-xs").toggleClass("col-xs-12 xsh_nav_quan");
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
    var pttype = $(".pttype:checked");
    if(nameval && emailval && telval && gsnameval && typeval!=0 && moneyval!=0 && jianjieval && pttype.length!=0){
        var arr=[];
        pttype.each(function(){
            arr.push($(this).val());
        })
        $.ajax({
            url:"/feedback.php",
            data:{name:nameval,email:emailval,tel:telval,gsname:gsnameval,type:typeval,money:moneyval,ptlx:arr,jianjie:jianjieval},
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