$(function (){
   /* 监听输入框聚集事件*/
    $("input").on("focus",function (){
        $(this).parent().addClass("active");
        if( $(this).val().length > 0){
            $(this).next(".delete").show();
        }else{
            $(this).next(".delete").hide();
        }

    })
    /*输入框失去焦点的blur事件*/
    $("input").on("blur",function () {
        let $this = $(this);
        $this.parent().removeClass("active");
        $this.next(".delete").hide();
    });

    $("input").keyup(function(){
        if( $(this).val().length > 0){
            $(this).next(".delete").show();
        }else{
            $(this).next(".delete").hide();
        }
    });
    /*删除图标的点击事件*/
    $(".delete").on("click",function () {
        $(this).prev("input").val("").focus();
    });
    /*阻止浏览器默认事件,解决blur事件比click事件先执行的问题*/
    $(".delete").on("mousedown",function(e) {
        e.preventDefault();
    })
})
