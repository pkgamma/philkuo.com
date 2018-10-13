jQuery(function(){
jQuery(".tooltip").tipTip({maxWidth: "auto", edgeOffset: -10, delay:100});
jQuery(".ranknode img").tipTip({maxWidth: "auto", edgeOffset: 7, delay:200});
jQuery(".tooltiptop").tipTip({maxWidth: "auto", edgeOffset: 7, delay:100, defaultPosition:"top"});
jQuery(".searchtip").tipTip({maxWidth: "auto", defaultPosition:"right", activation:"focus", edgeOffset: -20, delay:100,content:"輸入關鍵字,按下Enter搜尋" });
jQuery(".osb").tipTip({maxWidth: "auto", edgeOffset: 7, activation:"focus", delay:100, defaultPosition:"top"});
jQuery(".popupmenu").tipTip({maxWidth: "auto", edgeOffset: 7, delay:0, keepAlive: "true", content: "<a href='http://t.sina.com.cn/macideas' target='_blank'>新浪微博</a><br/><a href='http://t.qq.com/macidea-weibo' target='_blank'>腾讯微博</a><br/><a href='http://www.twitter.com/macidea' target='_blank'>Twitter</a>"});
jQuery(".weiboshare").tipTip({maxWidth: "auto", edgeOffset: 7, delay:0, keepAlive: "true", content: "<a href='javascript:sinaweibo()'>新浪微博</a><br/><a href='javascript:shareren()'>人人网</a><br/><a href='javascript:sharetui()'>Twitter</a><br/><a href='javascript:sharefb()'>Facebook</a>"});
});
jQuery(document).ready(function(){
var first = 0;var speed = 700;var pause = 3500;
function removeFirst(){
first = jQuery('ul#newstopics li:first').html();
jQuery('ul#newstopics li:first')
.animate({opacity: 0}, speed)
.fadeOut('slow', function() {jQuery(this).remove();});
addLast(first);
}
function addLast(first){
last = '<li style="display:none">'+first+'</li>';
jQuery('ul#newstopics').append(last)
jQuery('ul#newstopics li:last')
.animate({opacity: 1}, speed)
.fadeIn('slow')
}
interval = setInterval(removeFirst, pause);
});
