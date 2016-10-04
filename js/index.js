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
        $(".about_passage .pass_two .pass_tx").height($(".about_passage .pass_two .pass_tx").width())
        $(".report_passage  .report_tx .my_photo").height($(".report_passage  .report_tx .my_photo").width())
        // $(".report_passage  .report_skills").height($(".report_passage  .report_tx").width())
        $(".about_passage .pass_two .pass_tx .pass_nr").height($(".about_passage .pass_two .pass_tx .pass_nr").width())
    })
    $(window).trigger("resize")
})