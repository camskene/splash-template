/*!
 * jQuery Cycle Lite Plugin
 * http://malsup.com/jquery/cycle/lite/
 * Copyright (c) 2008-2011 M. Alsup
 * Version: 1.3.1 (07-OCT-2011)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.3.2 or later
 */
(function(d){function j(e,b,c,f){function a(){if(b.timeout)g.cycleTimeout=setTimeout(function(){j(e,b,0,!b.rev)},b.timeout)}if(!b.busy){var g=e[0].parentNode,h=e[b.currSlide],i=e[b.nextSlide];if(0!==g.cycleTimeout||c)if(c||!g.cyclePause){b.before.length&&d.each(b.before,function(a,c){c.apply(i,[h,i,b,f])});if(b.nextSlide!=b.currSlide)b.busy=1,d.fn.cycle.custom(h,i,b,function(){d.browser.msie&&this.style.removeAttribute("filter");d.each(b.after,function(a,c){c.apply(i,[h,i,b,f])});a()});c=b.nextSlide+
1==e.length;b.nextSlide=c?0:b.nextSlide+1;b.currSlide=c?e.length-1:b.nextSlide-1}}}function k(d,b,c){var f=d[0].parentNode,a=f.cycleTimeout;if(a)clearTimeout(a),f.cycleTimeout=0;b.nextSlide=b.currSlide+c;if(0>b.nextSlide)b.nextSlide=d.length-1;else if(b.nextSlide>=d.length)b.nextSlide=0;j(d,b,1,0<=c);return!1}d.fn.cycle=function(e){return this.each(function(){e=e||{};this.cycleTimeout&&clearTimeout(this.cycleTimeout);this.cyclePause=this.cycleTimeout=0;var b=d(this),c=e.slideExpr?d(e.slideExpr,this):
b.children(),f=c.get();if(2>f.length)window.console&&console.log("terminating; too few slides: "+f.length);else{var a=d.extend({},d.fn.cycle.defaults,e||{},d.metadata?b.metadata():d.meta?b.data():{}),g=d.isFunction(b.data)?b.data(a.metaAttr):null;g&&(a=d.extend(a,g));a.before=a.before?[a.before]:[];a.after=a.after?[a.after]:[];a.after.unshift(function(){a.busy=0});g=this.className;a.width=parseInt((g.match(/w:(\d+)/)||[])[1])||a.width;a.height=parseInt((g.match(/h:(\d+)/)||[])[1])||a.height;a.timeout=
parseInt((g.match(/t:(\d+)/)||[])[1])||a.timeout;"static"==b.css("position")&&b.css("position","relative");a.width&&b.width(a.width);a.height&&"auto"!=a.height&&b.height(a.height);c.css({position:"absolute",top:0,left:0}).each(function(a){d(this).css("z-index",f.length-a)});d(f[0]).css("opacity",1).show();d.browser.msie&&f[0].style.removeAttribute("filter");a.fit&&a.width&&c.width(a.width);a.fit&&a.height&&"auto"!=a.height&&c.height(a.height);a.pause&&b.hover(function(){this.cyclePause=1},function(){this.cyclePause=
0});(g=d.fn.cycle.transitions[a.fx])&&g(b,c,a);c.each(function(){var b=d(this);this.cycleH=a.fit&&a.height?a.height:b.height();this.cycleW=a.fit&&a.width?a.width:b.width()});a.cssFirst&&d(c[0]).css(a.cssFirst);if(a.timeout){if(a.speed.constructor==String)a.speed={slow:600,fast:200}[a.speed]||400;a.sync||(a.speed/=2);for(;250>a.timeout-a.speed;)a.timeout+=a.speed}a.speedIn=a.speed;a.speedOut=a.speed;a.slideCount=f.length;a.currSlide=0;a.nextSlide=1;b=c[0];a.before.length&&a.before[0].apply(b,[b,b,
a,!0]);1<a.after.length&&a.after[1].apply(b,[b,b,a,!0]);if(a.click&&!a.next)a.next=a.click;a.next&&d(a.next).bind("click",function(){return k(f,a,a.rev?-1:1)});a.prev&&d(a.prev).bind("click",function(){return k(f,a,a.rev?1:-1)});if(a.timeout)this.cycleTimeout=setTimeout(function(){j(f,a,0,!a.rev)},a.timeout+(a.delay||0))}})};d.fn.cycle.custom=function(e,b,c,f){var a=d(e),g=d(b);g.css(c.cssBefore);var h=function(){g.animate(c.animIn,c.speedIn,c.easeIn,f)};a.animate(c.animOut,c.speedOut,c.easeOut,function(){a.css(c.cssAfter);
c.sync||h()});c.sync&&h()};d.fn.cycle.transitions={fade:function(d,b,c){b.not(":eq(0)").hide();c.cssBefore={opacity:0,display:"block"};c.cssAfter={display:"none"};c.animOut={opacity:0};c.animIn={opacity:1}},fadeout:function(e,b,c){c.before.push(function(b,a,c,e){d(b).css("zIndex",c.slideCount+(!0===e?1:0));d(a).css("zIndex",c.slideCount+(!0===e?0:1))});b.not(":eq(0)").hide();c.cssBefore={opacity:1,display:"block",zIndex:1};c.cssAfter={display:"none",zIndex:0};c.animOut={opacity:0}}};d.fn.cycle.ver=
function(){return"Lite-1.3"};d.fn.cycle.defaults={animIn:{},animOut:{},fx:"fade",after:null,before:null,cssBefore:{},cssAfter:{},delay:0,fit:0,height:"auto",metaAttr:"cycle",next:null,pause:0,prev:null,speed:1E3,slideExpr:null,sync:1,timeout:4E3}})(jQuery);

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */ 
 (function(){jQuery.cookie=function(d,c,a){if("undefined"!=typeof c){a=a||{};if(null===c)c="",a.expires=-1;var b="";if(a.expires&&("number"==typeof a.expires||a.expires.toUTCString))"number"==typeof a.expires?(b=new Date,b.setTime(b.getTime()+864E5*a.expires)):b=a.expires,b="; expires="+b.toUTCString();var e=a.path?"; path="+a.path:"",f=a.domain?"; domain="+a.domain:"",a=a.secure?"; secure":"";document.cookie=[d,"=",encodeURIComponent(c),b,e,f,a].join("")}else{c=null;if(document.cookie&&""!=document.cookie){a=
 document.cookie.split(";");for(b=0;b<a.length;b++)if(e=jQuery.trim(a[b]),e.substring(0,d.length+1)==d+"="){c=decodeURIComponent(e.substring(d.length+1));break}}return c}}})(jQuery);


 // get/set text fields onfocus/blur
 (function(){for(var b=document.getElementsByTagName("input"),a=0;a<b.length;a++)if("text"==b[a].type)b[a].setAttribute("rel",b[a].defaultValue),b[a].onfocus=function(){if(this.value==this.getAttribute("rel"))this.value="";else return!1},b[a].onblur=function(){if(""==this.value)this.value=this.getAttribute("rel");else return!1}})();    


 /*!
  * jQuery TubePlayer Plugin
  * 
  * version: 1.0.3 (14-Aug-2011)
  * @requires v1.3.2 or later
  *
  * @imports SWFObject - http://code.google.com/p/swfobject/
  *	- Degrades to flash based player if not HTML5/iframe option 
  *
  * Author: Nirvana Tikku (@ntikku / ntikku@gmail.com)
  * Documentation:
  * 		http://www.tikku.com/jquery-youtube-tubeplayer-plugin
  * 
  * Dual licensed under the MIT and GPL licenses:
  *   http://www.opensource.org/licenses/mit-license.php
  *   http://www.gnu.org/licenses/gpl.html 
  */
  (function(f){var d={ytplayers:{},inits:[],iframeScriptInited:!1,inited:!1};f.tubeplayer={};f.tubeplayer.defaults={afterReady:function(){},stateChange:function(a){var b=this.onPlayer;return function(c){if("object"==typeof c)c=c.data;switch(c){case -1:return b.unstarted[a]();case 0:return b.ended[a]();case 1:return b.playing[a]();case 2:return b.paused[a]();case 3:return b.buffering[a]();case 5:return b.cued[a]();default:return null}}},onError:function(a){var b=this.onErr;return function(c){if("object"==
  typeof c)c=c.data;switch(c){case 2:return b.invalidParameter[a]();case 100:return b.notFound[a]();case 101:case 150:return b.notEmbeddable[a]();default:return null}}},qualityChange:function(a){var b=this;return function(c){if("object"==typeof c)c=c.data;return b.onQualityChange[a](c)}},onQualityChange:{},onPlayer:{unstarted:{},ended:{},playing:{},paused:{},buffering:{},cued:{}},onErr:{notFound:{},notEmbeddable:{},invalidParameter:{}}};var j={width:425,height:355,allowFullScreen:"true",initialVideo:"",
  start:0,preferredQuality:"default",showControls:!0,showRelated:!1,autoPlay:!1,autoHide:!0,theme:"dark",color:"white",showinfo:!1,modestbranding:!0,wmode:"transparent",swfobjectURL:"http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js",loadSWFObject:!0,allowScriptAccess:"always",playerID:"tubeplayer-player-container",iframed:!0,onPlay:function(){},onPause:function(){},onStop:function(){},onSeek:function(){},onMute:function(){},onUnMute:function(){},onPlayerUnstarted:function(){},onPlayerEnded:function(){},
  onPlayerPlaying:function(){},onPlayerPaused:function(){},onPlayerBuffering:function(){},onPlayerCued:function(){},onQualityChange:function(){},onErrorNotFound:function(){},onErrorNotEmbeddable:function(){},onErrorInvalidParameter:function(){}};f.fn.tubeplayer=function(a,b){var c=f(this),h=typeof a;if(0==arguments.length||"object"==h)return c.each(function(){d.init(f(this),a)});if("string"==h)return c.triggerHandler(a+".tubeplayer",b||null)};var g=function(a){return function(b,c){var h=d.getPkg(b);
  if(h.ytplayer){var f=a(b,c,h);if("undefined"==typeof f)f=h.$player;return f}return h.$player}};f.tubeplayer.getPlayers=function(){return d.ytplayers};d.init=function(a,b){if(a.hasClass("jquery-youtube-tubeplayer"))return a;var c=f.extend({},j,b);c.playerID+=(new Date).valueOf();a.addClass("jquery-youtube-tubeplayer").data("opts.tubeplayer",c);for(e in i)a.bind(e+".tubeplayer",a,i[e]);d.initDefaults(f.tubeplayer.defaults,c);jQuery("<div></div>").attr("id",c.playerID).appendTo(a);d.initPlayer(a,c);
  return a};d.getPkg=function(a){var a=a.data,b=a.data("opts.tubeplayer");return{$player:a,opts:b,ytplayer:d.ytplayers[b.playerID]}};d.iframeReady=function(a){d.inits.push(function(){new YT.Player(a.playerID,{videoId:a.initialVideo,width:a.width,height:a.height,playerVars:{autoplay:a.autoPlay?1:0,autohide:a.autoHide?1:0,controls:a.showControls?1:0,rel:a.showRelated?1:0,fs:a.allowFullScreen?1:0,wmode:a.wmode,showinfo:a.showinfo?1:0,modestbranding:a.modestbranding?1:0,start:a.start,theme:a.theme,color:a.color},
  events:{onReady:function(b){d.ytplayers[a.playerID]=b.target;b=f(b.target).parents(".jquery-youtube-tubeplayer");f.tubeplayer.defaults.afterReady(b)},onPlaybackQualityChange:f.tubeplayer.defaults.qualityChange(a.playerID),onStateChange:f.tubeplayer.defaults.stateChange(a.playerID),onError:f.tubeplayer.defaults.onError(a.playerID)}})});if(1<=d.inits.length&&!d.inited)return function(){for(var a=0;a<d.inits.length;a++)d.inits[a]();d.inited=!0};d.inited&&d.inits.pop()();return onYouTubePlayerAPIReady};
  d.supportsHTML5=function(){return!!document.createElement("video").canPlayType};d.initDefaults=function(a,b){var c=b.playerID,d=a.onPlayer;d.unstarted[c]=b.onPlayerUnstarted;d.ended[c]=b.onPlayerEnded;d.playing[c]=b.onPlayerPlaying;d.paused[c]=b.onPlayerPaused;d.buffering[c]=b.onPlayerBuffering;d.cued[c]=b.onPlayerCued;a.onQualityChange[c]=b.onQualityChange;d=a.onErr;d.notFound[c]=b.onErrorNotFound;d.notEmbeddable[c]=b.onErrorNotEmbeddable;d.invalidParameter[c]=b.onErrorInvalidParameter};d.initPlayer=
  function(a,b){b.iframed&&d.supportsHTML5()?d.initIframePlayer(a,b):d.initFlashPlayer(a,b)};d.initIframePlayer=function(a,b){if(!d.iframeScriptInited){var c=document.createElement("script");c.src="http://www.youtube.com/player_api";var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(c,f);d.iframeScriptInited=!0}onYouTubePlayerAPIReady=d.iframeReady(b)};d.initFlashPlayer=function(a,b){b.loadSWFObject?f.getScript(b.swfobjectURL,d.initFlashPlayerFN(b)):d.initFlashPlayerFN(b)()};
  d.initFlashPlayerFN=function(a){return function(){var b=["//www.youtube.com/v/"];b.push(a.initialVideo);b.push("?fs="+(a.allowFullScreen?1:0));b.push("&enablejsapi=1&version=3");b.push("&playerapiid="+a.playerID);b.push("&rel= "+(a.showRelated?1:0));b.push("&autoplay="+(a.autoPlay?1:0));b.push("&autohide="+(a.autoHide?1:0));b.push("&controls="+(a.showControls?1:0));b.push("&showinfo="+(a.showinfo?1:0));b.push("&modestbranding="+(a.modestbranding?1:0));b.push("&start="+a.start);b.push("&theme="+a.theme);
  b.push("&color="+a.color);swfobject.embedSWF(b.join(""),a.playerID,a.width,a.height,"8",null,null,{allowScriptAccess:a.allowScriptAccess,wmode:a.wmode,allowFullScreen:a.allowFullScreen},{id:a.playerID});onYouTubePlayerReady=function(a){var b=document.getElementById(a);d.ytplayers[a]=b;b.addEventListener("onStateChange","$.tubeplayer.defaults.stateChange('"+a+"')");b.addEventListener("onError","$.tubeplayer.defaults.onError('"+a+"')");b.addEventListener("onPlaybackQualityChange","$.tubeplayer.defaults.qualityChange('"+
  a+"')");a=f(b).parents(".jquery-youtube-tubeplayer");f.tubeplayer.defaults.afterReady(a)}}};d.getVideoIDFromURL=function(a){var b=a.indexOf("youtube.com/watch?v=")+20,c=a.indexOf("&",b)||a.length;return b>c?"":a.substring(b,c)};var i={cue:g(function(a,b,c){c.ytplayer.cueVideoById(b,c.opts.preferredQuality)}),play:g(function(a,b,c){"object"==typeof b?c.ytplayer.loadVideoById(b.id,b.time,c.opts.preferredQuality):b?c.ytplayer.loadVideoById(b,0,c.opts.preferredQuality):c.ytplayer.playVideo();c.opts.onPlay(b)}),
  pause:g(function(a,b,c){c.ytplayer.pauseVideo();c.opts.onPause()}),stop:g(function(a,b,c){c.ytplayer.stopVideo();c.opts.onStop()}),seek:g(function(a,b,c){c.ytplayer.seekTo(b,!0);c.opts.onSeek(b)}),mute:g(function(a,b,c){c.$player.attr("data-prev-mute-volume",c.ytplayer.getVolume());c.ytplayer.mute();c.opts.onMute()}),unmute:g(function(a,b,c){c.ytplayer.unMute();c.ytplayer.setVolume(c.$player.attr("data-prev-mute-volume")||50);c.opts.onUnMute()}),isMuted:g(function(a,b,c){return c.ytplayer.isMuted()}),
  volume:g(function(a,b,c){if(b)c.ytplayer.setVolume(b),c.$player.attr("data-prev-mute-volume",c.ytplayer.getVolume());else return c.ytplayer.getVolume()||0}),quality:g(function(a,b,c){if(b)c.ytplayer.setPlaybackQuality(b);else return c.ytplayer.getPlaybackQuality()}),data:g(function(a,b,c){a={};c=c.ytplayer;a.bytesLoaded=c.getVideoBytesLoaded();a.bytesTotal=c.getVideoBytesTotal();a.startBytes=c.getVideoStartBytes();a.state=c.getPlayerState();a.currentTime=c.getCurrentTime();a.availableQualityLevels=
  c.getAvailableQualityLevels();a.duration=c.getDuration();a.videoURL=c.getVideoUrl();a.getVideoEmbedCode=c.getVideoEmbedCode();a.videoID=d.getVideoIDFromURL(a.videoURL);return a}),videoId:g(function(a,b,c){return d.getVideoIDFromURL(c.ytplayer.getVideoUrl())}),size:g(function(a,b,c){b.width&&b.height&&(c.ytplayer.setSize(b.width,b.height),f(c.ytplayer).css(b))}),destroy:g(function(a,b,c){c.$player.removeClass("jquery-youtube-tubeplayer").data("opts.tubeplayer",null).unbind(".tubeplayer").html("");
  delete d.ytplayers[c.opts.playerID];f(c.ytplayer).remove();return null}),player:g(function(a,b,c){return c.ytplayer})}})(jQuery);
