/**
 * Created by 小样儿 on 2016/10/3.
 */
$(function(){
    $(window).on("resize",function(){
        var bodyH = $(window).height()
        $(".top").height(bodyH)
        $(".about").height(bodyH)
        $(".report").height(bodyH)
        $(".projects").height(bodyH)
        $(".contact").height(bodyH)
        $(".projects .pro_pass .pro_menu li").css("lineHeight",$(".projects .pro_pass .pro_menu li").height()+"px")
        $(".projects .pro_pass .pro_info li a").css("lineHeight",$(".projects .pro_pass .pro_info li a").width()+"px")
        $(".projects .pro_pass .mobile_pro li").css("lineHeight",$(".projects .pro_pass .mobile_pro li").height()+"px")
        $(".projects .pro_pass .mobile_info li a").height($(".projects .pro_pass .mobile_info li a").width())
        $(".projects .pro_pass .mobile_info li a").css("lineHeight",$(".projects .pro_pass .mobile_info li a").height() + "px")
        $(".projects .pro_pass .pro_info li a").height($(".projects .pro_pass .pro_info li a").width())
        $(".about_passage .pass_two .pass_tx").height($(".about_passage .pass_two .pass_tx").width())
        $(".report_passage  .report_tx .my_photo").height($(".report_passage  .report_tx .my_photo").width())
        $(".about_passage .pass_two .pass_tx .pass_nr").height($(".about_passage .pass_two .pass_tx .pass_nr").width())
    })
    $(window).trigger("resize")

    var wheelimgs = $(".top_wheel .wheel_imgs li")
    var imgCount = 0
    var topMCount = 0
    var topMs=$(".top .top_m")
    function wheel(){
        if(imgCount == wheelimgs.length){
            imgCount = 0;
        }
        wheelimgs.fadeOut()
        wheelimgs.eq(imgCount).fadeIn()
        imgCount++
    }
    setInterval(wheel,5000)
    function wheelUp(){
        if(topMCount == topMs.length){
            topMCount = 0;
        }
        topMs.fadeOut()
        topMs.eq(topMCount).fadeIn()
        topMCount++
    }
    setInterval(wheelUp,6000)

    var deg=0
    function aboutTX(){
       $(".about .about_passage .pass_two .pass_tx").css("transform","rotateZ(" + deg + "deg)");
        deg++;
       if(deg > 360){
           deg = 0;
       }
    }
    $(".about .about_passage .pass_two .pass_nr").on("click",function(){
        if($("audio").get(0).paused){
            $("audio").get(0).play()
            var audiot=setInterval(aboutTX,100)
        }else{
            $("audio").get(0).pause()
            clearInterval(audiot)
        }

    })

    $(".pro_pass").on("click","li",function(){
        $(".pro_info li").hide()
        $(".pro_info li").eq($(this).index()).show()
    })

    $(".mobile_pro").on("click","li",function(){
        console.log($(this))
        $(".mobile_info li").hide()
        $(".mobile_info li").eq($(this).index()).show()
    })


})