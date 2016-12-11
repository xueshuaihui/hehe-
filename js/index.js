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
function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}

var submit = $(".submit");
var xsh_fotm = $(".xsh_fotm");
xsh_fotm.submit(function(){
    return false;
})
var name = $(".name");
var email = $(".email");
var tel = $(".tel");
var gsname = $(".gsname");
var type = $(".type");
var money= $(".money");
var jianjie = $(".jianjie");
submit.on("tap",function(){
    $.ajax({
        url:"/feedback.php",
        data:{name:name.val(),email:email.val(),tel:tel.val(),gsname:gsname.val(),type:type.val(),money:money.val(),jianjie:jianjie.val()},
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
})