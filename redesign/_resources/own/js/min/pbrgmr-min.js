$(document).ready(function(){setTimeout(function(){$("h1").addClass("fadeIn")},500);var o=$(".vp-center").height(),t=$("#about").height();$(".vp-center").css({"padding-top":i/2-s/2});var s=$(".vp-center").height(),i=$("#contact").height();$(".vp-center").css({"padding-top":i/2-s/2}),$("#formular-text").remove();var r=1200;if($(document).width()>r){var e=.5,c=1;$(".portfolio-design").hover(function(){$("#design-hover").attr("src","_resources/own/img/svg/design-colored.svg"),$(".portfolio-code, .portfolio-photo, .html, .css, .javascript, .php, .imovie").css({opacity:e,transition:"0.3s"})},function(){$("#design-hover").attr("src","_resources/own/img/svg/design.svg"),$(".portfolio-code, .portfolio-photo, .html, .css, .javascript, .php, .imovie").css({opacity:c,transition:"0.3s"})}),$(".portfolio-code").hover(function(){$("#code-hover").attr("src","_resources/own/img/svg/code-colored.svg"),$(".portfolio-design, .portfolio-photo, .photoshop, .illustrator, .indesign, .imovie").css({opacity:e,transition:"0.3s"})},function(){$("#code-hover").attr("src","_resources/own/img/svg/code.svg"),$(".portfolio-design, .portfolio-photo, .photoshop, .illustrator, .indesign, .imovie").css({opacity:c,transition:"0.3s"})}),$(".portfolio-photo").hover(function(){$("#photo-hover").attr("src","_resources/own/img/svg/photo-colored.svg"),$(".portfolio-design, .portfolio-code, .illustrator, .indesign, .html, .css, .javascript, .php").css({opacity:e,transition:"0.3s"})},function(){$("#photo-hover").attr("src","_resources/own/img/svg/photo.svg"),$(".portfolio-design, .portfolio-code, .illustrator, .indesign, .html, .css, .javascript, .php").css({opacity:c,transition:"0.3s"})})}});