$(function(){"use strict";
$(function(){$(".preloader").fadeOut()}),
    $(function(){$('[data-toggle="tooltip"]').tooltip()}),
    $(function(){$('[data-toggle="popover"]').popover()}),
    jQuery(document).on("click",".mega-dropdown",
        function(o){o.stopPropagation()}),
    jQuery(document).on("click",".navbar-nav > .dropdown",
        function(o){o.stopPropagation()}),
    $(".dropdown-submenu").click(function(){
        $(".dropdown-submenu > .dropdown-menu").toggleClass("show")}),
    $("body").trigger("resize");
var o=$(window);o.on("load",function(){
    var e=o.scrollTop(),n=$(".topbar");
    e>100?n.addClass("fixed-header animated slideInDown"):n.removeClass("fixed-header animated slideInDown")}),
        $(window).scroll(function(){
            $(window).scrollTop()>=100?(
                $(".topbar").addClass("fixed-header animated slideInDown"),
                    $(".bt-top").addClass("visible")):(
                        $(".topbar").removeClass("fixed-header animated slideInDown"),
                            $(".bt-top").removeClass("visible"))}),AOS.init(),
    $(".logo,.bt-top").on("click",function(o)
    {o.preventDefault(),
        $("html,body").animate({scrollTop:0},700)
    });
});