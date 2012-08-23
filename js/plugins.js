
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) console.log( Array.prototype.slice.call(arguments) );
};



// place any jQuery/helper plugins in here, instead of separate, slower script files.

(function($){var el;var settings={};var methods={init:function(options){el=this;settings={token:false,query_param:'query'};if(options){$.extend(settings,options);}
if(!settings.token||settings.query_param==''){return this;}
$.getJSON('http://tapirgo.com/api/1/search.json?token='+settings.token+'&query='+paramValue(settings.query_param)+'&callback=?',function(data){if(settings['complete']){settings.complete()}
$.each(data,function(key,val){el.append('<div class="result"><h3><a href="'+val.link+'">'+val.title+'</a></h3><p>'+val.summary+'</p></div>');});});return this;}};function paramValue(query_param){var results=new RegExp('[\\?&]'+query_param+'=([^&#]*)').exec(window.location.href);return results?results[1]:false;}
$.fn.tapir=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}else{$.error('Method '+method+' does not exist on jQuery.tapir');}};})(jQuery);