"use strict";function fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{default:[],portrait:[],landscape:[]},sm:{default:[],portrait:[],landscape:[]},md:{default:[],portrait:[],landscape:[]},"md-h":{default:[],portrait:[],landscape:[]},lg:{default:[],portrait:[],landscape:[]},xl:{default:[],portrait:[],landscape:[]},device:{default:[],portrait:[],landscape:[]},pc:{default:[],portrait:[],landscape:[]},xxl:{default:[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w>767&&e.screen.w<1025},e.isMD=function(){return e.screen.w>1024&&e.screen.w<1200},e.isMDH=function(){return e.screen.w>1024&&e.screen.w<1281&&e.screen.h>909},e.isLG=function(){return e.screen.w>1199&&e.screen.w<1400},e.isXL=function(){return e.screen.w>1399&&e.screen.w<1681},e.isXXL=function(){return e.screen.w>1680},e.device=function(){return e.screen.w<1010},e.pc=function(){return e.screen.w>1024},e.screenIs=function(){var s="noname";return e.isXS()?s="xs":e.isSM()?s="sm":e.isMD()?s="md":e.isMDH()?s="md-h":e.isLG()?s="lg":e.isXL()?s="xl":e.isXXL()?s="xxl":e.device()?s="device":e.pc()&&(s="pc"),s},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var s="noname";return e.isPortrait()?s="portrait":e.isLandscape()&&(s="landscape"),s},e.is=function(s){return s==e.screenIs()||s==e.orientationIs()},e.onResize=function(s,n){if(s.type){var i=e.__resizefunctions[s.type];s.orientation?i[s.orientation].push(n):i.default.push(n)}},e.resizeCall=function(s){if(s.type){if(e.__resizefunctions[s.type].default)for(var n=0;n<e.__resizefunctions[s.type].default.length;n++){var i=e.__resizefunctions[s.type].default[n];i(s)}if(e.__resizefunctions[s.type][s.orientation])for(var n=0;n<e.__resizefunctions[s.type][s.orientation].length;n++){var i=e.__resizefunctions[s.type][s.orientation][n];i(s)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}window.onerror=function(e,s,n,i,a){console.log("Error FECSS: "+s+":"+n+":"+i+": "+JSON.stringify(e)+"\n"+JSON.stringify(a))};var screenJS=new fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(e){var s=jQuery.fn.addClass,n=jQuery.fn.removeClass,i=jQuery.fn.toggleClass;e.fn.addClass=function(){var n=s.apply(this,arguments);return e(this).trigger("changeClass",["add"]),n},e.fn.removeClass=function(){var s=n.apply(this,arguments);return e(this).trigger("changeClass",["remove"]),s},e.fn.toggleClass=function(){var s=i.apply(this,arguments);return e(this).trigger("changeClass",["toggle"]),s}}(jQuery),!function(){$(window).on("load",function(){var e=$(".navbar__hamburger-btn").data("toggle-nav"),s=$(".navbar__hamburger-btn").data("body"),n=$(".navbar__hamburger-btn").data("collapse-nav");$(".navbar__hamburger-btn").on("click",function(){$(s).toggleClass("is--open-navbar"),$(e).toggleClass("is--open"),$(n).toggleClass("is--open"),$(this).toggleClass("is--active")}),$(document.body).on("click",function(i){0==$(i.target).closest(".navbar").length&&($(s).removeClass("is--open-navbar"),$(e).removeClass("is--open"),$(n).removeClass("is--open"),$(".navbar__hamburger-btn").removeClass("is--active"))})})}(),$(function(){$(document.body).on("changeClass",null,{},function(e,s){}),$(function(){var e="noname-browser",s=navigator.userAgent.toLowerCase();s.indexOf("msie")!=-1&&(e="msie"),s.indexOf("trident")!=-1&&(e="msie"),s.indexOf("konqueror")!=-1&&(e="konqueror"),s.indexOf("firefox")!=-1&&(e="firefox"),s.indexOf("safari")!=-1&&(e="safari"),s.indexOf("chrome")!=-1&&(e="chrome"),s.indexOf("chromium")!=-1&&(e="chromium"),s.indexOf("opera")!=-1&&(e="opera"),s.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){}),$("img").addClass("img-responsive");var e=window.location.pathname;$('.navbar__nav a[href="'+e+'"]').parent().addClass("is--active"),$('.navbar__nav-dropdown-menu a[href="'+e+'"]').parent().addClass("is--active"),$(".text__block table").addClass("table table-bordered"),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled"),$(".text__block .table.table-bordered").wrap('<div class="table-responsive"></div>'),$(window).on("resize",function(e){$(function(){var e={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},s={xs:{min:0,max:361},sm:{min:360,max:769},md:{min:768,max:961},lg:{min:960,max:1e4}},n="window-width",i="window-height",a=$(window).outerWidth(!0),t=$(window).outerHeight(!0),o=$("html body").eq(0);a<e.xs.max&&(o.hasClass("window-width-sm")&&o.removeClass("window-width-sm"),o.hasClass("window-width-md")&&o.removeClass("window-width-md"),o.hasClass("window-width-lg")&&o.removeClass("window-width-lg"),n="window-width-xs"),a>e.sm.min&&a<e.sm.max&&(o.hasClass("window-width-xs")&&o.removeClass("window-width-xs"),o.hasClass("window-width-md")&&o.removeClass("window-width-md"),o.hasClass("window-width-lg")&&o.removeClass("window-width-lg"),n="window-width-sm"),a>e.md.min&&a<e.md.max&&(o.hasClass("window-width-xs")&&o.removeClass("window-width-xs"),o.hasClass("window-width-sm")&&o.removeClass("window-width-sm"),o.hasClass("window-width-lg")&&o.removeClass("window-width-lg"),n="window-width-md"),a>e.lg.min&&(o.hasClass("window-width-xs")&&o.removeClass("window-width-xs"),o.hasClass("window-width-sm")&&o.removeClass("window-width-sm"),o.hasClass("window-width-md")&&o.removeClass("window-width-md"),n="window-width-lg"),t<s.xs.max&&(o.hasClass("window-height-sm")&&o.removeClass("window-height-sm"),o.hasClass("window-height-md")&&o.removeClass("window-height-md"),o.hasClass("window-height-lg")&&o.removeClass("window-height-lg"),i="window-height-xs"),t>s.sm.min&&t<s.sm.max&&(o.hasClass("window-height-xs")&&o.removeClass("window-height-xs"),o.hasClass("window-height-md")&&o.removeClass("window-height-md"),o.hasClass("window-height-lg")&&o.removeClass("window-height-lg"),i="window-height-sm"),t>s.md.min&&t<s.md.max&&(o.hasClass("window-height-xs")&&o.removeClass("window-height-xs"),o.hasClass("window-height-sm")&&o.removeClass("window-height-sm"),o.hasClass("window-height-lg")&&o.removeClass("window-height-lg"),i="window-height-md"),t>s.lg.min&&(o.hasClass("window-height-xs")&&o.removeClass("window-height-xs"),o.hasClass("window-height-sm")&&o.removeClass("window-height-sm"),o.hasClass("window-height-md")&&o.removeClass("window-height-md"),i="window-height-lg"),$("html body").eq(0).addClass(n).addClass(i)}),!function(){screenJS.pc()?($(".catalog-item__cols.is--preview .catalog-item__preview").attr("data-fancybox","catalog-preview"),$(".gallery-panel__cols.is--one .gallery-panel__item").removeAttr("data-fancybox")):($(".catalog-item__cols.is--preview .catalog-item__preview").removeAttr("data-fancybox"),$(".gallery-panel__cols.is--one .gallery-panel__item").attr("data-fancybox","catalog-preview"))}()}).trigger("resize"),$(window).on("scroll",function(e){var s=$(document).scrollTop(),n=$(".navbar-site.scroll");n.hasClass("scroll-navbar")?s<=500&&n.removeClass("scroll-navbar"):s>500&&n.addClass("scroll-navbar"),n.hasClass("opacity")?s<=200&&n.removeClass("opacity"):s>200&&n.addClass("opacity"),n.hasClass("fixed")?s<=400&&n.removeClass("fixed"):s>400&&n.addClass("fixed")}).trigger("scroll"),window.onbeforeunload=function(e){$("body").trigger("fecss.window.unload",[e])},$(document.body).trigger("fecss.init")});