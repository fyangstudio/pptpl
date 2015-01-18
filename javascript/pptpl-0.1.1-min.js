/**
 *前端模板库 pptpl：
 * 兼容性：IE6+
 * version: 0.1.1
 *@author：ppfyang(hzyang_fan@corp.netease.com)
 */
(function(_global){var _variables=[];var _settings={listStart:/{{#list\s*([^}]*?)\s*as\s*(\w*?)\s*(,\s*\w*?)?}}/igm,listEnd:/{{\/list}}/igm,interpolate:/{{([\s\S]+?)}}/igm,comment:/{{!([^}]*?)!}}/igm,ifStart:/{{#if\s*([^}]*?)}}/igm,ifEnd:/{{\/if}}/igm,elseStart:/{{#else}}/igm,elseifStart:/{{#elseif\s*([^}]*?)}}/igm};var pptpl=function(_tpl,_data){var _tplArr=_tpl.split("\n");for(var i=0,l=_tplArr.length;i<l;i++){_tplArr[i]=_tplArr[i].replace(/(^\s*)|(\s*$)/g,"")}_tpl=(_tplArr.join("")||_tpl).replace(/&lt;/igm,"<").replace(/&gt;/igm,">").replace(/&amp;/igm,"&").replace(/"/igm,"'");pptpl.options={tpl:_tpl,data:_data};_variables=[];return pptpl.template.call(pptpl)};pptpl.template=function(){var prefix="";var _counter=0;var _convert='"use strict"; var _out = "";try { <%innerFunction%>";return _out;} catch(e) {throw new Error("pptpl: "+e.message);}';var _tpl=this.options.tpl.replace(_settings.comment,"").replace(_settings.listStart,function($,_target,_object){var _var=_object||"value";var _key="key"+_counter++;if(!_target.match(/\./g)){_variables.push(_target)}if(_target.match(/(\w+?)\[/g)){_variables.push(_target.match(/(\w+?)\[/g)[0].replace("[",""))}return'";~function() { '+"var i"+_counter+" = 0;"+"for(var "+_key+" in "+_target+") {"+"if("+_target+".hasOwnProperty("+_key+")) {"+"var _i = i"+_counter+"++;"+"var _v = "+_target+"["+_key+"]; "+"var "+_var+' = typeof( _v ) === "object" ? _v : [_v];'+_var+"._index = _i"+'; _out += "'}).replace(_settings.listEnd,'";}}}(); _out += "').replace(_settings.ifStart,function($,_condition){return'"; if('+_condition+') { _out+="'}).replace(_settings.ifEnd,'";}_out+="').replace(_settings.elseStart,function($){return'"; } else { _out+="'}).replace(_settings.elseifStart,function($,condition){return'"; } else if('+condition+') { _out+="'}).replace(_settings.interpolate,function($,_name){_variables.push(_name.split(".")[0]);return'"; _out+='+_name+'; _out += "'});for(var i=0,l=_variables.length;i<l;i++){var _variable=_variables[i].replace(/\[.+\]/g,"");prefix+="var "+_variable+" = _data."+_variable+(i==l-1?'||"':'||"";')}if(_tpl.indexOf('"')>0){prefix+='"; _out += "'}var _render=new Function("_data",_convert.replace(/<%innerFunction%>/g,prefix+_tpl));return _render.call(this,pptpl.options.data)};typeof(module)!=="undefined"&&module.exports?module.exports=pptpl:_global.pptpl=pptpl})(window);